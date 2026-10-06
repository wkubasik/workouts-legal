# Watches — the legal texts, drafted

**A draft for the lawyer, not published.** Written on 2026-10-06 for WATCH-01 of the watch app's plan
(`docs/watch-app-plan.md` in workouts-frontend, where every §, WD-n and WATCH-n below is defined). It holds what
the watch app adds to the legal site's pages, in English and Polish: the privacy policy's new part, "Watches", and the
lines its other sections gain (§2, §3); the account-deletion page's lines (§4); and two sentences in the Terms (§5).
§6 lists the questions for the lawyer's hour.

- **Not on the site.** `.assetsignore` keeps `drafts/` — and every `*.md` — out of the upload, so nothing here is
  served at `https://wkubasik.pl`.
- **Published with the launch** (WATCH-46, §H.9, §H.10 step 1), never before: until then nothing the pages describe
  exists for anyone. Each block below names the page, the section and the existing text it goes after. It goes in as
  the page's own markup (`<h3>`, `<p>`, `<ul>`, a table row), and each page's "Last updated" takes the publication date.
- **What it describes is not built yet.** Every fact it states comes from the plan, and §1 names the task that has to
  confirm each one against the code. A fact that turns out different changes this draft before publication, and a
  substantive change goes back to the lawyer.
- The menu names (*Settings → Watch*, *Ustawienia → Zegarek*) follow the strings WATCH-14 gives the page.
- **Once published**, the change that puts it on the pages deletes this file: the pages are then the text's one
  source.

## 1. What it states, and who confirms it

| The text says | From the plan | Confirmed by |
|---|---|---|
| The phone alone writes the training; a watch sends what was done — the set, its values, when | WD-1, §D.2 | WATCH-10, WATCH-12 |
| An Apple Watch or a Wear OS watch reaches the phone app through the OS, and nothing goes through our server | WD-2 | WATCH-21, WATCH-28 |
| A Garmin or Amazfit watch pairs by a code typed into the app; the code works for ten minutes | §D.9 | WATCH-17 (the plan does not say how long a pairing request is kept: the text names only the code's ten minutes) |
| For each paired watch the server keeps its platform, model, when it was paired and last used, and a key that reaches `/api/watch/**` only | WD-12, WATCH-17 | WATCH-17 |
| A watch unused for 180 days must be paired again | §D.9 | WATCH-17 |
| The relay carries the agenda (names, exercises, sets, weights, reps, last time's top set) and the watch's events | §D.2, §D.9 | WATCH-06, WATCH-18 |
| The server reads only the envelope, and refuses heart rate | §D.9, WATCH-18 | WATCH-18 |
| An event is deleted seven days after the phone answered it, anything after thirty days, the agenda when the last watch is unpaired | WD-24 | WATCH-18. WATCH-01's own list said "deleted once delivered"; the draft follows WD-24 |
| The Garmin Connect app or the Zepp app on the phone carries the relay's traffic | §D.9, WD-2 | WATCH-04: whether that traffic leaves the phone through Garmin's or Zepp's servers (§6, question 3) |
| A watch keeps the agenda, the running workout, unanswered events and a log with no names, values or heart rate, and clears them on sign-out, a change of account, or uninstall | §D.8, WATCH-14, WATCH-16 | WATCH-14 for tethered watches; WATCH-19 and WATCH-36 / WATCH-42 for whether a relayed watch is cleared on sign-out too |
| Heart rate and calories are shown on the watch, and on the phone while a tethered watch is connected; we store them nowhere | WD-10, §D.10, WATCH-15 | WATCH-15, WATCH-16, WATCH-18 |
| An Apple Watch saves a strength-training workout with heart rate and active energy to Apple Health, and reads heart rate and active energy during it; the iPhone uses HealthKit only for `startWatchApp` | WD-11, WATCH-23, §H.4 | WATCH-23 |
| The phone writes a Wear OS workout to Health Connect: the session (strength training, the workout's name, start, end), heart rate, active calories; it never reads | WATCH-33 | WATCH-33 |
| A Garmin watch saves the workout as an activity in Garmin Connect; an Amazfit watch records it nowhere else | WD-11, WATCH-37, §B.6 | WATCH-04, WATCH-37 |
| Usage events add which device a workout was started and finished on, a watch of each platform connected, and a parked watch workout's reason from a closed set | WATCH-16 | WATCH-16 |
| A tethered watch's crash summary reaches us through the phone, as a crash report | WATCH-16 | WATCH-16 |
| A tethered watch's log is part of the app's log; a relayed watch's log is sent only when the person asks for it | WATCH-16 | WATCH-16 |
| Permissions are asked at the first workout's start; Health Connect's from Settings → Watch | §E.1 rule 10, WATCH-33 | WATCH-23, WATCH-30, WATCH-33 |

## 2. Privacy Policy — English (`privacy-policy.html`, `lang-en`)

### 2.1 Section 2, a new part after "Your training": **Watches**

> If you use Workouts on a watch — an Apple Watch, a watch with Wear OS, a Garmin watch or an Amazfit watch with Zepp
> OS — the watch shows your planned workouts and the one in progress, and you log your sets on it. Your training is
> still written only by the app on your phone: the watch sends it what you did — which set, with what weight,
> repetitions, time or effort, and when — and the app saves it as if you had logged it on the phone, then backs it up
> and syncs it as described above.
>
> - **Apple Watch and Wear OS.** The watch exchanges this with the Workouts app on your phone directly, over the
>   connection that Apple's or Google's system keeps between your watch and your phone; nothing passes through our
>   server on the way.
> - **Garmin and Amazfit.** These watches can only reach their maker's phone app — Garmin Connect or Zepp — so they
>   meet the Workouts app on our server, which passes messages between the two (the *relay*). You connect such a watch
>   by typing the code it shows into the Workouts app. For each watch you connect, we keep its type and model, when it
>   was connected and last used, and a key that lets it reach the relay and nothing else on our server — not your
>   account, your training or its sync. Two things pass through the relay: a copy of your coming planned workouts —
>   their names, exercises, sets, weights and repetitions, and your best set of each exercise last time — which the
>   watch fetches, and what you log on the watch, which your phone fetches. The Garmin Connect or Zepp app on your phone
>   carries them between the watch and our server. We check only that each message is well-formed, and delete them soon
>   after they are delivered (section 3).
> - **On the watch.** The watch keeps the workouts coming up, the one in progress and what it has not yet handed to
>   your phone, and a short log of its own technical events, which never contains names, values or your heart rate. It
>   clears them when you sign out of the app on your phone or sign in with another account, and when you remove the app
>   from the watch.
> - **Heart rate and calories.** During a workout the watch measures your heart rate and estimates the calories you
>   burn, and shows them to you. While an Apple Watch or a Wear OS watch is connected, the Workouts app on your phone
>   shows your heart rate too, and keeps none of it. Neither ever reaches our server, the relay, our logs, our usage
>   events or our crash reports.
> - **Apple Health, Health Connect and Garmin Connect.** With your permission, the workout is also recorded where your
>   watch's maker keeps your health data:
>   - An Apple Watch saves it to Apple Health — strength training, its start and end, your heart rate and active
>     energy — where it counts towards your Activity rings. During the workout it reads your heart rate and active
>     energy there, to show them.
>   - For a Wear OS watch, the Workouts app on your phone writes the session to Health Connect — strength training, the
>     workout's name, its start and end — with your heart rate and active calories.
>   - A Garmin watch saves it as an activity in Garmin Connect, under your Garmin account.
>   - An Amazfit watch records it only in Workouts.
>
>   On your iPhone, Workouts uses Apple Health only to open the app on your watch when you start a workout on the phone:
>   it reads and writes nothing there. These records are kept on your devices, and by Apple, Google and Garmin under
>   their own terms, not by us. Beyond what the watch shows you during a workout, we read nothing from them. We never
>   use them for advertising or marketing, we do not sell them, and we store none of them on our server or in iCloud.
>   You can withdraw Apple Health's or Health Connect's permission at any time in their settings, and delete any of
>   these records where it is kept.
>
> We process all of this to provide the watch app you chose to use — *performance of our contract* (Article 6(1)(b)).
> What it reveals about your health we process on your *explicit consent* (Articles 6(1)(a) and 9(2)(a)), as with your
> training above. You give it by using the watch and, for Apple Health and Health Connect, by granting their permission.

### 2.2 Section 2, "How the app is used, and when it fails"

- **Usage events** — after "…your platform.":

  > If you use a watch, they also say which device a workout was started and finished on — the phone, or which kind of
  > watch — that a kind of watch was connected, and, when a workout from a watch could not be saved as it was, why,
  > from a fixed list of reasons.

- **Crash reports** — after "…by Firebase Crashlytics (section 4).":

  > When the app on an Apple Watch or a Wear OS watch fails, the watch hands a summary of the failure to your phone,
  > which sends it to us like the app's own crash reports.

- **Problem reports** — after "…which the app shows you first.":

  > That log includes the log of an Apple Watch or a Wear OS watch connected to the app. A Garmin or Amazfit watch's log
  > is added only if you choose to include it (Settings → Watch). A watch's log never contains names you typed, the
  > values you logged or your heart rate.

### 2.3 Section 3, two rows after "Sign-in sessions"

| What | How long |
|---|---|
| A Garmin or Amazfit watch you connected | Until you disconnect it or delete your account. A watch left unused for 180 days must be connected again. A code to connect a watch works for 10 minutes. |
| What passes through the relay | Each message from a watch: 7 days after your phone collected it, and 30 days at most. The copy of your planned workouts: until you disconnect your last Garmin or Amazfit watch, and 30 days at most after it last changed. |

And in the paragraph under the table, after "What is stored on your phone stays there until you uninstall the app.":

> Workouts a watch saved to Apple Health, Health Connect or Garmin Connect stay there until you delete them there.

### 2.4 Section 4, one entry before "Apple and Google", and that entry widened

> - **Garmin** and **Zepp Health**, whose phone apps — Garmin Connect and Zepp — carry what a Garmin or Amazfit watch
>   exchanges with our server, and, for Garmin, keep the activity a Garmin watch records, as controllers under their
>   own privacy policies.
> - **Apple and Google**, which sell subscriptions and top-ups and, if you use them, sign you in, connect an Apple
>   Watch or a Wear OS watch to your phone, and run Apple Health and Health Connect, as controllers under their own
>   privacy policies.

### 2.5 Section 5

Unchanged, unless WATCH-04 finds that Garmin Connect or the Zepp app sends the relay's traffic through Garmin's or Zepp's
servers: then the lawyer words it (§6, question 3).

## 3. Polityka prywatności — Polish (`privacy-policy.html`, `lang-pl`)

### 3.1 Punkt 2, nowa część po „Twój trening”: **Zegarki**

> Jeśli korzystasz z Workouts na zegarku — Apple Watch, zegarku z systemem Wear OS, zegarku Garmin albo zegarku Amazfit
> z systemem Zepp OS — zegarek pokazuje Twoje zaplanowane treningi i ten, który trwa, a Ty zapisujesz na nim serie.
> Twój trening nadal zapisuje wyłącznie aplikacja na telefonie: zegarek przekazuje jej, co zrobiłeś — którą serię, z
> jakim ciężarem, liczbą powtórzeń, czasem lub odczuwanym wysiłkiem i kiedy — a aplikacja zapisuje to tak, jakbyś
> zapisał to na telefonie, po czym tworzy kopię zapasową i synchronizuje dane, jak opisano wyżej.
>
> - **Apple Watch i Wear OS.** Zegarek wymienia te dane bezpośrednio z aplikacją Workouts na Twoim telefonie, przez
>   połączenie, które system Apple lub Google utrzymuje między zegarkiem a telefonem; po drodze nic nie przechodzi
>   przez nasz serwer.
> - **Garmin i Amazfit.** Te zegarki mogą łączyć się tylko z aplikacją swojego producenta na telefonie — Garmin Connect
>   lub Zepp — dlatego spotykają się z aplikacją Workouts na naszym serwerze, który przekazuje wiadomości między nimi
>   (*przekaźnik*). Taki zegarek łączysz, wpisując w aplikacji Workouts kod, który on wyświetla. Dla każdego
>   połączonego zegarka przechowujemy jego rodzaj i model, datę połączenia i ostatniego użycia oraz klucz, który pozwala
>   mu łączyć się z przekaźnikiem i z niczym innym na naszym serwerze — ani z Twoim kontem, ani z Twoimi treningami, ani
>   z ich synchronizacją. Przez przekaźnik przechodzą dwie rzeczy: kopia Twoich nadchodzących zaplanowanych treningów —
>   ich nazwy, ćwiczenia, serie, ciężary i powtórzenia oraz Twoja najlepsza seria każdego ćwiczenia z poprzedniego razu
>   — którą pobiera zegarek, oraz to, co zapisujesz na zegarku, co pobiera Twój telefon. Między zegarkiem a naszym
>   serwerem przenosi je aplikacja Garmin Connect lub Zepp na Twoim telefonie. Sprawdzamy jedynie, czy każda wiadomość
>   ma prawidłową postać, i usuwamy je wkrótce po ich dostarczeniu (punkt 3).
> - **Na zegarku.** Zegarek przechowuje nadchodzące treningi, trening, który trwa, i to, czego jeszcze nie przekazał
>   telefonowi, a także krótki dziennik własnych zdarzeń technicznych, który nigdy nie zawiera nazw, wartości ani
>   Twojego tętna. Usuwa je, gdy wylogujesz się z aplikacji na telefonie lub zalogujesz się na inne konto, a także gdy
>   usuniesz aplikację z zegarka.
> - **Tętno i kalorie.** Podczas treningu zegarek mierzy Twoje tętno i szacuje spalone kalorie oraz pokazuje je Tobie.
>   Gdy Apple Watch lub zegarek z Wear OS jest połączony, aplikacja Workouts na telefonie także pokazuje Twoje tętno i
>   niczego z niego nie zachowuje. Ani tętno, ani kalorie nigdy nie trafiają na nasz serwer, do przekaźnika, do naszych
>   dzienników, zdarzeń użycia ani raportów awarii.
> - **Zdrowie (Apple Health), Health Connect i Garmin Connect.** Za Twoją zgodą trening jest też zapisywany tam, gdzie
>   producent zegarka przechowuje Twoje dane o zdrowiu:
>   - Apple Watch zapisuje go w aplikacji Zdrowie — trening siłowy, jego początek i koniec, Twoje tętno i aktywną
>     energię — gdzie wlicza się on do Twoich pierścieni Aktywności. Podczas treningu odczytuje stamtąd Twoje tętno i
>     aktywną energię, aby je pokazać.
>   - W przypadku zegarka z Wear OS aplikacja Workouts na telefonie zapisuje w Health Connect sesję — trening siłowy,
>     nazwę treningu, jego początek i koniec — wraz z Twoim tętnem i aktywnie spalonymi kaloriami.
>   - Zegarek Garmin zapisuje go jako aktywność w Garmin Connect, na Twoim koncie Garmin.
>   - Zegarek Amazfit zapisuje go tylko w Workouts.
>
>   Na iPhonie Workouts korzysta z aplikacji Zdrowie wyłącznie po to, aby otworzyć aplikację na zegarku, gdy zaczynasz
>   trening na telefonie: niczego tam nie odczytuje ani nie zapisuje. Te zapisy są przechowywane na Twoich urządzeniach
>   oraz przez Apple, Google i Garmin na ich własnych zasadach, a nie przez nas. Poza tym, co zegarek pokazuje Ci podczas
>   treningu, niczego z nich nie odczytujemy. Nigdy nie wykorzystujemy ich do reklamy ani marketingu, nie sprzedajemy
>   ich i nie przechowujemy żadnych z nich na naszym serwerze ani w iCloud. Zgodę dla aplikacji Zdrowie lub Health
>   Connect możesz w każdej chwili wycofać w ich ustawieniach, a każdy z tych zapisów usunąć tam, gdzie jest
>   przechowywany.
>
> Przetwarzamy to wszystko, aby zapewnić Ci aplikację na zegarek, z której zdecydowałeś się korzystać — *wykonanie
> umowy* (art. 6 ust. 1 lit. b). To, co mówi o Twoim zdrowiu, przetwarzamy na podstawie Twojej *wyraźnej zgody* (art. 6
> ust. 1 lit. a i art. 9 ust. 2 lit. a), tak jak Twój trening powyżej. Wyrażasz ją, korzystając z zegarka, a w przypadku
> aplikacji Zdrowie i Health Connect — udzielając zgody w tych aplikacjach.

### 3.2 Punkt 2, „Jak aplikacja jest używana i gdy coś zawodzi”

- **Zdarzenia użycia** — po „…wersją aplikacji i platformą.”:

  > Jeśli korzystasz z zegarka, zdarzenia mówią też, na jakim urządzeniu trening rozpoczęto i zakończono — na telefonie
  > czy na zegarku jakiego rodzaju — że połączono zegarek danego rodzaju, a gdy trening z zegarka nie mógł zostać
  > zapisany w takiej postaci, w jakiej był — dlaczego, z zamkniętej listy powodów.

- **Raporty awarii** — po „…zgłasza Firebase Crashlytics (punkt 4).”:

  > Gdy aplikacja na Apple Watch lub zegarku z Wear OS ulega awarii, zegarek przekazuje podsumowanie awarii telefonowi,
  > który wysyła je nam tak samo jak raporty awarii samej aplikacji.

- **Zgłoszenia problemów** — po „…który aplikacja najpierw Ci pokazuje.”:

  > Ten dziennik obejmuje też dziennik połączonego z aplikacją Apple Watch lub zegarka z Wear OS. Dziennik zegarka
  > Garmin lub Amazfit jest dołączany tylko wtedy, gdy zdecydujesz się go dołączyć (Ustawienia → Zegarek). Dziennik
  > zegarka nigdy nie zawiera wpisanych przez Ciebie nazw, zapisanych wartości ani Twojego tętna.

### 3.3 Punkt 3, dwa wiersze po „Sesje logowania”

| Co | Jak długo |
|---|---|
| Połączony zegarek Garmin lub Amazfit | Do jego odłączenia albo do usunięcia konta. Zegarek nieużywany przez 180 dni trzeba połączyć ponownie. Kod do połączenia zegarka działa 10 minut. |
| To, co przechodzi przez przekaźnik | Każda wiadomość z zegarka — 7 dni od pobrania jej przez Twój telefon, najwyżej 30 dni. Kopia Twoich zaplanowanych treningów — do odłączenia ostatniego zegarka Garmin lub Amazfit, najwyżej 30 dni od jej ostatniej zmiany. |

I w akapicie pod tabelą, po „…pozostaje tam do odinstalowania aplikacji.”:

> Treningi zapisane przez zegarek w aplikacji Zdrowie, Health Connect lub Garmin Connect pozostają tam, dopóki ich tam
> nie usuniesz.

### 3.4 Punkt 4, jedna pozycja przed „Apple i Google”, a tamta poszerzona

> - **Garmin** i **Zepp Health**, których aplikacje na telefon — Garmin Connect i Zepp — przenoszą to, co zegarek
>   Garmin lub Amazfit wymienia z naszym serwerem, a w przypadku Garmin także przechowują aktywność zapisaną przez
>   zegarek Garmin — jako administratorzy na podstawie własnych polityk prywatności.
> - **Apple i Google**, które sprzedają subskrypcje i doładowania oraz — jeśli z tego korzystasz — umożliwiają
>   logowanie, łączą Apple Watch lub zegarek z Wear OS z Twoim telefonem i prowadzą aplikację Zdrowie oraz Health
>   Connect, jako administratorzy na podstawie własnych polityk prywatności.

### 3.5 Punkt 5

Bez zmian, chyba że WATCH-04 ustali, że Garmin Connect lub aplikacja Zepp przesyła ruch przekaźnika przez serwery Garmin
lub Zepp — wtedy brzmienie ustala prawnik (§6, pytanie 3).

## 4. Account & Data Deletion (`delete-account.html`)

### 4.1 English

- **"Delete some of your data (keep your account)"**, a new item after "In the app:":

  > **Disconnect a Garmin or Amazfit watch** in Settings → Watch: it can no longer reach our server, and once no watch
  > is connected, the copy of your planned workouts is deleted from the relay.

- **"What happens when you delete your account"**, "After 30 days": after "your synced devices," insert "your connected
  Garmin and Amazfit watches and what the relay holds for them,".
- The same list, a new last item:

  > **On your watch,** what the app stored is cleared when you sign out of the app on your phone, or when you remove the
  > app from the watch. Workouts a watch saved to Apple Health, Health Connect or Garmin Connect stay there until you
  > delete them there.

### 4.2 Polski

- **„Usuń część danych (zachowaj konto)”**, nowa pozycja po „W aplikacji:”:

  > **Odłącz zegarek Garmin lub Amazfit** w Ustawienia → Zegarek: nie będzie już mógł łączyć się z naszym serwerem, a gdy
  > nie jest połączony żaden zegarek, kopia Twoich zaplanowanych treningów zostaje usunięta z przekaźnika.

- **„Co dzieje się po usunięciu konta”**, „Po 30 dniach”: po „synchronizowanymi urządzeniami,” wstaw „połączonymi
  zegarkami Garmin i Amazfit oraz tym, co przechowuje dla nich przekaźnik,”.
- Ta sama lista, nowa ostatnia pozycja:

  > **Na Twoim zegarku** to, co zapisała aplikacja, jest usuwane, gdy wylogujesz się z aplikacji na telefonie albo
  > usuniesz aplikację z zegarka. Treningi zapisane przez zegarek w aplikacji Zdrowie, Health Connect lub Garmin Connect
  > pozostają tam, dopóki ich tam nie usuniesz.

## 5. Terms of Use (`terms-of-service.html`)

The plan said the Terms are unaffected (WATCH-01, §H.9). But section 2 states what a person needs to use the app — the
technical requirements a Regulamin has to state (ustawa o świadczeniu usług drogą elektroniczną, art. 8) — and a watch
adds some. Section 8's list of estimates gains what a watch measures. Whether to keep both changes is the lawyer's call
(§6, question 6).

### 5.1 English

- **Section 2**, first paragraph: "…goals and reminders, and an AI Coach." becomes "…goals and reminders, an AI Coach,
  and an app for your watch."
- **Section 2**, second paragraph, after its first sentence:

  > To use it on a watch, you also need an Apple Watch with watchOS 26 or later, paired with an iPhone with iOS 26 or
  > later; a watch with Wear OS 4 or later, paired with your Android phone; or a Garmin or Amazfit watch listed on the
  > app's page in the Connect IQ Store or in the Zepp app, with the Garmin Connect or Zepp app on your phone. A Garmin
  > or Amazfit watch passes what you log on it to the app through our server, so it needs your phone's internet
  > connection to do so, and keeps what you logged until then.

- **Section 8**, last sentence: "Statistics, strength standards and estimated maximums are estimates." becomes
  "Statistics, strength standards, estimated maximums, and the heart rate and calories a watch shows, are estimates."

### 5.2 Polski

- **Punkt 2**, pierwszy akapit: „…celów i przypomnień, a także Trenera AI.” otrzymuje brzmienie „…celów i przypomnień,
  Trenera AI, a także aplikacji na zegarek.”
- **Punkt 2**, drugi akapit, po pierwszym zdaniu:

  > Aby korzystać z niej na zegarku, potrzebujesz też Apple Watch z systemem watchOS 26 lub nowszym, sparowanego z
  > iPhone’em z systemem iOS 26 lub nowszym; zegarka z systemem Wear OS 4 lub nowszym, sparowanego z Twoim telefonem z
  > Androidem; albo zegarka Garmin lub Amazfit wymienionego na stronie aplikacji w sklepie Connect IQ lub w aplikacji
  > Zepp, z aplikacją Garmin Connect lub Zepp na telefonie. Zegarek Garmin lub Amazfit przekazuje to, co na nim
  > zapisujesz, do aplikacji przez nasz serwer, więc potrzebuje do tego połączenia telefonu z internetem, a do tego czasu
  > przechowuje zapisane dane u siebie.

- **Punkt 8**, ostatnie zdanie: „Statystyki, normy siłowe i szacowane maksima są szacunkami.” otrzymuje brzmienie
  „Statystyki, normy siłowe, szacowane maksima oraz tętno i kalorie pokazywane przez zegarek są szacunkami.”

## 6. For the lawyer's hour

1. **Health data on the wrist.** The draft treats what a watch reveals about health as Article 9 data, on explicit
   consent given by using the watch and, for Apple Health and Health Connect, by granting their permission — as the
   policy already does for training entered in the app. Each watch asks for its permissions at the first workout's
   start, with one sentence saying why (plan §E.1 rule 10). Is that enough, or does the first watch workout need a
   consent of its own?
2. **Heart rate shown on the phone.** While a tethered watch is connected, the phone app shows the heart rate live and
   keeps none of it (WATCH-15). Is that processing by us that needs saying beyond what §2.1 says?
3. **Garmin and Zepp Health.** Their phone apps carry the relay's traffic. The draft names them in section 4 as
   controllers under their own policies. If WATCH-04 finds that the traffic passes through their servers, are they
   recipients of ours, and does section 5 need them (Garmin: Switzerland and the USA; Zepp Health: China and the USA)?
4. **Apple and Google as carriers.** WatchConnectivity and Wear OS's Data Layer may route through Apple's or Google's
   servers when the watch is away from the phone. The draft names them as connecting the watch to the phone. Is that
   right, and enough?
5. **The relay's retention.** Seven days after delivery and thirty days at most (WD-24). Is that adequate as stated?
   And, once WATCH-17 fixes it, how long a pairing request is kept.
6. **The Terms.** The plan said they are unaffected; the draft adds the watch's technical requirements to section 2 and
   the watch's estimates to section 8 (§5). Should both go in, and does adding a feature need the advance notice
   section 16 describes?
7. **Health Connect.** The app writes three data types and reads none. Google's "Limited Use" statement is for data an
   app reads, so the draft leaves it out. Is that safe?
8. **Apple's guideline 5.1.3 and the HealthKit terms.** The draft says the records are never used for advertising or
   marketing, never sold, and never stored on our server or in iCloud. Is that phrased as they require?
