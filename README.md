# Workouts — Store legal pages

Static pages and copy for the Google Play (and App Store) listing of the **Workouts** app.

**Pages to publish:**
- `index.html` — landing page linking everything below
- `company.html` — company/legal-identity information (business name, NIP, REGON, address) —
  this is the "organization ownership" page for Google Play Console
- `privacy-policy.html` — Privacy Policy (EN + PL)
- `terms-of-service.html` — Terms of Service (EN + PL)
- `delete-account.html` — Account & Data Deletion instructions (EN + PL)
- `support.html` — Support / contact page (EN + PL)
- `styles.css` — shared styling (theme-aware, mobile-first)

**Reference docs (do NOT publish — for your Play Console setup):**
- `store-descriptions.md` — short + full descriptions (EN + PL)
- `data-safety-form.md` — click-by-click answers for the Play Data safety questionnaire
- `ios-app-privacy.md` — Apple App Privacy label + account-deletion (5.1.1(v)) compliance

The pages use only relative links, so they work under any domain or subpath without edits.

**Keep them in step with the backend's copies.** The app itself links to the texts the backend
serves (`workouts-backend/src/main/resources/legal/{en,pl}/{privacy,terms,delete-account}.html`,
published at `https://workouts.wkubasik.pl/legal/…`). The privacy policy, terms and deletion page
here must say the same things: a change to what the app or the backend processes, keeps or sells
is a change to both copies. They were last brought in line with the code on 5 October 2026 (the
AI Coach's credit pool and top-ups, SUB-31 … SUB-35).

## Publish with Cloudflare Pages (recommended)

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and
   select this repo (`wkubasik/workouts-legal`).
2. Build settings: this is a plain static site, so leave the **build command** empty and set the
   **build output directory** to `/` (repo root).
3. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
4. Go to the project's **Custom domains** tab and add your own domain (it must already be on
   Cloudflare DNS, or you add it there as part of this step). Cloudflare issues the certificate
   and routes the domain to the deployment automatically.

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
- **Terms of Service**: the `terms-of-service.html` URL.
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
