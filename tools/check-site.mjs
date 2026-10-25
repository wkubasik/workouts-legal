#!/usr/bin/env node
// Checks the legal site against its list of languages (lang.js; workouts-frontend docs/languages-plan.md, LANG-21):
//
// - every page holds one section per language of the list, and none of another; English's shown and every other
//   hidden, so that a browser without JavaScript reads English; <html lang="en">, the menu's place and lang.js;
// - each translation drafted from English is English's markup — the same elements in the same order — but for a block of its own market's
//   law (<div class="local">, such as Brazil's LGPD in the Privacy Policy);
// - the footer's words and a draft's notice exist in every language that needs them, and the index's titles;
// - the <link rel="alternate" hreflang> of every page name exactly the published languages (`--fix` writes them);
// - §L.3's rule, case by case, as published and with every draft published.
//
// Run: node tools/check-site.mjs [--fix]. No dependency; nothing here is published (.assetsignore).

import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = createRequire(import.meta.url)(join(root, 'lang.js'));
const fix = process.argv.includes('--fix');

/** The site's address, which an hreflang alternate must name whole. Cloudflare serves a page without its `.html`. */
const ORIGIN = 'https://wkubasik.pl';
const PAGES = ['index.html', 'privacy-policy.html', 'terms-of-service.html', 'delete-account.html', 'support.html', 'company.html'];
const FOOTER_WORDS = ['home', 'company', 'privacy', 'terms', 'delete', 'support'];

const problems = [];
const problem = (where, what) => problems.push(`${where}: ${what}`);

const codes = site.LANGUAGES.map(language => language.code);
const published = site.LANGUAGES.filter(language => !language.draft).map(language => language.code);

// --- The list's own words ---
for (const language of site.LANGUAGES) {
  for (const word of ['language', ...FOOTER_WORDS, ...(language.draft ? ['draft', 'draftLink'] : [])]) {
    if (!language.words?.[word]) problem('lang.js', `${language.code} has no "${word}"`);
  }
}

// --- The pages ---
const SECTION = /<section class="lang( hidden)?" lang="([^"]+)"(?: data-title="([^"]*)")?>([\s\S]*?)<\/section>/g;

/** The tag sequence of a section's markup, a block of its own market's law left out. */
function tagsOf(html) {
  const outside = html.replace(/<div class="local"[^>]*>[\s\S]*?<\/div>/g, '');
  return [...outside.matchAll(/<(\/?[a-z][a-z0-9]*)\b/gi)].map(match => match[1].toLowerCase());
}

/** Where two tag sequences first part, for a message a person can act on. */
function firstDifference(a, b) {
  const at = a.findIndex((tag, i) => tag !== b[i]);
  const i = at < 0 ? Math.min(a.length, b.length) : at;
  return `tag ${i + 1}: ${a.slice(Math.max(0, i - 3), i + 3).join(' ')} ≠ ${b.slice(Math.max(0, i - 3), i + 3).join(' ')}`;
}

function alternatesOf(page) {
  const path = page === 'index.html' ? '/' : `/${page.replace(/\.html$/, '')}`;
  const lines = published.map(code => `  <link rel="alternate" hreflang="${code}" href="${ORIGIN}${path}?lang=${code}">`);
  lines.push(`  <link rel="alternate" hreflang="x-default" href="${ORIGIN}${path}">`);
  return `  <!-- alternates: the published languages, written by node tools/check-site.mjs --fix -->\n${lines.join('\n')}\n  <!-- /alternates -->\n`;
}

for (const page of PAGES) {
  let html = readFileSync(join(root, page), 'utf8');

  const alternates = alternatesOf(page);
  const block = /  <!-- alternates:[^\n]*-->\n[\s\S]*?  <!-- \/alternates -->\n/;
  const current = html.match(block)?.[0];
  if (current !== alternates) {
    if (fix) {
      html = current ? html.replace(block, alternates) : html.replace('</head>', `${alternates}</head>`);
      writeFileSync(join(root, page), html);
    } else {
      problem(page, 'the hreflang alternates do not name the published languages (run with --fix)');
    }
  }

  if (!/<html lang="en">/.test(html)) problem(page, 'no <html lang="en">');
  if (!html.includes('<div class="lang-menu" hidden></div>')) problem(page, 'no language menu');
  if ((html.match(/<script src="lang\.js"><\/script>/g) ?? []).length !== 1) problem(page, 'lang.js is not loaded once');
  if (/<script>/.test(html)) problem(page, 'an inline script');
  for (const word of FOOTER_WORDS) {
    if (!html.includes(`data-word="${word}"`)) problem(page, `the footer has no "${word}"`);
  }

  const sections = new Map();
  for (const [, hidden, code, title, body] of html.matchAll(SECTION)) {
    if (sections.has(code)) problem(page, `two sections in ${code}`);
    if (!codes.includes(code)) problem(page, `a section in ${code}, which the list does not have`);
    if (code === site.FALLBACK ? hidden : !hidden) {
      problem(page, `${code}'s section ${code === site.FALLBACK ? 'is hidden' : 'is shown'} without JavaScript`);
    }
    if (page === 'index.html' && !title) problem(page, `${code}'s section has no data-title`);
    sections.set(code, body);
  }
  const english = sections.get(site.FALLBACK);
  for (const code of codes) {
    const body = sections.get(code);
    if (body === undefined) {
      problem(page, `no section in ${code}`);
      continue;
    }
    // Polish was written beside English from the start, and says in its own words what English quotes in Polish
    // (company.html's *jednoosobowa działalność gospodarcza*): the translations are English's markup.
    if (code === site.FALLBACK || code === 'pl' || !english) continue;
    const mine = tagsOf(body);
    const theirs = tagsOf(english);
    if (mine.join() !== theirs.join()) problem(page, `${code}'s markup is not English's — ${firstDifference(mine, theirs)}`);
    if (/class="local"/.test(english)) problem(page, 'English holds a block of a market of its own');
  }
}

// --- §L.3's rule ---
const choose = (asked, stored, browser, drafts = false) => site.chooseLanguage(asked, stored, browser, drafts);
const RULE = [
  // [?lang=, stored pick, browser, drafts published, expected, what]
  ['ja', null, 'ja', false, 'en', '?lang=ja opens English'],
  [null, null, 'ja', false, 'en', 'a Japanese browser opens English'],
  [null, null, 'ja', true, 'en', 'a Japanese browser opens English, every draft published'],
  [null, null, 'pt-PT', true, 'en', "a browser in Portugal's Portuguese opens English"],
  [null, null, 'pt', true, 'en', 'a browser in Portuguese with no region opens English'],
  [null, null, 'pl-PL', false, 'pl', 'a Polish browser opens Polish'],
  ['en', null, 'pl-PL', false, 'en', '?lang=en opens English in a Polish browser'],
  [null, null, 'en-GB', false, 'en', 'an English browser opens English'],
  ['PL', null, 'de', false, 'pl', '?lang= is read whatever its case'],
  ['', null, 'pl', false, 'pl', 'an empty ?lang= names no language'],
  [null, 'pl', 'de-DE', false, 'pl', 'a pick on the menu comes before the browser'],
  ['en', 'pl', 'pl', false, 'en', '?lang= comes before a pick'],
  [null, 'xx', 'pl', false, 'pl', 'a pick of no language is no pick'],
];
if (codes.includes('de')) {
  RULE.push(
    ['de', null, 'pl-PL', false, 'de', 'a Polish browser with ?lang=de opens German'],
    [null, null, 'de-DE', true, 'de', 'a German browser opens German, published'],
    [null, null, 'de-AT', true, 'de', "an Austrian browser opens German, published"],
  );
}
if (codes.includes('es-419')) {
  RULE.push(
    [null, null, 'es-ES', true, 'es-419', "a browser in Spain's Spanish opens Latin American Spanish, published"],
    [null, null, 'es-MX', true, 'es-419', "a Mexican browser opens Latin American Spanish, published"],
    ['es', null, 'es-ES', true, 'en', '?lang=es names no language of the site, and opens English'],
    ['es-419', null, 'en', false, 'es-419', '?lang=es-419 opens Latin American Spanish'],
  );
}
if (codes.includes('pt-BR')) {
  RULE.push(
    [null, null, 'pt-BR', true, 'pt-BR', "a Brazilian browser opens Brazilian Portuguese, published"],
    ['pt-br', null, 'en', false, 'pt-BR', '?lang=pt-br opens Brazilian Portuguese'],
  );
}
if (codes.includes('uk')) RULE.push([null, null, 'uk-UA', true, 'uk', 'a Ukrainian browser opens Ukrainian, published']);
for (const language of site.LANGUAGES.filter(each => each.draft)) {
  const browser = language.phones[0];
  RULE.push(
    [null, null, browser, false, 'en', `a browser in ${language.code}, its text a draft, opens English`],
    [null, language.code, browser, false, 'en', `a pick of ${language.code}, its text a draft, is no pick`],
  );
}
for (const [asked, stored, browser, drafts, expected, what] of RULE) {
  const got = choose(asked, stored, browser, drafts);
  if (got !== expected) problem('lang.js', `${what}: ${got}, not ${expected}`);
}
for (const language of site.LANGUAGES) {
  const listed = site.menuLanguages(language.code).map(each => each.code);
  if (!listed.includes(language.code)) problem('lang.js', `the menu does not list ${language.code} while it is shown`);
  for (const draft of site.LANGUAGES.filter(each => each.draft && each.code !== language.code)) {
    if (listed.includes(draft.code)) problem('lang.js', `the menu lists the draft ${draft.code}`);
  }
}

if (problems.length) {
  console.error(problems.map(line => `✗ ${line}`).join('\n'));
  console.error(`\n${problems.length} problem(s).`);
  process.exit(1);
}
console.log(`✓ ${PAGES.length} pages in ${codes.length} languages (${published.join(', ')} published` +
  `${codes.length > published.length ? `; ${codes.filter(code => !published.includes(code)).join(', ')} drafts` : ''}), ` +
  `${RULE.length} cases of the rule.`);
