# pt-BR — notes for the review (LANG-21)

> The lawyer's briefing for this language's draft of the legal site (workouts-frontend `docs/languages-plan.md`, LANG-21,
> §Q.2), written as it was drafted on 25 October 2026. Not published: `.assetsignore` keeps `drafts/` and every `*.md`
> out of the upload. Once the language is published, its As built records the sign-off and this file goes.

## 1. For the Brazilian lawyer first: the LGPD block (privacy-policy.html, end of §6)

The one place the markup differs from the English: after §6's paragraph, `<h3>Se você está no Brasil</h3>` and two
`<p>` (the second holds one `<a href="mailto:support@wkubasik.pl">`). It says:

- The LGPD (Lei nº 13.709/2018) also applies to the data of people in Brazil.
- The policy's GDPR bases, mapped: performance of the contract → **art. 7º, V**; consent → **art. 7º, I**; body
  measurements and other health data (dados pessoais sensíveis) → specific and highlighted consent, **art. 11, I**
  (given by entering the data or, for the AI Coach, by agreeing to its notice); legitimate interest → **art. 7º, IX**;
  disclosure to authorities required by law → legal obligation, **art. 7º, II** (the English names no GDPR basis
  there; mapped from §4's "Authorities").
- The rights of **art. 18** (I–IX, each named), exercised at support@wkubasik.pl, also the *encarregado*'s contact;
  the right to petition the ANPD, **art. 18, § 1º**; the transfers of §5 rest on **art. 33**.
- **Added beyond the English, for the lawyer to keep or strike:** confirmation/access by complete declaration within 15 days,
  **art. 19, II** — §6 promises "within one month", which is longer than the LGPD allows for those two requests.

To decide:
- **Art. 11, I** wants consent "de forma específica e destacada": whether entering a bodyweight, or the AI Coach's
  notice, is that, or the app needs a distinct prompt.
- **Encarregado (art. 41, § 1º)**: the text gives only the e-mail. Name a person, or rely on the small-agent exemption
  (Resolução CD/ANPD nº 2/2022, art. 11 — as I recall it, unavailable for high-risk processing, which sensitive data
  and AI may make this).
- **Art. 33**: §5 names EU instruments (Data Privacy Framework, the Commission's SCCs), which are not LGPD mechanisms
  by themselves (ANPD's own clauses: Resolução CD/ANPD nº 19/2024, as I recall). And from Brazil, the controller and
  its hosting in Poland are a transfer too, which "the transfers §5 describes" does not cover.
- **Problem reports** (§2) name their bases since LANG-44 — the contract and legitimate interest — so the mapping
  reaches them as it reaches every other purpose (art. 7º, V and IX).
- Minors: the site says 16+; under the LGPD (art. 14), the Código Civil (16–17 relatively incapable, art. 4º, I) and,
  if I recall it right, the ECA Digital (Lei nº 15.211/2025), worth a look.

The Terms were translated, not adapted, as asked. For their reviewer, where the CDC may bite: §14 names only Polish
out-of-court bodies (Procon, consumidor.gov.br?); §16 continued use as acceptance (CDC art. 51, XIII); §15 limits (CDC
arts. 25 and 51, I); §17 forum (CDC art. 101, I); §18 English precedence (CDC arts. 31 and 47).

## 2. Terms chosen

- **controlador**, **tratar / tratamento**, **titular** — the LGPD's words, not the EU Portuguese *responsável pelo
  tratamento*. **execução do nosso contrato**, **legítimo interesse**, **consentimento explícito** (GDPR art. 9(2)(a)'s
  term, kept apart from the LGPD's *específico e destacado*), **revogar** consent.
- **GDPR citations**: "art. 6º, nº 1, alínea b, do RGPD" — the EU's official Portuguese structure (nº, alínea) in
  Brazilian spelling; first mention expanded "o Regulamento Geral sobre a Proteção de Dados da União Europeia". Every
  number as the English.
- **"trading as"** → *empresário individual que atua sob o nome empresarial …*; company page *Nome empresarial*,
  *Forma jurídica: Empresa individual (JDG)*, CEIDG as *Registro Central e Informações sobre Atividades Econômicas*,
  *Voivodia de Podkarpackie, Polônia*.
- **Polish bodies** (no official Portuguese names): *Presidente do Escritório de Proteção de Dados Pessoais (Prezes
  Urzędu …)*, *defensor municipal ou distrital dos consumidores (rzecznik konsumentów)*, *inspetoria provincial da
  Inspeção Comercial (Inspekcja Handlowa)*.
- **Adapted**: the right to withdraw from a purchase is named *direito de arrependimento* (CDC art. 49's own term).
- **Titles**: *Termos de Uso* (the app's link is *Termos de uso*, `settingsPage.legal.termsOfUse`), not *Termos de
  Serviço*; *Política de Privacidade* — both capitalised as document names, where the app's buttons write sentence
  case.
- **aplicativo** throughout the legal prose, as asked, although the catalogue says *o app* (guide §5.14).
- *teste gratuito*, *recarga*, *créditos do Treinador*, *Membro fundador* → *membros fundadores*, *período de
  carência* (grace period), *relato* (problem report, as the app), *relatório de falhas* (crash report), *logs*,
  *hash irreversível*, *upgrade / downgrade* (loanwords), *EU–US Data Privacy Framework (o Quadro de Privacidade de
  Dados UE–EUA)* — the Commission's own Portuguese name.
- Neutral address (guide §4.2): no *cobrado*, *conectado*, *você mesmo*; the one gendered noun left is the legal status
  *consumidor*.
- App labels as `pt-BR.json` writes them: Configurações; Gerenciar sua conta; Excluir conta; Exportar meus treinos;
  Diagnóstico → Relatar um problema; Workouts Pro (*Fazer upgrade* on the Free plan) → Gerenciar assinatura /
  Restaurar compras / Treinador IA, on the page titled Assinatura, since LANG-44; Gratuito,
  Pro, Pro + Treinador IA.

## 3. Store / OS labels I am not sure of

- iPhone: *Ajustes → seu nome → Assinaturas* (fairly sure); App Store settings as *ajustes da App Store*, Google Play's
  as *configurações* (guide §5.14).
- Play Store app: *perfil → Pagamentos e assinaturas → Assinaturas* (fairly sure).
- Apple's EULA as *Contrato de Licença de Usuário Final de Aplicativo Licenciado* — Apple's Brazilian title as I recall
  it; the English name kept in parentheses, as the Polish does.

## 4. Problems in the English / Polish source

**LANG-44 fixed these on 26 October 2026, in English, Polish and this draft**, as the product owner decided
(workouts-frontend `docs/languages-plan.md`, LANG-44): the pages name the Settings row as it reads — *Configurações →
Workouts Pro*, or *Fazer upgrade* on the Free plan — and the page it opens as the subscription page; English's site calls
the Terms *Terms of Use*, as the app does; the deletion page has one name in every language, its title (*Excluir sua conta e seus dados*), in
its links, the index and the footer; problem reports name their bases — answering one, by e-mail too, is *execução do nosso contrato*,
finding and fixing the problem *legítimo interesse*; the bullet names the switch, *Anexar atividade recente*, and what it attaches, a log of the
app's recent activity; the Android app no longer carries Firebase Cloud Messaging, which nothing used, so §4 names
Crashlytics alone; the introduction says who else processes the data rather than who processes it *for us*, and §4
opens on those who process it rather than on companies, since it lists controllers and the authorities too; the
purchases paragraph gives the account the credits it *bought or was given*; the quotes are typographic; and the Polish
addresses the reader neutrally (*usunąłem* stays: the person's own words). The Terms' and the Privacy Policy's "Last
updated" read 26 October 2026 in every language. Checked and left as they are: the index naming the developer and the
other pages his business, both true; "goals and weekly targets", a description rather than a label; and "plan" for
the tier and the training plan alike in English, which this draft tells apart. Each item below is as it was found.

- **"Settings → Subscription" names no row.** The Settings hub's row reads *Workouts Pro* (with the plan's badge) or
  *Upgrade* (`settingsPage.subscription.pro` / `.upgrade`); only the page it opens is titled *Subscription*
  (`subscriptionPage.title`). Privacy §2 (The AI Coach), Terms §4, §5 (Managing and cancelling), §7 (Its allowance),
  Support — English and Polish alike. I kept *Configurações → Assinatura* until LANG-44 fixed it.
- **"Terms of Service" vs "Terms of Use"**: the page and footer say Terms of Service; the app's links say Terms of Use.
- **Privacy §2, "Problem reports"**: the only purpose with no legal basis named (EN and PL).
- **Privacy §6, "We answer within one month"**: fine under the GDPR, too long under LGPD art. 19, II (handled in §1).
- **Polish typography**: support.html opens „Android 14, Pixel 8" with „ and closes with an ASCII ".
- **Polish register**: the legal texts address the reader in the masculine (*zaakceptowałeś*, *napisałeś*, *jesteś
  zalogowany*, *przebyłeś kontuzję*, *sam*) — LANG-31's rule for new strings, if it reaches the legal site.
- index.html's Brazilian `data-title` (its tab's title): *Workouts — Informações legais*.
