# Italian (it) — notes on the legal site draft (LANG-21)

> The lawyer's briefing for this language's draft of the legal site (workouts-frontend `docs/languages-plan.md`, LANG-21,
> §Q.2), written as it was drafted on 25 October 2026. Not published: `.assetsignore` keeps `drafts/` and every `*.md`
> out of the upload. Once the language is published, its As built records the sign-off and this file goes.

Register: *tu* for the reader, *noi* for the business, as the app speaks. Typography: “…” and ’ throughout, `—` where
the English has it, `→` in menu paths. Dates: *25 ottobre 2026*, *5 ottobre 2026*.

## Terms chosen

- **GDPR, not RGPD.** Italian lawyers and the Garante's consumer pages say *GDPR* far more often, and it is what an
  Italian or Ticinese reader recognises. The first citation names the regulation once: *(art. 6, par. 1, lett. b), del
  Regolamento (UE) 2016/679, “GDPR”)*; every other citation is *art. 6, par. 1, lett. a)/b)/f), GDPR* and *art. 9,
  par. 2, lett. a), GDPR*. Where the English cites a bare “(Article 6(1)(b))”, I added “GDPR” so that the citation does
  not end in *lett. b))* and stands on its own. All article/paragraph/letter numbers are the English's.
- **GDPR vocabulary as the Italian text of the regulation has it:** *titolare del trattamento* (controller; §1's
  heading is “Chi è il titolare del trattamento” — *responsabile* would mean processor), *titolari autonomi del
  trattamento* (Apple and Google “as controllers”), *esecuzione del contratto*, *consenso esplicito*, *legittimo
  interesse*, *rettifica / cancellazione / limitazione del trattamento / portabilità / opposizione*, *autorità di
  controllo*, *clausole contrattuali tipo*, *quadro UE-USA per la protezione dei dati personali (EU–US Data Privacy
  Framework)*, *identificativo pseudonimo*; art. 22's wording for automated decisions. UODO's head: *il Presidente
  dell’Ufficio per la protezione dei dati personali (Prezes Urzędu Ochrony Danych Osobowych …)*.
- **“Trading as”** → *che esercita la propria attività con la ditta Kariera Programisty Wiesław Kubasik* (*ditta* is
  the Italian term for an entrepreneur's trade name). Company page: Business name *Denominazione*, Legal form *Forma
  giuridica*, sole proprietorship *impresa individuale*, NIP (Tax ID) *NIP (identificativo fiscale)*, Registered address
  *Sede*, CEIDG *Registro centrale e informazioni sull’attività economica (CEIDG)*, Podkarpackie Voivodeship *Voivodato
  della Precarpazia* (the Italian exonym).
- **The Terms are *Termini di utilizzo*,** the word `it.json` uses where the app links to this page
  (`settingsPage.legal.termsOfUse`, `paywall.termsOfUse`), so the page's title matches the link that opens it. The
  Privacy Policy is *Informativa sulla privacy*; “this policy” → *questa informativa*. Clauses are *sezione N*
  (not *articolo*, to keep them apart from the GDPR's articles).
- **Consumer terms:** right of withdrawal *diritto di recesso*; grace period *periodo di tolleranza*; losses *danni*;
  mandatory rules *norme imperative*; out of court *in via stragiudiziale*; “a good reason” *un giustificato motivo*.
  Polish bodies: *difensore civico dei consumatori comunale o distrettuale (rzecznik konsumentów)* and *un ispettorato
  regionale dell’Ispezione commerciale (Inspekcja Handlowa)* — English “provincial” renders *wojewódzki*; Italian
  *provinciale* names a much smaller unit, so *regionale*.
- **The app's words (glossary §5, §5.13):** *allenamento*, *sessione*, *serie*, *piano*, *blocco di allenamento*,
  *esercizi personalizzati*, *Coach AI* (“the coach” → *il Coach*, as in *crediti del Coach*), *crediti*, *ricarica*
  (top-up), *prova gratuita*, *abbonamento*, *check-in settimanali*, *membri fondatori*, *timer di recupero*,
  *schermata di blocco*, *livelli di forza* (strength standards), *massimali stimati*, *segnalazione di un problema*,
  *log*, *backup*, *store*; App Store / Google Play without an article. Plans: *Gratuito*, *Pro*, *Pro + Coach AI*.
- **Tier vs training plan (§5.13):** the English “plans screen” (Terms §4; Privacy, usage events) is the paywall, so
  *la schermata in cui scegli il piano* and *la schermata dei piani di abbonamento* — plain *schermata dei piani* would
  read as My Plans.
- **The AI Coach's notice** → *avviso* (the app titles it “Informazioni sul tuo Coach AI”, button “Accetto”): *informativa*
  is kept for the privacy notice alone. The coach's change card → *riquadro*, never *scheda* (a workout plan in Italian
  gyms). “Allowance” has no app string → *quota*.
- **Telemetry:** crash reports *rapporti sugli arresti anomali* (Android's Italian for a crash), problem reports
  *segnalazioni di problemi* (the app's word), usage events *eventi di utilizzo*, server logs *log del server*, sign-in
  sessions *sessioni di accesso*, one-way hash *hash unidirezionale*, user agent kept.
- **e-mail** is hyphenated, as Italian legal texts usually write it; the app writes *email*. Reviewer's call.
- *Workouts* is treated as feminine (*l’app*): *Workouts è fornita*, *non è destinata*.

## Adapted rather than translated

- mailto subjects: *Elimina il mio account Workouts* (quoted on the page in the same words), *Elimina alcuni dei miei
  dati di Workouts*, *Assistenza Workouts*.
- Deletion page: “The app signs you out” / “Signing out” → *ti fa uscire dall’account* / *Uscire dall’account*, since
  the app's sign-out is *Esci*. Example requests are in the *voi* the person would write to us (“cancellate …”).
- Apple's EULA: *Contratto di licenza con l’utente finale di Apple per le applicazioni concesse in licenza (Licensed
  Application End User License Agreement)* — English name kept in parentheses, as the Polish does, because the linked
  page is English.
- Not added, for the reviewer to decide: naming Italy's *Garante per la protezione dei dati personali* (and, for Ticino,
  the Swiss FDPIC / *IFPDT*) beside UODO as “the authority where you live”; whether Ticino readers need the Swiss FADP
  mentioned at all, since the GDPR and EU consumer law the texts rely on do not apply in Switzerland as such.
- index.html's Italian `data-title` (its tab's title): *Workouts — Informazioni legali*.

## Store / OS labels I am not sure of

- iPhone: *Impostazioni → il tuo nome → Abbonamenti* — matches Apple's Italian support pages as I know them; fairly sure.
- Android: *nell’app Play Store, dal tuo profilo → Pagamenti e abbonamenti → Abbonamenti* — matches Google's Italian
  help as I know it; fairly sure.
- Apple's own Italian title for the Licensed Application EULA — unverified. *Termini di servizio di Google Play* —
  fairly sure.

## Problems found in the source

**LANG-44 fixed these on 26 October 2026, in English, Polish and this draft**, as the product owner decided
(workouts-frontend `docs/languages-plan.md`, LANG-44): the pages name the Settings row as it reads — *Impostazioni →
Workouts Pro*, or *Passa a Pro* on the Free plan — and the page it opens as the subscription page; English's site calls
the Terms *Terms of Use*, as the app does; the deletion page has one name in every language, its title (*Elimina il tuo account e i tuoi dati*), in
its links, the index and the footer; problem reports name their bases — answering one, by e-mail too, is *esecuzione del contratto*,
finding and fixing the problem *legittimo interesse*; the bullet names the switch, *Allega l’attività recente*, and what it attaches, a log of the
app's recent activity; the Android app no longer carries Firebase Cloud Messaging, which nothing used, so §4 names
Crashlytics alone; the introduction says who else processes the data rather than who processes it *for us*, and §4
opens on those who process it rather than on companies, since it lists controllers and the authorities too; the
purchases paragraph gives the account the credits it *bought or was given*; the quotes are typographic; and the Polish
addresses the reader neutrally (*usunąłem* stays: the person's own words). The Terms' and the Privacy Policy's "Last
updated" read 26 October 2026 in every language. Checked and left as they are: the index naming the developer and the
other pages his business, both true; "goals and weekly targets", a description rather than a label; and "plan" for
the tier and the training plan alike in English, which this draft tells apart. Each item below is as it was found.

1. **“Settings → Subscription” names no row of the Settings hub.** The hub's row to the Subscription page reads
   *Workouts Pro* with the plan's badge, or *Upgrade* on Free (`settingsPage.subscription.pro` / `.upgrade`,
   `settings.page.html`; it: *Workouts Pro* / *Passa a Pro*); only the page it opens is titled *Subscription*
   (`subscriptionPage.title`). Quoted in Terms §4, §5 (Managing and cancelling), §7 (Its allowance), Privacy §2 (AI
   Coach: “Settings → Subscription → AI Coach”) and Support (twice). A reader looking for *Abbonamento* on the hub will
   not find it. I kept *Impostazioni → Abbonamento* (the page's title) until LANG-44 fixed it.
2. **The site calls the Terms “Terms of Service”, the app “Terms of Use”** (`settingsPage.legal.termsOfUse`,
   `paywall.termsOfUse`). Italian follows the app (above); English and Polish could align.
3. **Privacy Policy §4 lists Firebase Cloud Messaging** as receiving “crash reports of the app’s native code and an
   identifier of the app’s installation”, while §2 *Notifications* says nothing is sent from the server. FCM's purpose
   is never stated, and the sentence gives both Firebase products the crash reports. The lawyer may ask.
4. **Privacy Policy intro** says it explains “who else processes it *for us*”, but §4 also lists independent
   controllers (Apple, Google) and authorities. Minor; Polish is the same.
5. **Polish support.html card:** „Android 14, Pixel 8" — opened with „ and closed with an ASCII ".
6. **Polish texts address the reader in the masculine** (*zaakceptowałeś*, *napisałeś*, *jesteś zalogowany*,
   *utworzyłeś*, *przebyłeś*, *sam*, *mógł*, *pobrałeś*, *usunąłem*), against the app's neutral address (F8,
   translation guide §4.2, LANG-31). Perhaps accepted for legal prose; worth a decision.
7. For the Italian reviewer, not a source error: under the Codice del Consumo (art. 33) the Terms' unilateral-change
   clause (§16, continued use as acceptance) and the liability clause (§15) are the ones an Italian lawyer will read
   most closely.
