# STYLEGUIDE — Smokers
Verze: 1.0 (návrh) · Datum: 16. 10. 2026 · Autor: Patrik Meloun

> Vše označené **(návrh)** je moje výchozí hodnota, kterou jsi mi nedal – klidně ji přepiš.

## Kontext projektu
- **Typ projektu:** prezentační web šisha baru s menu (nápoje + šisha), rezervací stolu a kontakty.
- **Cílovka (návrh):** 18–35 let, studenti a mladí profesionálové, přicházejí v partě nebo na rande, hledají místo, kde se dá zpomalit. Řeší: „je tam místo?", „co mají za tabák a drinky?", „kolik to stojí?" – většinou z mobilu.
- **Pocit:** klidný, útulný, hřejivý, intimní, dospělý.
- **Reference:**
  1. The Lux – ručně kreslené zlaté linky nápojů → inspirace pro nápojový lístek a výběr šisha směsí.
  2. Deem – neortodoxní záběry prostoru, obloukové (arch) ořezy fotek → obrazový jazyk.
  3. Smouk – zaoblený geometrický font → text font.
  4. Foukárna – rozložení informací (ikona + nadpis + krátký text v mřížce 2×2, fotky vedle) → sekce „Proč k nám".
  5. Kaleean – úvodní stránka a menu (záložková navigace, hero, řádek adresa / telefon / rezervace, „Doporučujeme") → struktura stránek.
- **Co určitě NE:** neon a „party" estetika, lebky/oblaka-kouře jako klišé, ostré kontrasty (čistě bílá na čistě černé), víc než jedna akční barva, stock fotky usmívajících se lidí, blikající animace.

---

## 1. Brand základ
- **Název & tagline:** **Smokers** — *Šisha & cocktail lounge.* Claim (návrh): *„Zpomal. Nadechni se."*
- **Osobnost značky:** klidná, útulná, dospělá, hravě elegantní, pozorná.
- **Tone of voice (návrh):** tykáme, krátké věty, žádné křiklavé výkřičníky, trocha humoru a smyslů (vůně, chuť, kouř). Příklad: „Máme pro tebe stůl. Zbytek je na tobě." Ne: „SUPER AKCE!!! Přijď hned!" Nikdy neoslovujeme „kámo/bro".
- **Klíčový pocit z webu:** „Tady se dá vydechnout." – tmavé, teplé, tiché místo; první vteřinu vidíš velkou fotku prostoru, jemný kouř a jedno tlačítko *Rezervovat stůl*.

## 2. Logo
- **Primární varianta (návrh):** wordmark **Smokers** v *Cormorant Garamond Italic 600*, barva Ink (`#F0E9DA`), vlevo od něj značka – obloukový (arch) obrys s jednou tenkou kouřovou linkou ve tvaru „S" v barvě Accent. Oblouk odkazuje na obrazový jazyk (arch ořezy fotek).
- **Sekundární / favicon:** samotná značka (oblouk + „S") na zeleném podkladu `#1F3D35`, 1:1, linka Accent. Pro malé velikosti bez kouřového detailu – jen oblouk a „S".
- **Ochranná zóna:** výška velkého „S" z wordmarku (= `1S`) kolem dokola.
- **Minimální velikost:** wordmark 96 px na šířku (tisk 25 mm); samostatná značka 24 px (favicon 32 px).
- **Povolené barevné verze:** Ink na tmavém · Bg (`#0A0F0E`) na béžovém `#D2B98E`.
- **Zakázané použití:** deformace/natahování, stíny a záře, neonové barvy, barvy mimo paletu, umístění na rušivé fotce bez ztmavení, přidání cigaret/kouře jako realistických obrázků, přepsání do jiného fontu.
- *Poznámka: logo zatím nemáš – toto je návrh. Až bude hotové, nahradíme tuto sekci.*

## 3. Barvy (role, ne jen hexy)

| Role | Hex | Použití |
|---|---|---|
| **Background** | `#0A0F0E` | hlavní podklad (černá s nádechem zelené) |
| **Background alt** | `#0D1715` | střídání sekcí (tmavě zelená) |
| **Background navy** | `#0C1B2A` | doplňkový podklad – rezervace, patička, speciální sekce (tmavě modrá) |
| **Surface** | `#142320` | karty, header (po scrollu), vyvýšené prvky |
| **Surface 2** | `#1B2E2A` | hover karty, dropdown, input v hover |
| **Border** | `#2B3D38` | jemné linky a okraje |
| **Ink / Text primary** | `#F0E9DA` | nadpisy, hlavní text (teplá béžová, ne čistě bílá) |
| **Text secondary** | `#B9B4A5` | popisky, doplňkový text |
| **Text muted** | `#8F8C7E` | placeholdery, ceny v pozadí, jen drobné texty |
| **Accent** | `#D2B98E` | CTA, odkazy, aktivní stavy – **jediná „akční" barva** |
| **Accent hover** | `#E2CDA6` | hover CTA |
| **Accent pressed** | `#BFA578` | stisknuté CTA |

**Sekundární paleta**
- **Forest** `#1F3D35` – plochy, ikony v kruhu, favicon podklad, tagy kategorií.
- **Navy** `#10263A` – karty uvnitř navy sekce, přechody k modré.
- **Sage** `#8FB09C` – dekor, tenké linky, ilustrace, stavy „volno".
- **Ember** `#C47F55` – extrémně střídmě: jedna drobná zvýrazňující věc na stránce (např. štítek „Novinka", žhavé uhlíky). Nikdy jako CTA.

**Feedback:** success `#8BC4A0` · warning `#E3B35F` · error `#E58C7E`

**Pravidlo kontrastu:** text vždy min. WCAG AA (4.5:1). Ověřeno:
- Ink na Background 16.0 : 1 · na Surface 13.5 : 1
- Text secondary na Background 9.3 : 1 · na Surface 7.9 : 1
- Text muted na Background 5.7 : 1 · na Surface 4.8 : 1 — **muted nepoužívat na Surface 2** (4.2 : 1)
- Accent na Background 10.2 : 1 · tmavý text na Accent tlačítku 10.2 : 1
- Feedback barvy na Surface všechny ≥ 6.5 : 1

## 4. Typografie
- **Display font:** **Cormorant Garamond – Italic** (500, 600) — hlavní nadpisy, hero, názvy drinků, ceny v lístku. Je to „italic" font z tvého zadání.
- **Text font:** **Quicksand** (500, 600, 700) — body, navigace, UI, formuláře. Zaoblený geometrický font, blízký Smouk/Foukárně.
- **Mono / akcentový font:** – nepoužíváme. Ceny: Quicksand 600 s `tabular-nums` (aby seděly pod sebou).
- **Škála** (poměr **1,25 – major third**, základ 16 px; desktop → mobil):

| Úroveň | Desktop | Mobil | Font |
|---|---|---|---|
| Display | 61 / 1,05 | 40 / 1,1 | Cormorant Italic 500 |
| H2 | 39 / 1,15 | 31 / 1,2 | Cormorant Italic 500 |
| H3 | 25 / 1,3 | 20 / 1,3 | Quicksand 600 |
| Lead | 20 / 1,5 | 18 / 1,5 | Quicksand 500 |
| Body | 16 / 1,65 | 16 / 1,65 | Quicksand 500 |
| Small | 14 / 1,5 | 14 / 1,5 | Quicksand 500 |
| Caption | 12 / 1,4 | 12 / 1,4 | Quicksand 700, VERZÁLKY |

  Small a Caption jsou pevné UI velikosti mimo škálu (pod 16 px se poměr nedodržuje, aby nebyl text nečitelný).
- **Letter-spacing:** Display −1 % · H2 −0,5 % · H3 0 · body 0 · captions +12 %.
- **Řezy:** Cormorant jen *italic* 500/600 a jen od 25 px výš (tenké tahy). Quicksand 500/600/700 – **ne 300 ani 400** (na tmavém podkladu se ztrácí). Kurzíva se nikdy nepoužívá na delší text, jen na nadpisy a zvýrazněná slova.
- **Zlaté pravidlo kombinace:** v nadpisu má italic font jen jedno klíčové slovo nebo celý krátký nadpis. Příklad: `Zpomal. <i>Nadechni se.</i>`
- **Čeština:** oba fonty podporují latin-ext (ě š č ř ž ý á í é ú ů). Načítat `subset=latin,latin-ext`.

## 5. Grid & spacing
- **Návrhová šířka:** 1440 px · **Max-width kontejneru:** 1200 px (centrovaný), hero a galerie smí do 1440.
- **Sloupce:** 12 (desktop) / 8 (tablet) / 4 (mobil) · **Gutter:** 24 px · **Okraj stránky:** 64 / 40 / 20 px (desktop / tablet / mobil).
- **Spacing škála (4px základ):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- **Vertikální rytmus sekcí:** 96 px (desktop), 64 px (mobil). Nadpis sekce → obsah: 48 px. Odstavce: 16 px.
- **Výška headeru:** 72 px (60 px po scrollu) · **Breakpointy:** mobil < 640 · tablet 640–1023 · desktop ≥ 1024 (velký ≥ 1280).
- **Radius škála:** 8 · 16 · 24 · pill (999) · arch (viz sekce 7).

## 6. Komponenty
- **Primární tlačítko:** bg Accent `#D2B98E`, text `#0A0F0E` Quicksand 700 16 px, výška 48, padding 0 / 28, radius pill. Hover: bg `#E2CDA6` + `translateY(-1px)`. Pressed: `#BFA578`. Focus: 2 px outline Ink s offsetem 2 px. Disabled: bg `#2B3D38`, text muted.
- **Sekundární tlačítko:** bg transparent, text Ink, border 1 px `rgba(240,233,218,.32)`, výška 48, padding 0 / 28, radius pill. Hover: border Accent, text Accent, bg `rgba(210,185,142,.08)`.
- **Textový odkaz:** Accent, podtržení 1 px s offsetem 4 px; hover = Accent hover.
- **Input:** výška 48 (textarea min 120), padding 0 / 16, radius 16, bg Surface, border 1 px Border, text Ink, placeholder Muted. Focus: border Accent + ring `0 0 0 3px rgba(210,185,142,.25)`. Error: border `#E58C7E` + chybová hláška Small pod polem. Label nad polem, Small 600, Text secondary.
- **Karta:** padding 24, bg Surface, radius 24, border 1 px `rgba(240,233,218,.06)`, **bez stínu** (na tmavém se stíny ztrácí). Hover: bg Surface 2 + border `rgba(210,185,142,.3)`. Menu karta: Caption cena nahoře (jako u The Lux) → název v Cormorant italic 25 px → popis Small secondary.
- **Info řádek (Kaleean styl):** tři bloky vedle sebe – *Adresa*, *Telefon*, *Otevírací doba* – malý label Small secondary nad hodnotou Lead Ink, pod hodnotou textový odkaz s ikonou (*Zobrazit na mapě*, *Zavolat*); vpravo CTA *Rezervovat stůl*.
- **Badge / tag:** Quicksand 700 12 px VERZÁLKY +12 %, padding 4 / 12, radius pill, bg `rgba(210,185,142,.12)`, text Accent, border 1 px `rgba(210,185,142,.3)`. Varianta Forest: bg `#1F3D35`, text Sage. Varianta „18+": Ink obrys, bez výplně.
- **Navigace (návrh):** logo vlevo, záložky *Hlavní stránka · Menu · Rezervace · Kontakt* (Quicksand 600 16, aktivní = Accent + podtržení 2 px), vpravo přepínač CZ/EN a ikona rezervace. Sticky, bg `rgba(10,15,14,.72)` + `backdrop-filter: blur(12px)`; po scrollu 72 → 60 px a objeví se spodní border. Mobil: burger → full-screen menu na Background, položky v Cormorant italic 31 px.
- **Footer:** bg Navy, 4 sloupce – (1) logo + tagline, (2) adresa a otevírací doba, (3) kontakt + rezervace, (4) sociální sítě; spodní řádek: © Smokers · Ochrana osobních údajů · **upozornění „Alkohol a vodní dýmky podáváme pouze osobám starším 18 let."** + badge 18+.

## 7. Obrazový jazyk
- **Poměry stran:** 3 : 4 portrét (hlavní, arch) · 4 : 5 portrét · 16 : 9 hero · 3 : 2 krajina · 1 : 1 thumbnail menu / ilustrace.
- **Styl fotek:** lifestyle + interiér, low-key, teplé měkké světlo (žárovky, svíčky, zelená stěna), jemný kouř, detaily (nástavec, uhlíky, sklenice), ruce a profily místo pózujících obličejů. Barevně: sladit do tmavé zeleno-béžové palety – mírně snížená saturace, stíny do teal/zelené, žádné ostré bílé. Neortodoxní, „zblízka" a šikmé záběry prostoru jako u Deem.
- **Radius obrázků:** standard 16 px · hero 24 px · **arch**: horní dva rohy 999 px (půlkruh), spodní dva 16 px — používat u portrétních fotek, maximálně 3 na jedné obrazovce, střídat arch a obdélník.
- **Ilustrace (inspirace The Lux):** jednobarevné tenké linky v Accent na tmavém, tah 1,25 px, ručně kreslený styl, sklenice/koktejly/limonády/šisha. Použít jako ikony kategorií v menu a jako dekor. Kreslí se na míru – 1 ilustrace = 1 položka/skupina.
- **Ikony:** Lucide, tah 1,5 px, velikost 24 px (20 px v tlačítkách), zaoblené konce, barva Accent nebo Ink.

## 8. Motion
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo styl).
- **Durations:** micro 150 ms (hover, focus) · standard 300 ms (karty, menu) · page 600 ms (scroll reveal, přechody stránek).
- **Co se animuje:** hover tlačítek a karet, scroll reveal sekcí (fade + posun 16 px nahoru, stagger 60 ms), přechod hlavičky při scrollu, pomalý jemný kouř v hero (opacity ≤ 0,12, smyčka 30–40 s, pouze CSS/SVG).
- **Co se NEanimuje:** text při čtení, layout shifty, ceny a stavy rezervace, nic blikavého. Respektovat `prefers-reduced-motion` – vypnout kouř a reveal.

## 9. Pravidla (do & don't)
1. Žádné barvy mimo paletu; jediná akční barva je Accent.
2. Žádné hodnoty mimo spacing a radius škálu.
3. Žádná čistě bílá (`#FFF`) a čistě černá (`#000`) – vždy Ink a Background.
4. Kurzíva (Cormorant) jen v nadpisech, názvech drinků a cenách v lístku, nikdy v těle textu.
5. Maximálně jedno primární CTA na obrazovku (*Rezervovat stůl*).
6. Fotky vždy ztmavit/sladit do palety; text na fotce jen přes overlay s kontrastem 4.5 : 1.
7. Každá stránka s nabídkou alkoholu/šisha obsahuje upozornění 18+.
8. Žádný neon, žádná glow záře, žádné gradienty mimo jemný přechod Background → Background alt.
9. Mobile first: web se hodnotí na telefonu, tlačítko *Rezervovat* a *Zavolat* vždy do jednoho tapnutí.
10. Dotykové plochy min. 44 × 44 px.

---

## Potvrzená rozhodnutí
- Tykání – potvrzeno.
- Logo – zatím návrh (oblouk + „S"), později nahradit finálním.
- Rezervace – formulář přímo na webu (zatím bez napojení na server).

## Ještě chybí
Adresa, telefon, e-mail, otevírací doba, skutečné fotky a finální menu s cenami. V `site/` jsou místa označena „Doplnit" / „(návrh)".
