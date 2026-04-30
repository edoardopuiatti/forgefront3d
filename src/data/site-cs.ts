export const siteCs = {
  name: "Forgefront 3D",
  title: "Forgefront 3D | 3D tisk zakázkových dílů, prototypů a malých sérií",
  description:
    "Rychlý a praktický 3D tisk náhradních dílů, prototypů a zakázkové výroby v Praze. Nahrajte soubor a vyžádejte si cenovou nabídku.",
  url: "https://forgefront3d.com/cs/",
  email: "forgefront3d@gmail.com",
  responseTime: "Na většinu poptávek odpovídáme do 1 pracovního dne",
  addressLine: "Osobní vyzvednutí v Praze 2 po domluvě.",
  hours: "Po - Ne 8:00 - 22:00",
};

export const navLinksCs = [
  { href: "/cs/", label: "Domů" },
  { href: "/cs/how-it-works/", label: "Jak to funguje" },
  { href: "/cs/materials-finishes/", label: "Materiály a povrchy" },
  { href: "/cs/quote/", label: "Ceník / Poptávka" },
  { href: "/cs/use-cases/", label: "Použití" },
  { href: "/cs/faq/", label: "FAQ" },
  { href: "/cs/contact/", label: "Kontakt" },
];

export const fileTypesCs = ["STL", "STEP", "OBJ", "3MF"];

export const trustBarItemsCs = [
  "Ruční kontrola každé poptávky",
  "Vhodné i pro kusovou výrobu",
  "Vyzvednutí v Praze 2 nebo zaslání",
  "K dispozici PLA, PETG a ASA",
];

export const stepsCs = [
  {
    title: "Nahrajte soubor nebo pošlete zadání",
    description:
      "Pošlete STL, STEP, OBJ nebo 3MF. Pokud model ještě nemáte, stačí náčrt, referenční fotka nebo popis dílu, který potřebujete.",
  },
  {
    title: "Dostanete nabídku a doporučení materiálu",
    description:
      "Každou zakázku posuzuje reálný člověk. Dostanete cenu, termín a doporučení, jestli je pro daný díl vhodnější PLA, PETG nebo ASA.",
  },
  {
    title: "Vytiskneme, zkontrolujeme a domluvíme zaslání nebo vyzvednutí v Praze 2",
    description:
      "Po schválení jde zakázka do přípravy a výroby. Menší díly bývají hotové rychle, s možností zaslání nebo osobního vyzvednutí po domluvě.",
  },
];

export const homeUseCasesCs = [
  {
    title: "Náhradní díly",
    description: "Klipy, držáky, krytky, knoflíky, distanční podložky a těžko dostupné díly pro domácnost, dílnu nebo opravy zařízení.",
  },
  {
    title: "Prototypy",
    description: "Jednoduché prototypové kryty, přípravky, jigy a vývojové díly pro rychlé ověření návrhu.",
  },
  {
    title: "Hobby a maker projekty",
    description: "Krabičky, adaptéry, držáky a vlastní komponenty pro kutily, kteří nepotřebují kupovat vlastní tiskárnu.",
  },
  {
    title: "Jednotlivé kusy na zakázku",
    description: "Potřebujete jediný specifický díl? Kusové zakázky mají místo, i když jde o nezvyklý požadavek.",
  },
  {
    title: "Malé série",
    description: "Krátké série pro testovací kusy, interní přípravky nebo nízkoobjemové firemní díly, kde se klasická výroba nevyplatí.",
  },
];

export const materialsCs = [
  {
    name: "PLA",
    quickDescription: "Snadno tisknutelný, čistě vypadající a cenově dostupný materiál pro běžné díly a vizuální modely.",
    bestUse: "Koncepty, lehce namáhané držáky, krabičky, prezentační díly",
    affordability: "Nejnižší cena",
    durability: "Střední odolnost",
    strength: "Dobrá tuhost, nižší tepelná odolnost",
    finish: "Široká nabídka barev, viditelné vrstvy",
    caveats: "Nejvhodnější pro interiérové díly, které nemusí snášet vyšší teploty.",
  },
  {
    name: "PETG",
    quickDescription: "Univerzální pevný materiál s lepší houževnatostí a odolností proti vlhkosti než PLA.",
    bestUse: "Funkční díly, dílenské doplňky, kryty, užitkové držáky",
    affordability: "Dostupná střední cena",
    durability: "Dobrá odolnost",
    strength: "Vyšší houževnatost než PLA a lepší chemická odolnost",
    finish: "O něco lesklejší povrch než PLA",
    caveats: "Dobrá volba pro funkční použití, když potřebujete vyvážit cenu a odolnost.",
  },
  {
    name: "ASA",
    quickDescription: "Odolnější technický materiál vhodný pro náročnější funkční díly a venkovní použití.",
    bestUse: "Venkovní díly, odolné kryty, více namáhané funkční součásti",
    affordability: "Střední cena",
    durability: "Vysoká odolnost",
    strength: "Dobrá UV a povětrnostní odolnost při zachování funkční pevnosti",
    finish: "Matnější povrch s viditelnými vrstvami",
    caveats: "Dává smysl tam, kde je potřeba vyšší venkovní odolnost než u PLA nebo PETG.",
  },
] as const;

export const reasonsCs = [
  {
    title: "Ruční kontrola před tiskem",
    description: "Soubor neposíláte do anonymního systému. Každá poptávka se kontroluje z hlediska tisknutelnosti, vhodnosti materiálu a praktických dalších kroků.",
  },
  {
    title: "Rychlé termíny u jednodušších zakázek",
    description: "Menší díly a jednoduché opakované zakázky bývají hotové rychle. Pokud máte termín, uveďte ho už v poptávce.",
  },
  {
    title: "Jasná komunikace",
    description: "Pokud model potřebuje úpravu, díl vypadá slabě nebo je vhodnější jiný materiál, dozvíte se to ještě před zahájením tisku.",
  },
  {
    title: "Vhodné pro kusovky i malé série",
    description: "Služba je stavěná na typ práce, kterou větší výrobci často nechtějí řešit: jednotlivé kusy, krátké série a praktické zakázky.",
  },
  {
    title: "Osobní lokální servis",
    description: "Vyzvednutí je možné v Praze 2 a otázky řeší člověk, který zakázku opravdu kontroluje a tiskne.",
  },
  {
    title: "Pomoc i pro netechnické zákazníky",
    description: "Pokud s 3D tiskem začínáte, nevadí. Často stačí jasný popis problému nebo referenční fotka a dá se začít.",
  },
];

export const galleryItemsCs = [
  { label: "Funkční držák", note: "Nahraďte reálnou fotkou vytištěného držáku" },
  { label: "Prototypový kryt", note: "Nahraďte fotkou prototypového krytu" },
  { label: "Náhradní knoflík", note: "Nahraďte fotkou náhradního dílu do domácnosti" },
  { label: "Dílenský přípravek", note: "Nahraďte fotkou tištěného nástroje nebo jig-u" },
  { label: "Detail ke cosplayi", note: "Nahraďte fotkou FDM dílu ke kostýmu" },
  { label: "Malá série distančních dílů", note: "Nahraďte fotkou opakované výroby" },
];

export const testimonialsCs = [
  {
    quote:
      "Potřeboval jsem náhradní klip do kuchyňského spotřebiče, který už nešel nikde koupit. Díl seděl dobře a byl hotový rychleji, než jsem čekal.",
    name: "Ukázková reference od zákazníka s opravou",
  },
  {
    quote:
      "Nechali jsme si vytisknout jednoduchý prototypový kryt před dalším výrobním krokem. Komunikace byla jasná a díl byl připravený k testování.",
    name: "Ukázková reference od menšího produktového týmu",
  },
  {
    quote:
      "Poslal jsem hobby projekt skoro bez technických poznámek. Pomohli mi vybrat materiál, zkontrolovali model a celý proces byl jednoduchý.",
    name: "Ukázková reference od zákazníka, který tisk objednával poprvé",
  },
];

export const proofPointsCs = [
  {
    title: "Poptávkový workflow bez přetvářky",
    description: "Nahrajete soubor, popíšete zakázku a dostanete skutečnou nabídku místo zavádějícího falešného instantního kalkulátoru.",
  },
  {
    title: "Navržené pro praktické zakázky",
    description: "Od náhradních dílů po rychlé prototypy. Celý web je stavěný na reálnou malou a kusovou výrobu.",
  },
  {
    title: "Pomoc i když soubor není perfektní",
    description: "Když je stěna příliš tenká, otvor potřebuje úpravu nebo je vhodnější jiné natočení, dá se to zachytit ještě před tiskem.",
  },
];

export const faqsCs = [
  {
    question: "Jaké typy souborů přijímáte?",
    answer:
      "Preferované formáty jsou STL, STEP, OBJ a 3MF. Pokud váš CAD exportuje jiný formát, ozvěte se předem a potvrdíme, jestli bude použitelný.",
  },
  {
    question: "Jak dlouho tisk trvá?",
    answer:
      "Termín závisí na velikosti dílu, množství, materiálu a aktuální kapacitě. Jednodušší malé díly bývají hotové rychle, větší zakázky mohou trvat déle. Pokud máte deadline, uveďte ho do poptávky.",
  },
  {
    question: "Kolik 3D tisk stojí?",
    answer:
      "Cena se odvíjí od materiálu, času tisku, velikosti dílu, počtu kusů, požadovaného vzhledu a termínu. Nejrychlejší cesta k přesné ceně je nahrát soubor.",
  },
  {
    question: "Co když nemám 3D soubor?",
    answer:
      "I tak se můžete ozvat. Náčrt, rozbitý díl, fotka nebo základní rozměry často stačí k tomu, aby se dalo posoudit, jestli zakázka dává smysl a jaký bude další krok.",
  },
  {
    question: "Pomůžete s kontrolou nebo opravou modelu?",
    answer:
      "Základní kontrola souboru je součástí nacenění. Pokud má model zjevné problémy s tisknutelností nebo potřebuje drobnou úpravu, dá se to probrat ještě před výrobou.",
  },
  {
    question: "Jaké materiály nabízíte?",
    answer:
      "Standardně jsou k dispozici PLA, PETG a ASA. Pokud si nejste jistí výběrem, připište krátce, jak bude díl použitý, a doporučení dostanete v nabídce.",
  },
  {
    question: "Tisknete i jednotlivé kusy?",
    answer:
      "Ano. Kusové díly i malé série jsou hlavní součástí služby, zvlášť u náhradních dílů, prototypů a praktických zakázek.",
  },
  {
    question: "Posíláte zásilky nebo je možné osobní vyzvednutí?",
    answer:
      "Obě varianty jsou možné. Zásilku lze poslat a osobní vyzvednutí je možné po domluvě v Praze 2.",
  },
  {
    question: "Jak velké díly umíte vytisknout?",
    answer:
      "Maximální velikost závisí na tiskárně a materiálu. Pokud je díl příliš velký na tisk v jednom kuse, může být možné ho rozdělit a následně sestavit.",
  },
  {
    question: "Jak přesné jsou vytištěné díly?",
    answer:
      "3D tisk je vhodný pro mnoho funkčních použití, ale přesnost závisí na geometrii, materiálu, orientaci tisku a případném dokončení. Kritické rozměry je potřeba uvést předem.",
  },
  {
    question: "Můžete tisknout důvěrné nebo proprietární díly?",
    answer:
      "Se soubory zákazníků lze zacházet rozumně a opatrně, ale pokud je důvěrnost zásadní, ozvěte se předem a domluvíme očekávání ohledně zacházení s daty.",
  },
  {
    question: "Jaký povrch mám očekávat?",
    answer:
      "Většina dílů bude mít viditelné vrstvy nebo drobné stopy po podpěrách, protože jde o praktickou tiskovou službu, ne o skrytě dokončenou sériovou výrobu. Pokud je vzhled důležitý, uveďte to hned na začátku.",
  },
];

export const detailedUseCasesCs = [
  {
    title: "Náhradní díly",
    description:
      "3D tisk je ideální ve chvíli, kdy je původní díl nedostupný, špatně se shání nebo se nevyplatí kupovat ve větším množství. Časté jsou klipy, krytky, držáky, knoflíky a adaptéry.",
    bullets: [
      "Vhodné pro díly do spotřebičů, dílny, interiéru auta nebo speciální příslušenství",
      "Dobrá volba, když má díl vyřešit jeden konkrétní praktický problém",
      "Pomáhá u oprav, kde je rychlost důležitější než hledání náhradních dodavatelů",
    ],
  },
  {
    title: "Prototypy",
    description:
      "Pro startupy, konstruktéry a menší týmy je 3D tisk rychlý způsob, jak ověřit tvar, uložení, ergonomii nebo základní funkci ještě před dražší výrobou.",
    bullets: [
      "Rychlé makety krytů a obalů",
      "Interní testovací díly a ověření geometrie",
      "Krátké pilotní série před dalším výrobním krokem",
    ],
  },
  {
    title: "Hobby a maker projekty",
    description:
      "Ne každý chce vlastnit nebo servisovat vlastní tiskárnu. Služba se hodí na držáky, adaptéry, krabičky na elektroniku, doplňky ke stolním hrám i další vlastní díly.",
    bullets: [
      "Dobré pro jednotlivé díly a drobná vylepšení",
      "Praktické, pokud potřebujete jen pár kusů a nechcete řešit tisk sami",
      "Vhodné pro zakázkové součásti, které se nedají jednoduše koupit",
    ],
  },
  {
    title: "Dárky a cosplay díly",
    description:
      "Rekvizity, dekorativní objekty a části kostýmů mohou být dobrými kandidáty pro FDM tisk, zvlášť když potřebujete konkrétní tvar rychle a za rozumnou cenu.",
    bullets: [
      "Hodí se na větší části kostýmů, rekvizity a pancéřové detaily",
      "Větší dekorativní díly mohou vyžadovat slepení nebo další dokončení",
      "Pokud je důležitý vzhled, je dobré předem probrat broušení a přípravu na lak",
    ],
  },
  {
    title: "Malé série pro firmy",
    description:
      "Když firma potřebuje deset, dvacet nebo padesát kusů místo tisíců, může být 3D tisk praktickou cestou pro přípravky, interní díly nebo menší výrobní série.",
    bullets: [
      "Vhodné pro tooling, interní vybavení a krátké série doplňků",
      "Bez vysokých vstupních nákladů typických pro klasickou výrobu",
      "Dobré tam, kde se může návrh ještě průběžně měnit",
    ],
  },
];

export const priceFactorsCs = [
  {
    title: "Velikost a objem dílu",
    description: "Větší díly spotřebují více materiálu i strojního času, což se přímo promítá do ceny.",
  },
  {
    title: "Volba materiálu",
    description: "PLA, PETG a ASA mají rozdílnou cenu, pevnost a odolnost vůči prostředí.",
  },
  {
    title: "Počet kusů",
    description: "Jednotlivé kusy i malé série jsou vítané, ale opakované množství mění čas přípravy i výroby.",
  },
  {
    title: "Složitost geometrie",
    description: "Tenké stěny, podpěry, složité natočení nebo náročné čištění mohou zvýšit čas zpracování.",
  },
  {
    title: "Požadovaný vzhled",
    description: "Hladší prezentační díly nebo další úpravy nad běžný tisk mohou vyžadovat více práce.",
  },
  {
    title: "Termín a urgence",
    description: "Urychlené zakázky je někdy možné zvládnout, ale je potřeba je domluvit hned v poptávce.",
  },
];
