/*
 * The legal site's languages, and the language a page opens in (workouts-frontend docs/languages-plan.md, §L.3,
 * LANG-21). Every page holds a <section class="lang" lang="…"> per language, English's the one shown without
 * JavaScript, and loads this script last. It shows one section, sets <html lang> and the title, fills the language menu
 * and the footer's words, and carries the language on the site's own links.
 *
 * The language a page opens in — a language the site has no text for reads English, never Polish:
 *   1. `?lang=` names a language of the list: that language;
 *   2. `?lang=` names one it does not have: English;
 *   3. no `?lang=`: the visitor's pick on the menu, else the browser's language where the site has it — matched as the
 *      app matches a phone's, by `phones` (any Spanish reads Latin American Spanish, Brazil's Portuguese alone reads
 *      Brazilian Portuguese) — else English.
 *
 * A language marked `draft` has texts that wait for their lawyer's review (docs/languages-plan.md, §Q.2): only a link
 * naming it opens it, under a notice that the English version applies, and neither the menu, a stored pick nor the
 * browser's language leads to it. Its review signed off, the change that publishes it takes `draft` away and adds its
 * <link rel="alternate"> to every page (`node tools/check-site.mjs --fix`).
 *
 * `node tools/check-site.mjs` loads this file as a module to check the rule and every page against the list.
 */
(function (factory) {
  var site = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = site;
  } else {
    site.start(window, document);
  }
})(function () {
  'use strict';

  /**
   * The site's languages, in the app's order (workouts-frontend src/app/services/i18n/languages.json): each one's code
   * and own name as the app writes them, the browser languages that open in it, and the words around the sections.
   */
  var LANGUAGES = [
    {
      code: 'en', name: 'English', phones: ['en'],
      words: {
        language: 'Language', home: 'Home', company: 'Company', privacy: 'Privacy Policy',
        terms: 'Terms of Service', delete: 'Delete Account', support: 'Support'
      }
    },
    {
      code: 'pl', name: 'Polski', phones: ['pl'],
      words: {
        language: 'Język', home: 'Strona główna', company: 'Firma', privacy: 'Polityka prywatności',
        terms: 'Regulamin', delete: 'Usuń konto', support: 'Pomoc'
      }
    }
    /* LANGUAGES */
  ];

  var FALLBACK = 'en';
  // Only a pick on the menu is kept: the toggle before LANG-21 kept whatever a page opened in under `workouts_lang`,
  // which is no pick, and is no longer read.
  var STORE = 'workouts_lang_pick';

  function normalized(tag) {
    return String(tag || '').trim().replace(/_/g, '-').toLowerCase();
  }

  /** The list's entry for a code, matched whole and case-insensitively; null for any other. */
  function languageOf(code) {
    var wanted = normalized(code);
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (normalized(LANGUAGES[i].code) === wanted) return LANGUAGES[i];
    }
    return null;
  }

  /** Whether a language is offered to everyone: not a draft, or every draft counted as published (`drafts`). */
  function isOpen(language, drafts) {
    return !!language && (!language.draft || !!drafts);
  }

  /**
   * The language a browser's tag opens in, by the list's `phones` as the app's `languageForPhone` reads a phone's:
   * a prefix matched at a subtag's end, the longest first — `de-AT` opens `de`, `es-ES` `es-419`, `pt-BR` `pt-BR`, and
   * `pt-PT` and `ja` none (null). A draft opens for none of them.
   */
  function languageForBrowser(tag, drafts) {
    var browser = normalized(tag);
    if (!browser) return null;
    var found = null;
    var length = 0;
    LANGUAGES.forEach(function (language) {
      if (!isOpen(language, drafts)) return;
      language.phones.forEach(function (phone) {
        var prefix = normalized(phone);
        if ((browser === prefix || browser.indexOf(prefix + '-') === 0) && prefix.length > length) {
          found = language;
          length = prefix.length;
        }
      });
    });
    return found;
  }

  /**
   * §L.3's rule: `asked` is `?lang=`'s value (null without one), `stored` the visitor's pick on the menu, `browser` the
   * browser's first language. `drafts` counts every draft as published, which only the check uses.
   */
  function chooseLanguage(asked, stored, browser, drafts) {
    if (asked !== null && asked !== undefined && normalized(asked) !== '') {
      return (languageOf(asked) || languageOf(FALLBACK)).code;
    }
    var picked = languageOf(stored);
    if (isOpen(picked, drafts)) return picked.code;
    var own = languageForBrowser(browser, drafts);
    return (own || languageOf(FALLBACK)).code;
  }

  /** The languages the menu lists: the published ones, and the one on show. */
  function menuLanguages(shown) {
    return LANGUAGES.filter(function (language) {
      return !language.draft || language.code === shown;
    });
  }

  function storedPick(window) {
    try {
      return window.localStorage.getItem(STORE);
    } catch (e) {
      return null;
    }
  }

  function keepPick(window, code) {
    try {
      window.localStorage.setItem(STORE, code);
    } catch (e) { /* a browser that keeps nothing still shows the pick */ }
  }

  /** A link to a page of this site: a relative `*.html`, with or without a query or a fragment. */
  function isSiteLink(href) {
    return !!href && !/^[a-z][a-z0-9+.-]*:/i.test(href) && /^[^?#]*\.html(?:[?#]|$)/i.test(href);
  }

  /** `href` naming `code` in its `?lang=`, everything else kept. */
  function withLanguage(href, code) {
    var hash = '';
    var at = href.indexOf('#');
    if (at >= 0) {
      hash = href.slice(at);
      href = href.slice(0, at);
    }
    var query = '';
    at = href.indexOf('?');
    if (at >= 0) {
      query = href.slice(at + 1);
      href = href.slice(0, at);
    }
    var params = query.split('&').filter(function (part) {
      return part && part.split('=')[0] !== 'lang';
    });
    params.push('lang=' + encodeURIComponent(code));
    return href + '?' + params.join('&') + hash;
  }

  function start(window, document) {
    var sections = document.querySelectorAll('section.lang[lang]');
    var params = new window.URLSearchParams(window.location.search);
    var browser = (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language;
    var shown = chooseLanguage(params.get('lang'), storedPick(window), browser, false);
    if (!document.querySelector('section.lang[lang="' + shown + '"]')) shown = FALLBACK;

    function show(code) {
      var language = languageOf(code);
      var words = language.words;
      var section = null;
      sections.forEach(function (each) {
        var on = each.getAttribute('lang') === code;
        each.classList.toggle('hidden', !on);
        if (on) section = each;
      });
      document.documentElement.lang = code;

      var heading = section.querySelector('h1');
      document.title = section.getAttribute('data-title')
        || (heading ? heading.textContent.trim() + ' — Workouts' : document.title);

      document.querySelectorAll('[data-word]').forEach(function (element) {
        var word = words[element.getAttribute('data-word')];
        if (word) element.textContent = word;
      });

      document.querySelectorAll('a[href]').forEach(function (link) {
        var href = link.getAttribute('href');
        if (isSiteLink(href) && !link.closest('.draft-notice')) link.setAttribute('href', withLanguage(href, code));
      });

      // The notice's own link names English, and the links above never rewrite it.
      var notice = section.querySelector('.draft-notice');
      if (language.draft && !notice && words.draft) {
        notice = document.createElement('p');
        notice.className = 'card draft-notice';
        notice.appendChild(document.createTextNode(words.draft + ' '));
        var english = document.createElement('a');
        english.href = withLanguage(window.location.pathname.split('/').pop() || 'index.html', FALLBACK);
        english.lang = FALLBACK;
        english.hreflang = FALLBACK;
        english.textContent = words.draftLink;
        notice.appendChild(english);
        section.insertBefore(notice, heading ? heading.nextSibling : section.firstChild);
      }

      menu(code);
    }

    function menu(code) {
      var holder = document.querySelector('.lang-menu');
      if (!holder) return;
      holder.textContent = '';
      var select = document.createElement('select');
      select.setAttribute('aria-label', languageOf(code).words.language);
      menuLanguages(code).forEach(function (language) {
        var option = document.createElement('option');
        option.value = language.code;
        option.lang = language.code;
        option.textContent = language.name;
        option.selected = language.code === code;
        select.appendChild(option);
      });
      select.addEventListener('change', function () {
        var picked = select.value;
        if (!languageOf(picked).draft) keepPick(window, picked);
        // The address names the pick too, so that a reload — where `?lang=` comes first — keeps it.
        var url = withLanguage(window.location.pathname + window.location.search + window.location.hash, picked);
        try {
          window.history.replaceState(null, '', url);
        } catch (e) { /* the address keeps the old language; the page shows the pick */ }
        show(picked);
      });
      holder.appendChild(select);
      holder.hidden = false;
    }

    show(shown);
  }

  return {
    LANGUAGES: LANGUAGES,
    FALLBACK: FALLBACK,
    languageOf: languageOf,
    languageForBrowser: languageForBrowser,
    chooseLanguage: chooseLanguage,
    menuLanguages: menuLanguages,
    isSiteLink: isSiteLink,
    withLanguage: withLanguage,
    start: start
  };
});
