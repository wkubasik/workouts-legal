# Ukrainian (uk) — notes on the legal-site draft (LANG-21)

> The lawyer's briefing for this language's draft of the legal site (workouts-frontend `docs/languages-plan.md`, LANG-21,
> §Q.2), written as it was drafted on 25 October 2026. Not published: `.assetsignore` keeps `drafts/` and every `*.md`
> out of the upload. Once the language is published, its As built records the sign-off and this file goes.

For the reviewing lawyer (Ukrainian-speaking, Polish and EU law, plan §Q.2) and the product owner.

## Terms chosen

- **Register.** *ви*, lower case, as the app writes it (translation guide §4.1). Nothing agrees with the reader's gender:
  past tenses are plural (*ви ввійшли*, *ви погодилися*), and a quoted request uses an impersonal form (see "Adapted").
- **GDPR.** On first mention (Privacy Policy §2, "Your account"): *Загальний регламент захисту даних (GDPR)*. The
  English cites it by name only there, so the short form *GDPR* appears nowhere else. Ukrainian is not an official EU
  language, so there is no official Ukrainian text. The name is the one used in Ukrainian practice.
- **Article citations.** *стаття 6(1)(b)*, the nominative in parentheses (*статті 6(1)(a) і 9(2)(a)* for two). I chose
  this over *пункт «b» частини 1 статті 6* because it keeps the EU's own numbering exactly as the English has it. It
  also avoids Ukrainian *частина*, which in Ukrainian statutes means an unnumbered part. The point letters stay Latin,
  as the regulation writes them.
- **GDPR vocabulary.** controller *контролер* (the term in Ukrainian renderings of the GDPR; Ukrainian national law says
  *володілець*). performance of a contract *виконання договору*. explicit consent *явна згода*. legitimate interest
  *законний інтерес*. to take it with you *перенесення*. standard contractual clauses *стандартні договірні положення*.
  Data Privacy Framework *Рамкова програма захисту даних ЄС–США (EU–US Data Privacy Framework)*, with the English name
  kept in parentheses as the Polish version does. data protection authority *орган із захисту даних*.
- **Polish bodies.** Prezes UODO is *Голова Управління захисту персональних даних (Prezes Urzędu Ochrony Danych
  Osobowych, …)*. *Prezes* is rendered *Голова*, the usual Ukrainian title for the head of an office; *Президент* would
  also be possible. rzecznik konsumentów is *міський чи повітовий уповноважений із захисту прав споживачів*.
  Inspekcja Handlowa is *воєводський інспекторат Торговельної інспекції*. CEIDG is *Центральний облік та інформація
  про господарську діяльність (CEIDG)*. JDG is *індивідуальний підприємець* / *індивідуальна підприємницька
  діяльність*. The reviewer may want to add the Ukrainian analogue *ФОП* for readers from Ukraine. I did not add it.
- **Consumer law.** complaint (Terms §1, §14) is *скарга*; the reviewer may prefer *претензія*. losses *збитки*.
  mandatory rules *імперативні норми*. right to withdraw from a purchase *право споживача відмовитися від покупки*.
  grace period *пільговий період*. trading as *який здійснює підприємницьку діяльність під найменуванням*.
- **Billing words (§5.15).** A subscription tier is *тариф*, so that *план* stays the training plan's word. The plans
  are *Безкоштовний*, *Pro* and *Pro + ШІ-тренер*; *Pro + ШІ-тренер* stays in the nominative after *тариф*.
  - *Безкоштовний* is written as a capitalised adjective agreeing with *тариф* (*Безкоштовного тарифу*, *у
    Безкоштовному тарифі*), as the catalogue's `ai.quota.closed.plan` does. Elsewhere the catalogue writes
    *тариф Безкоштовний*. The reviewer may prefer *тариф «Безкоштовний»*.
  - Other billing words: credits *кредити*, a grant *нарахування*, a top-up *поповнення*. Credits that never expire
    *діють безстроково*; credits that expire *згорають*. Taken back *анульовано*. Allowance *ліміт*. Refund
    *повернення коштів*.
  - Founding members are named by the app's status label: *зі статусом «З нами від початку»*. The guide says this is
    a status, never a noun for a person.
- **AI Coach.** *ШІ-тренер*, then *тренер*, never *він* (§5.15). Its notice is *примітка*, which is what
  `ai.notice.waiting` calls it. The AI provider is *постачальник ШІ*. Weekly check-ins are *щотижневі огляди*.
- **App words.** The app is *застосунок*. A session is *заняття*; a sign-in session is *сеанс входу*, never *сесія*.
  A set is *підхід*. Strength standards are *рівні сили*, the app's own word. Body measurements are *параметри тіла*.
  Effort is *оцінка навантаження*. The Live Activity is *тренування наживо*, on the *замкненому екрані*. The phone's
  own screen lock (Privacy Policy §7) is *блокування екрана*.
- **Page titles.** These follow the app's catalogue, as every language's do:
  - Terms: *Умови використання* (`settingsPage.legal.termsOfUse`).
  - Privacy Policy: *Політика конфіденційності* (`settingsPage.legal.privacyPolicy`).
  - Delete page: *Видалення облікового запису й даних*, in both the h1 and the links; the footer says *Видалення
    облікового запису*.
  - Company page: *Відомості про компанію*; the footer and index button say *Компанія*.
  - Support: *Підтримка*.
- **App labels quoted** (all from uk.json):
  - Settings pages: *Налаштування* (`settingsPage.title`), *Керувати обліковим записом*, *Видалити обліковий запис*,
    *Експортувати мої тренування*, *Діагностика*, *Повідомити про проблему* (`diagnostics.report.open`).
  - Subscription page: *Підписка* (`subscriptionPage.title`), *Керувати підпискою*, *Відновити покупки*,
    *ШІ-тренер* (`subscriptionPage.ai.title`).
  - The paywall, "the plans screen", is described as *екран тарифів*.
  - Paths keep the English arrows without «».

## Adapted rather than translated

- **`&` in titles and links** ("Delete your account &amp; data", "Account &amp; Data Deletion", "Delete Account &amp;
  Data") is written *й*. Ukrainian does not use the ampersand in running text. The tag check passes. The only
  difference from the English is the missing `&amp;` entity.
- **The delete page's h1** is a noun phrase, *Видалення облікового запису й даних*, not an imperative. This is the
  natural form for a Ukrainian page title, and it matches the link text.
- **The e-mail example "erase what I deleted in the app"** becomes *«зітріть усе, що вже видалено в застосунку»*. A
  first-person past tense (*я видалив / видалила*) would take the writer's gender.
- **The mailto subjects:**
  - *Видаліть мій обліковий запис Workouts*
  - *Видаліть частину моїх даних Workouts*
  - *Підтримка Workouts*

  Each is percent-encoded in UTF-8, and the delete page's visible text quotes the first one word for word.
- **Support card.** I attached "if you are reporting a bug" to the steps to reproduce only, which is the most literal
  reading of the English. The Polish applies it to the whole request.
- **"Trading as"** is the Ukrainian descriptive phrase above. The Latin names *Wiesław Kubasik* and *Kariera
  Programisty Wiesław Kubasik* stay undeclined.
- **"user agent"** is *рядок агента користувача (user agent)*, with the English term in parentheses as the Polish
  version has it.
- **index.html** has a `data-title` attribute in the current source ("Workouts — Legal"). Set when the drafts went onto
  the pages: *Workouts — Правова інформація*.

## Store and OS labels I am not sure of

- **iPhone path:** *Параметри → ваше ім’я → Підписки*. Ukrainian iOS names the Settings app *Параметри*, and Apple's
  Ukrainian support uses *Підписки*. I am fairly sure of both, but they should be checked on a device.
- **Android path:** *у застосунку Play Маркет: ваш профіль → Платежі й підписки → Підписки*. On Ukrainian Android the
  store app has been labelled *Play Маркет*; this may now be *Google Play*. The menu item may be *Платежі та
  підписки* rather than *Платежі й підписки*. Least sure of these two.
- **Sign in with Apple:** *вхід з Apple / через Apple*. Apple's Ukrainian product name is, I believe, *Вхід з Apple*.
  The app's own button reads *Продовжити з Apple*.

## Problems found in the source (not fixed)

1. **Polish addresses the reader in the masculine throughout the legal pages.** This is the same issue as F8 /
   LANG-31, but on the site rather than in the catalogue. Examples:
   - Privacy Policy, AI Coach: "zaakceptowałeś jego informację".
   - Privacy Policy, crash reports: "jeśli jesteś zalogowany".
   - Privacy Policy, problem reports: "To, co napisałeś" (twice).
   - Terms §6: "Nic, co utworzyłeś".
   - Terms §7: "tak jakbyś sam ją wybrał".
   - Terms §8: "przebyłeś kontuzję".
   - Terms §11: "Jeśli pobrałeś aplikację".
   - Terms §12: "abyś mógł anulować".
   - Terms §13: "będziesz mógł wyeksportować".
   - Terms §15: "które podejmujesz sam".
   - Delete page: "skasujcie to, co usunąłem w aplikacji".
   - Support: "znalazłeś błąd".
2. **Support page, Polish card:** „Android 14, Pixel 8" closes with an ASCII `"` instead of `”`.
3. **ASCII quotes in the English.** The English support card ("Android 14, Pixel 8") and company page ("JDG") use
   ASCII `"`, while the rest of the English uses “…”.
4. **"Settings → Subscription" names no row on the Settings hub.** The row reads "Workouts Pro" or "Upgrade"; only the
   page it opens is titled "Subscription". This affects Privacy Policy §2 and Terms §4, §5 and §7, and the support
   page. I kept the path as written; it is filed as a fix to the English (LANG-44).
5. **The app and the site name the Terms differently.** The app calls them "Terms of Use" (`settingsPage.legal.termsOfUse`,
   `paywall.termsOfUse`); the site calls them "Terms of Service". The Ukrainian follows the app (*Умови використання*)
   everywhere.
6. **The word "plan" is ambiguous in the English Privacy Policy.** For example, "if your plan includes weekly
   check-ins" and "on the Free plan" mean the tier, but the same word is the app's term for a training plan. Ukrainian
   resolves this with *тариф*. A reader of the English could misread it.
7. **Privacy Policy §4, the Google bullet, reads as if Firebase Cloud Messaging receives crash reports.** Only
   Crashlytics does. FCM's own purpose is not stated anywhere, and §2 "Notifications" says nothing is sent from the
   server. This is worth the lawyer's attention in every language.
