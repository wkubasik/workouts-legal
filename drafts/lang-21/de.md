# German (de): notes for the reviewer

> The lawyer's briefing for this language's draft of the legal site (workouts-frontend `docs/languages-plan.md`, LANG-21,
> §Q.2), written as it was drafted on 25 October 2026. Not published: `.assetsignore` keeps `drafts/` and every `*.md`
> out of the upload. Once the language is published, its As built records the sign-off and this file goes.

Drafted from the English sections as they stand after LANG-21's restructuring of the pages (the Terms' §18 and the Privacy Policy's last
bullet of §7 included). Voice: *du*, lower case; "wir" is the business.

## Terms chosen

- **Page names follow the app** (`de.json`), as every language's do: *Datenschutzerklärung*
  (`settingsPage.legal.privacyPolicy`) and *Nutzungsbedingungen* (`settingsPage.legal.termsOfUse`, "Terms of Use"). Each
  page's `<h1>`, `ui.json` and every reference on the other pages use these names. The deletion page is titled *Dein Konto und
  deine Daten löschen*, and so do its links, the index's button and the footer (LANG-44: one name for the page).
- **Company page**: *Angaben zum Unternehmen*, with *Unternehmen* in the footer and on the button. I did not call it
  *Impressum*. Whether the page should serve as the Impressum for DE/AT (§ 5 DDG; § 5 ECG / § 25 MedienG) is for the
  reviewer to decide. If it does, it probably needs that title and more fields.
- **"trading as"**: *handelnd unter der Firma …*. This uses *Firma* in its legal sense, matching Polish *pod firmą*.
  "Business name" became *Name des Unternehmens*, which is plainer for a consumer than *Firma*. "NIP (Tax ID)" became
  *NIP (Steuernummer)*.
- **CEIDG**: *Zentrales Register und Informationssystem für Gewerbetätigkeit (CEIDG)* is my own rendering; I know of no
  official German name. "Podkarpackie Voivodeship" became *Woiwodschaft Podkarpackie*. I kept the Polish name because
  it is a postal address; German usage also knows *Karpatenvorland*.
- **DSGVO terms**:
  - *Verantwortlicher*; *Erfüllung unseres Vertrags* (Art. 6 Abs. 1 lit. b DSGVO); *berechtigtes Interesse* (lit. f);
    *ausdrückliche Einwilligung* (Art. 9 Abs. 2 lit. a DSGVO); *Einwilligung widerrufen*.
  - The rights: *Auskunft*, *berichtigen*, *löschen*, *Verarbeitung einschränken*, *widersprechen*. "Take it with you"
    is kept plain (*sie mitzunehmen*, i.e. Art. 20).
  - Withdrawal of consent is worded as Art. 7 Abs. 3 words it: *die Verarbeitung bis zum Widerruf bleibt davon
    unberührt*.
  - Automated decisions follow Art. 22's wording.
  - Transfers: *Datenschutzrahmen EU-USA (EU–US Data Privacy Framework)*. The standard contractual clauses are *von
    der Europäischen Kommission erlassen*, since the Commission adopts them (the English says "approved"). "Safeguards"
    became *Garantien*, as Art. 46 says.
  - Every article cite carries "DSGVO", as German lawyers cite, although the English drops "GDPR" after the first
    mention. All article numbers are unchanged.
- **The Polish authority**: *Präsident des Amtes für den Schutz personenbezogener Daten (Prezes Urzędu Ochrony Danych
  Osobowych, …)*.
- **Consumer law**:
  - "Right … to withdraw from a purchase" became *Widerrufsrecht*.
  - "Complaint" became *Beschwerde*. Polish *reklamacja* has no exact German counterpart.
  - *Verbraucherombudsmann einer Stadt oder eines Kreises (rzecznik konsumentów)*; *Woiwodschaftsinspektorat der
    Handelsinspektion (Inspekcja Handlowa)*.
- **Billing words, as the app writes them** (translation guide §5.10):
  - Words: subscription plan *Tarif* (never *Plan*, which is the training plan), subscription *Abo*, cancel *kündigen*,
    free trial *kostenlose Testphase*, top-up *Aufladung*, credits *Credits* / *Coach-Credits*, founding member
    *Gründungsmitglied*.
  - Plan names: *Kostenlos*, *Pro*, *Pro + KI-Coach*. In a sentence the free plan is *der Tarif Kostenlos*, and "Free
    costs nothing" became *Für den Tarif Kostenlos zahlst du nichts*.
  - *Abo* is colloquial for a legal text. I kept it because the reader has to find the button *Abo verwalten*.
- **Other words**:
  - "Allowance" became *Kontingent* and "grace period" *Kulanzzeitraum*.
  - "Plans screen" (the paywall) became *Tarifauswahl*. The paywall's titles are *Wähle deinen Tarif* and *Tarife
    vergleichen*, so no screen carries that exact name.
  - "Body measurements" became *Körperdaten*. "Units" became *Maßeinheiten*, because *Einheit* is the app's word for a
    session.
- **Gender**: I kept the generic *Verbraucher* because it is the statutory term (§ 13 BGB). "Doctor" became *Ärztin
  oder Arzt* and "testers" *Testpersonen*. The coach is *er*, as in the app.
- **Dates**: *Zuletzt aktualisiert: 25. Oktober 2026* and *5. Oktober 2026*. **Mail subjects**: *Mein Workouts-Konto
  löschen*, *Teile meiner Workouts-Daten löschen*, *Workouts-Support*.
- `index.html`'s German section will also need a `data-title`, which the restructured page now carries. It is
  *Workouts — Rechtliches*.

## Adapted rather than translated

- On the deletion page, the e-mail examples are infinitives („alle meine Trainingseinheiten löschen“). This avoids
  choosing *ihr* or *Sie* towards the business.
- I wrote *zum Beispiel* instead of *z. B.*, which would need a no-break space.
- "Sign in with Apple or Google" is written generically, as *Anmeldung mit Apple oder Google*. Apple's own German name
  is *Mit Apple anmelden*, and the app's button says *Mit Apple fortfahren*.
- On the support page, "Developer:" became *Entwickler*, as the App Store says.

## Store and OS labels I am not sure of

- **Play Store**: profile → *Zahlungen und Abos* → *Abos*. I am fairly sure of the words, but not whether the Play Store
  shows *und* or *&*.
- **iPhone**: *Einstellungen → dein Name → Abonnements*. I am confident of this one.
- **Apple's EULA**: I believe its German title is *Endbenutzer-Lizenzvertrag für lizenzierte Anwendungen*. I kept the
  English title in brackets, as the Polish does.
- **Grace period**: Apple's German term may be *Nachfrist für die Abrechnung* rather than *Kulanzzeitraum*.

## Problems found in the source

**LANG-44 fixed these on 26 October 2026, in English, Polish and this draft**, as the product owner decided
(workouts-frontend `docs/languages-plan.md`, LANG-44): the pages name the Settings row as it reads — *Einstellungen →
Workouts Pro*, or *Upgrade* on the Free plan — and the page it opens as the subscription page; English's site calls
the Terms *Terms of Use*, as the app does; the deletion page has one name in every language, its title (*Dein Konto und deine Daten löschen*), in
its links, the index and the footer; problem reports name their bases — answering one, by e-mail too, is *Erfüllung unseres Vertrags*,
finding and fixing the problem *berechtigtes Interesse*; the bullet names the switch, *Letzte Aktivität anhängen*, and what it attaches, a log of the
app's recent activity; the Android app no longer carries Firebase Cloud Messaging, which nothing used, so §4 names
Crashlytics alone; the introduction says who else processes the data rather than who processes it *for us*, and §4
opens on those who process it rather than on companies, since it lists controllers and the authorities too; the
purchases paragraph gives the account the credits it *bought or was given*; the quotes are typographic; and the Polish
addresses the reader neutrally (*usunąłem* stays: the person's own words). The Terms' and the Privacy Policy's "Last
updated" read 26 October 2026 in every language. Checked and left as they are: the index naming the developer and the
other pages his business, both true; "goals and weekly targets", a description rather than a label; and "plan" for
the tier and the training plan alike in English, which this draft tells apart. Each item below is as it was found.

1. **"Settings → Subscription" names no row.** This path appears in Privacy §2 (AI Coach), Terms §4, §5 and §7, and
   Support. The Settings hub's row is labelled *Workouts Pro* (`settingsPage.subscription.pro`) or *Upgrade*
   (`settingsPage.subscription.upgrade`), never "Subscription". Only the page it opens is titled "Subscription"
   (`subscriptionPage.title`; DE *Abo*). The same is true in every language. It is filed as a fix to
   the English (LANG-44 in workouts-frontend's `docs/languages-plan.md`), so the German kept the path as written, *Einstellungen → Abo*, until LANG-44 fixed it.
2. **Terms of Use vs Terms of Service.** The app calls the document "Terms of Use", but the English site calls it
   "Terms of Service". German follows the app.
3. **One page, four names.** The deletion page is called "Delete your account & data" (h1), "Account & Data Deletion"
   (links in Privacy §3 and Support), "Delete Account" (footer) and "Delete Account & Data" (index).
4. **Straight quotes.**
   - `support.html` EN uses straight quotes and an apostrophe ("Android 14, Pixel 8", "We're"). So does
     `company.html` EN ("JDG"). Everything else uses ’ and “ ”.
   - `support.html` PL opens „Android 14, Pixel 8" with „ but closes it with an ASCII ".
5. **Developer named two ways.** `index.html` names the developer as "Wiesław Kubasik", while the other pages say
   "Kariera Programisty Wiesław Kubasik".
6. **Firebase Cloud Messaging.**
   - Privacy §4 says Crashlytics and Firebase Cloud Messaging both "receive crash reports … and an identifier", but FCM
     receives no crash reports.
   - Nothing says what FCM is used for, while §2 says notifications are "not sent from our server". The policy should
     say what FCM does, or drop it if it is unused.
7. **Questions of substance for the lawyer** (not about translation):
   - **Health data**: Privacy §2 says explicit consent under Art. 9(2)(a) is given "by entering" body data. German
     practice expects an explicit statement, not conduct.
   - **Apple refund consent**: it is given "in our Terms when you buy through the App Store". That raises Art. 7(2)
     (the request must be distinguishable) and Art. 7(4) (tying consent to a purchase).
   - **Terms §16**: treating continued use as acceptance of changed terms (BGH XI ZR 26/20, already in plan §L.3).
   - **Terms §14**: it names only Polish bodies. Check whether a § 36 VSBG statement is needed for German consumers (it
     is probably not required with ten or fewer employees).
