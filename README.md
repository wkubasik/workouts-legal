# Workouts — Store legal pages

Static pages and copy for the Google Play (and App Store) listing of the **Workouts** app.

**Pages to publish** — each in every language of `lang.js` (below):
- `index.html` — landing page linking everything below
- `company.html` — company/legal-identity information (business name, NIP, REGON, address) —
  this is the "organization ownership" page for Google Play Console
- `privacy-policy.html` — Privacy Policy
- `terms-of-service.html` — Terms of Use, the name the app links them by (its file keeps the old name, which every
  link in use names)
- `delete-account.html` — Delete your account & data: how to delete an account, or part of its data
- `support.html` — Support / contact page
- `lang.js` — the site's languages, and the one script of every page (below)
- `styles.css` — shared styling (theme-aware, mobile-first)

**Reference docs** for the stores' consoles are not here: they are workouts-frontend's `store-listing/` — the
descriptions under each store's `metadata/`, the Play Data safety answers in `google-play/data-safety.md` and Apple's
App Privacy label in `app-store/app-privacy.md`. They follow these pages.

**Tools (do NOT publish — `tools/`, kept out of the upload by `.assetsignore`):**
- `tools/check-site.mjs` — `node tools/check-site.mjs` checks every page against `lang.js` and the
  language rule case by case; `--fix` writes each page's `hreflang` alternates. Run it after every
  change. Node alone, no dependency.

**Drafts (do NOT publish — `drafts/`, kept out of the upload by `.assetsignore`):**
- `drafts/watches.md` — what the watch apps add to the privacy policy, the account-deletion page and
  the Terms (EN + PL). The Apple Watch's part is on the pages, in every language, since 27 October
  2026 (workouts-frontend `docs/languages-plan.md`, LANG-43); what is left is Wear OS's, Garmin's and
  Amazfit's, each published with its watch's launch, in every language of the site, and the change
  that publishes the last of them deletes the draft.
- `drafts/lang-21/<code>.md` — each language's briefing from its draft: what it chose, what it
  adapted, the labels it was unsure of and the questions it had for a lawyer. Its language was
  published on 27 October 2026 without a lawyer's review (`docs/languages-plan.md`, LANG-D10), and the
  briefing is kept as the record of those choices and questions, should a lawyer ever read the text.

The pages use only relative links, so they work under any domain or subpath without edits.

**This repo is the only source of the legal texts.** They are published at `https://wkubasik.pl`,
and nothing else holds a copy:

- The app links to them (`billing.legal` in `workouts-frontend/src/environments/`): the paywall and
  the Settings hub open `…/terms-of-service.html?lang=<the app's language>` and
  `…/privacy-policy.html?lang=…`, the app's code as its list writes it (`en`, `pl`, `de`, `es-419`,
  `fr`, `it`, `pt-BR`, `uk`). A release build links a language only once its texts are published
  here, and English's until then.
- The backend answers the URLs older builds link to, `https://workouts.wkubasik.pl/legal/{en,pl}/{terms,privacy,delete-account}`,
  with a permanent redirect to the matching page here (`LEGAL_SITE_URL`, backend `deploy/README.md`,
  "Legal pages"). It holds no text of its own.
- A change to what the app or the backend processes, keeps or sells is a change to these pages. They
  were last brought in line with the code on 5 October 2026 (the AI Coach's credit pool and
  top-ups, SUB-31 … SUB-35), on 14 October 2026 (Apple's refund requests answered through
  RevenueCat, with the buyer's consent, ACO-06), on 25 October 2026 (the Terms' §18 on the
  versions in other languages and the Privacy Policy's line on asking in your own, LANG-21), and on 26 October 2026
  (LANG-44: the Settings row the pages name, one name for the Terms and one for the deletion page, the problem reports'
  legal bases, Firebase Cloud Messaging gone from the Android app and from §4, and Polish in neutral address), and on
  27 October 2026 (LANG-43: the Apple Watch, which the app has carried since 1.1.8 — the Privacy Policy's "Apple
  Watch" part and its lines in §2, §3 and §4, the account-deletion page's watch, and the Terms' §2 and §8), and for
  the app release that brings its two switches (LANG-56: body measurements on the explicit consent of *Use my body
  measurements*, Apple's refund questions answered only once *Answer Apple's refund questions* is switched on, the
  watch's health data on Apple Health's permission, and the Terms' §16 asking for acceptance of a change that takes
  anything away or adds to the price). Publish that change when the app release carrying the switches is out.
- Moving the site to another address means changing `billing.legal` in the app,
  `LEGAL_SITE_URL` in the backend's `.env`, and `ORIGIN` in `tools/check-site.mjs` (then `--fix`),
  which the pages' `hreflang` alternates name whole.

## Languages

Every page holds one `<section class="lang" lang="<code>">` per language, in the app's order
(`workouts-frontend/src/app/services/i18n/languages.json`), and loads `lang.js` last
(workouts-frontend `docs/languages-plan.md`, §L.3, LANG-21). English is the drafting master, every
language carries its "Last updated", and English's section is the one a browser without JavaScript
shows. The script shows one section, sets `<html lang>` and the title, fills the language menu and the
footer's words, and carries the language on the site's own links. A page opens in:

1. the language `?lang=` names, when the site has it (`?lang=pt-br` reads `pt-BR`);
2. English, when `?lang=` names one it does not have (`?lang=ja`, `?lang=es`, `?lang=pt`);
3. without `?lang=`: the visitor's pick on the menu, else the browser's language where the site has
   it — matched as the app matches a phone's, by `phones`: any Spanish reads `es-419`, Brazil's
   Portuguese alone reads `pt-BR`, so Portugal's opens English — else English.

Polish therefore opens only for a Polish browser, a Polish pick or `?lang=pl`: a language the site
has no text for reads English, never Polish.

**Drafts.** A language marked `draft` in `lang.js` has texts not yet published: only a link naming
it opens it, under a notice that the English version applies; the menu lists it only while it is
shown, a pick of it is not kept, and no browser's language opens it. German, Spanish (Latin
America), French, Italian, Portuguese (Brazil) and Ukrainian were drafts from LANG-21 (25 October
2026) and were published on 27 October 2026, by the product owner's decision, without a lawyer's
review (`docs/languages-plan.md`, LANG-D10); the Terms' §18 keeps English the version that applies
where a translation differs, unless the law where the reader lives says otherwise. No language is a
draft now. **Publishing a language** that is: take `draft` and its notice's words off its entry,
run `node tools/check-site.mjs --fix` (its `hreflang` alternates), and record it in LANG-21's As
built; then the app's `environment.prod.ts` gains its two URLs.

**A block of one market's own** — something its law asks that the English does not say, such as
Brazil's LGPD in the Privacy Policy — is a `<div class="local">` in that language's section; every
other part of a translation is English's markup, which the check holds.

**A new language**: its entry in `lang.js` (code and own name as the app's list writes them, its
`phones`, the words around the sections, `draft: true`), a section in each page — `index.html`'s with
its `data-title` — and the check.

## Publish with Cloudflare Workers (recommended)

The site is deployed as a Worker with static assets only, no Worker script. `wrangler.jsonc`
serves the repo root; `.assetsignore` keeps this README, the reference docs, and the config files
out of the upload. A new file added to the root is published unless it is listed there.

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Import a repository** and
   select this repo (`wkubasik/workouts-legal`).
2. Build settings: leave the **build command** empty. The **deploy command** is
   `npx wrangler deploy`; the non-production branch command is `npx wrangler versions upload`.
3. Deploy. Cloudflare gives you a `*.workers.dev` URL immediately.
4. Go to the Worker's **Settings → Domains & Routes** and add your own domain (it must already be
   on Cloudflare DNS). Cloudflare issues the certificate and routes the domain to the Worker.

Cloudflare serves every page without its `.html`: `/privacy-policy.html?lang=pl` answers with a
307 to `/privacy-policy?lang=pl`, which keeps the language, so links ending in `.html` keep
working.

### After the custom domain is live: verify it for Google

This is required for a Play Console **Organization** developer account, and is done outside this
repo:

1. In [Google Search Console](https://search.google.com/search-console), add your custom domain
   as a property and verify ownership via the **DNS (TXT record)** method — add the TXT record
   Google gives you in your Cloudflare DNS settings for that domain.
2. Once verified, go to Play Console's account details page and submit your website URL
   (`https://your-domain/company.html` or your homepage) for verification — it's matched against
   the Search Console property.

## Paste these URLs into Google Play Console

- **Organization website / ownership proof**: your custom domain's `company.html` — shows the
  legal business name, NIP, REGON, and registered address.
- **Privacy policy** (App content → Privacy policy): the `privacy-policy.html` URL.
- **Terms of Use**: the `terms-of-service.html` URL.
- **Delete account URL** (App content → Data safety → account/data deletion): the
  `delete-account.html` URL.
- **Support URL**: the `support.html` URL.

## Publish with GitHub Pages (alternative)

1. Create a **public** GitHub repo, e.g. `workouts-legal`.
2. Push the contents of this folder to `main`.
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save.
4. After ~1 minute your pages are live at:
   - `https://wkubasik.github.io/workouts-legal/company.html`
   - `https://wkubasik.github.io/workouts-legal/privacy-policy.html`
   - `https://wkubasik.github.io/workouts-legal/terms-of-service.html`
   - `https://wkubasik.github.io/workouts-legal/delete-account.html`
   - `https://wkubasik.github.io/workouts-legal/support.html`

If you use a different repo name, substitute it in the URLs above.
