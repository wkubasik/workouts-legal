# French (fr) — notes on the legal site's draft (LANG-21)

> The lawyer's briefing for this language's draft of the legal site (workouts-frontend `docs/languages-plan.md`, LANG-21,
> §Q.2), written as it was drafted on 25 October 2026. Not published: `.assetsignore` keeps `drafts/` and every `*.md`
> out of the upload. Once the language is published, its As built records the sign-off and this file goes.

Drafted from the English sections of `workouts-legal` after LANG-21's restructuring of the pages (their English is the same as the version this
draft started from, plus Terms §18 and the Privacy Policy's last bullet of §7). Polish read only to check meaning.

## Register and voice

- **tu throughout**, *nous* for the business (LANG-D3). **For the lawyer:** French consumer and legal texts are
  almost always written in *vous*, in France, Belgium, Switzerland and Québec alike; *tu* is the product owner's
  decision for the whole app, legal texts included.
- **No grammatical gender for the reader** (F8, guide §4.2): "si ta session est ouverte" (not *si tu es connecté*),
  "si tu as subi une blessure" (not *si tu as été blessé*), "pour éviter de futurs prélèvements" / "le paiement est
  prélevé" (not *tu es prélevé*). *Consommateur* is kept as the legal status, phrased "si tu agis en tant que
  consommateur" / "si tu es consommateur".
- **"l'application", not the catalogue's "l'app"** (§5.12): the legal register in all four markets uses
  *application*, and Québec's OQLF discourages *app*. The product owner may prefer to align with the app.

## Terms chosen

- *Terms of Service* → **Conditions d'utilisation** (fr.json `settingsPage.legal.termsOfUse`, `paywall.termsOfUse`);
  *Privacy Policy* → **Politique de confidentialité**; *Support* → **Assistance** (Québec would say *Soutien*).
- **A subscription tier is an *offre*, never a *plan*** (guide §5.12): Terms §4 "Offres", "trois offres : Gratuit, Pro
  et Pro + Coach IA", "l'offre Gratuit", "Changement d'offre", "une offre payante". *Plan* is only the training plan.
  "The plans screen" (Terms §4, and the Privacy Policy's usage-events example, which is the paywall's opened/closed
  event) → **l'écran des offres**. Upgrade/downgrade → "passage à une offre supérieure / inférieure" (the app's
  *Passer à une offre supérieure*).
- **GDPR → RGPD**, cited "article 6, paragraphe 1, point b), du RGPD". The English names the GDPR only at its first
  citation; I wrote "du RGPD" at every one, since "(article 6, paragraphe 1, point b))" reads badly — an adaptation.
  Art. 6(1)(a) + 9(2)(a): "article 6, paragraphe 1, point a), et article 9, paragraphe 2, point a), du RGPD".
- GDPR vocabulary as the regulation's French version has it: *responsable du traitement*, *exécution du contrat*,
  *consentement explicite*, *intérêt légitime*, *clauses contractuelles types*, *Espace économique européen*,
  *autorité de protection des données*, the art. 22 sentence ("décision automatisée produisant des effets juridiques à
  ton égard ou t'affectant de manière significative de façon similaire"). EU–US DPF → "cadre de protection des données
  UE–États-Unis (EU–US Data Privacy Framework)", the Commission's French name with the English kept. UODO → "le
  Président de l'Office de protection des données personnelles (Prezes Urzędu Ochrony Danych Osobowych, …)".
- *Trading as* → "exerçant sous la dénomination commerciale"; sole proprietorship → *entreprise individuelle*;
  CEIDG → "Registre central d'enregistrement et d'information sur l'activité économique (CEIDG)" (my rendering; I know
  no official French name); *Podkarpackie Voivodeship* → "Voïvodie des Basses-Carpates" (the usual French name); "NIP
  (numéro d'identification fiscale)", REGON left bare as the English does.
- Terms §14: *rzecznik konsumentów* → "défenseur municipal ou de district des consommateurs (rzecznik konsumentów)";
  *provincial inspectorate of the Trade Inspection* → "inspection régionale de l'Inspection du commerce (Inspekcja
  Handlowa)" — *régionale* for *provincial*, which a French reader would not place.
- Billing words are the app's: *résilier* (cancel), *prélever / prélèvement* (charge), *la boutique* (the store),
  *recharge* (top-up), *crédits du Coach*, *essai gratuit*, *membres fondateurs*, *bilans hebdomadaires* (check-ins),
  *délai de grâce*, *droit de rétractation*. **Allowance → *quota*** ("Son quota", "un quota d'utilisation du Coach"):
  the app has no one word for it (it says *limite*).
- Others: one-way hash → *empreinte irréversible*; user agent → "agent utilisateur (user agent)"; crash reports →
  *rapports de plantage*; problem reports → *signalements de problème* (the app's *Signaler un problème*); marketing
  e-mail → *e-mail de prospection commerciale* (the CNIL's term); physiotherapist → *kinésithérapeute*, as the coach's
  notice in fr.json (Québec and Switzerland say *physiothérapeute*); *e-mail* as the app writes it (Québec: *courriel*);
  *bug* (Québec: *bogue*); business days → *jours ouvrables* (France's strict term is *jours ouvrés*).
- The deletion page's examples of what to write to us are in *vous*, as the person writes to a business
  ("« effacez toutes mes séances d'entraînement »"). Mailto subjects: *Supprimer mon compte Workouts*, *Supprimer une
  partie de mes données Workouts*, *Assistance Workouts*.
- Dates: "25 octobre 2026", "5 octobre 2026". Typography: « … » and U+202F before : ; ? ! throughout, ’ throughout.
- index.html's French `data-title` (its tab's title): **"Workouts — Informations juridiques"**.

## The app's labels quoted (fr.json)

Paramètres (`settingsPage.title`) → Gérer ton compte (`settingsPage.account.manage`) → Supprimer le compte / Exporter
mes entraînements; Paramètres → Diagnostic → Signaler un problème; Paramètres → Workouts Pro (`settingsPage.subscription.pro`, *Passer à
Pro* on the Free plan) → Gérer l'abonnement / Restaurer les achats / Coach IA (`subscriptionPage.ai.title`), on the page
titled Abonnement (`subscriptionPage.title`), since LANG-44; the plans Gratuit, Pro,
Pro + Coach IA; "l'entraînement en direct sur l'écran verrouillé" (`settingsPage.liveWorkout`); *niveaux de force*;
*minuteur de repos*.

## Store and OS labels I am not sure of

- iPhone: **Réglages → ton nom → Abonnements** — fairly sure (iOS French: Réglages > [votre nom] > Abonnements).
- Android: **l'application Play Store, sous ton profil → Paiements et abonnements → Abonnements** — fairly sure, not
  checked on a device.
- Apple's standard EULA: I wrote "contrat de licence d'utilisateur final des applications sous licence (Licensed
  Application End User License Agreement)"; Apple's own French title of that page should be checked.
- Google Play's terms: "les conditions d'utilisation de Google Play".

## For the lawyer: points of French-market law (content, not translation)

- **Terms §18, "the English version applies"**: France's Loi Toubon (loi n° 94-665) requires French for what a
  consumer is offered, and Québec's Charter of the French language (s. 55, as amended in 2022) requires the French
  version of a consumer contract first; an English-prevails clause may not hold against such a consumer. The clause's
  own exceptions (local law, more favourable translation) may or may not suffice.
- **Terms §14**: in France a trader must give the consumer free access to a consumer mediator and name it (Code de la
  consommation, art. L612-1 and L616-1); the text names only Polish bodies. Belgium has its Service de médiation pour
  le consommateur.
- **Terms §16** (continued use as acceptance of changed terms): French unfair-terms rules on unilateral changes (Code
  de la consommation, art. R212-1 and R212-2) — for review.
- **Privacy §6**: the lawyer may want to name the CNIL (France), the APD/GBA (Belgium), Switzerland's PFPDT (where the
  nLPD, not the GDPR, applies directly) and Québec's CAI (Loi 25).

## Problems found in the source

**LANG-44 fixed these on 26 October 2026, in English, Polish and this draft**, as the product owner decided
(workouts-frontend `docs/languages-plan.md`, LANG-44): the pages name the Settings row as it reads — *Paramètres →
Workouts Pro*, or *Passer à Pro* on the Free plan — and the page it opens as the subscription page; English's site calls
the Terms *Terms of Use*, as the app does; the deletion page has one name in every language, its title (*Supprimer ton compte et tes données*), in
its links, the index and the footer; problem reports name their bases — answering one, by e-mail too, is *exécution du contrat*,
finding and fixing the problem *intérêt légitime*; the bullet names the switch, *Joindre l’activité récente*, and what it attaches, a log of the
app's recent activity; the Android app no longer carries Firebase Cloud Messaging, which nothing used, so §4 names
Crashlytics alone; the introduction says who else processes the data rather than who processes it *for us*, and §4
opens on those who process it rather than on companies, since it lists controllers and the authorities too; the
purchases paragraph gives the account the credits it *bought or was given*; the quotes are typographic; and the Polish
addresses the reader neutrally (*usunąłem* stays: the person's own words). The Terms' and the Privacy Policy's "Last
updated" read 26 October 2026 in every language. Checked and left as they are: the index naming the developer and the
other pages his business, both true; "goals and weekly targets", a description rather than a label; and "plan" for
the tier and the training plan alike in English, which this draft tells apart. Each item below is as it was found.

1. **"Settings → Subscription" names no row of the Settings hub.** The hub's row to the Subscription page reads
   "Workouts Pro" with a plan badge, or "Upgrade" on Free (`settingsPage.subscription.pro` / `.upgrade`, settings.page.html);
   "Subscription" is only the title of the page it opens. Quoted in Privacy §2 (AI Coach, "Settings → Subscription →
   AI Coach"), Terms §4, §5 (Managing and cancelling), §7 (Its allowance) and twice on Support. I kept "Paramètres →
   Abonnement", the page's own title, as the English did, until LANG-44 fixed it.
2. **Privacy §2, Purchases**: "We use this to give your account the plan and the credits it paid for" follows the
   sentence on plans given at no charge, which nobody paid for — perhaps "it paid for or was given". Translated as
   written ("l'offre et les crédits qu'il a payés") until LANG-44 made it "achetés ou reçus".
3. **The Polish legal pages address the reader in the masculine** (F8), which LANG-31's scope (the app's strings) does
   not cover: Privacy — *zaakceptowałeś* (AI Coach), *jeśli jesteś zalogowany* (crash reports), *gdy jesteś
   zalogowany* (server logs), *napisałeś* twice (problem reports); Terms — *utworzyłeś* (§6), *tak jakbyś sam ją
   wybrał* (§7), *przebyłeś kontuzję* (§8), *pobrałeś* (§11), *abyś mógł* (§12), *będziesz mógł* (§13), *podejmujesz
   sam* (§15); Support — *znalazłeś błąd*. (The deletion page's *usunąłem* is a quote of what the person writes.)
4. **Polish Support**: `(np. „Android 14, Pixel 8")` closes with an ASCII `"` instead of `”`.
5. **English Support** uses ASCII quotes and apostrophes ("Android 14, Pixel 8", *We're*, *you're*) where every other
   page uses typographic ones — cosmetic.
6. **The deletion page goes by four names**: its title "Delete your account & data", links "Account & Data Deletion"
   (Privacy §3, Support), "Delete Account & Data" (index), "deleting your account" (Terms §13), and the footer's
   "Delete Account". Translated each in place, until LANG-44 gave the page one name, its title "Supprimer ton compte et
   tes données", in its links, the index and the footer ("deleting your account" in Terms §13 is a description, not
   the page's name).
