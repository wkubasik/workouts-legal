# Workouts — Store legal pages

Static pages and copy for the Google Play (and App Store) listing of the **Workouts** app.

**Pages to publish (GitHub Pages):**
- `privacy-policy.html` — Privacy Policy (EN + PL)
- `delete-account.html` — Account & Data Deletion instructions (EN + PL)
- `index.html` — simple landing linking both
- `styles.css` — shared styling (theme-aware, mobile-first)

**Reference docs (do NOT publish — for your Play Console setup):**
- `store-descriptions.md` — short + full descriptions (EN + PL)
- `data-safety-form.md` — click-by-click answers for the Play Data safety questionnaire
- `ios-app-privacy.md` — Apple App Privacy label + account-deletion (5.1.1(v)) compliance

## Publish with GitHub Pages

1. Create a **public** GitHub repo, e.g. `workouts-legal`.
2. Copy the contents of this `store-pages/` folder into the repo root and push to `main`.
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save.
4. After ~1 minute your pages are live at:
   - `https://wkubasik.github.io/workouts-legal/privacy-policy.html`
   - `https://wkubasik.github.io/workouts-legal/delete-account.html`

## Paste these URLs into Google Play Console

- **Privacy policy** (App content → Privacy policy): the `privacy-policy.html` URL above.
- **Delete account URL** (App content → Data safety → account/data deletion): the
  `delete-account.html` URL above.

The pages use only relative links, so they work under any username/repo without edits.
If you use a different repo name, substitute it in the URLs.
