export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  materials: string[];
  popular?: boolean;
}

export interface PasItem {
  id: number;
  problemBadge: string;
  title: string;
  truth: string;
  agitate: string;
  solve: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'treppen' | 'boeden' | 'restauration' | 'tueren';
  categoryLabel: string;
  image: string;
  description: string;
  woodType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  tag: string;
  description: string;
  tasks: string[];
  benefits: string[];
}

export const COMPANY_INFO = {
  name: "Tischlerei Dirk Schlemermeyer GmbH",
  shortName: "Tischlerei Schlemermeyer",
  founded: 1883,
  owner: "Dirk Schlemermeyer (Tischlermeister)",
  address: {
    street: "Blenhorster Str. 7",
    city: "31609 Balge – Blenhorst",
    region: "Landkreis Nienburg/Weser (Niedersachsen)"
  },
  contact: {
    phone: "05022 / 633",
    phoneCallable: "+495022633",
    email: "info@schlemermeyer.de",
    website: "https://www.schlemermeyer.de",
    googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJMbZVfTjtsEcRNaN_uvXWAO4"
  },
  openingHours: [
    { days: "Montag – Donnerstag", hours: "07:30 – 16:30 Uhr" },
    { days: "Freitag", hours: "07:30 – 13:00 Uhr" },
    { days: "Samstag – Sonntag", hours: "Nach individueller Vereinbarung" }
  ],
  serviceArea: ["Nienburg/Weser", "Hannover & Region", "Bremen & Umland", "Verden (Aller)", "Diepholz", "Syke & Hoya", "Weserbergland"],
  logoUrl: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Logo_Schlemermeyer.png"
};

export const TRUST_METRICS = [
  { value: "140+", label: "Jahre Meistertradition", subtext: "Seit 1883 in 4. Generation" },
  { value: "100%", label: "Individuelle Maßfertigung", subtext: "Eigene Werkstatt in Balge" },
  { value: "Meister", label: "Geprüfter Innungsbetrieb", subtext: "Garantierte Handwerksqualität" },
  { value: "05022", label: "Persönlicher Ansprechpartner", subtext: "Direktes Aufmaß vor Ort" }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Ausgewählte Eichen-Altholzbalken",
    category: "restauration",
    categoryLabel: "Altholz & Lager",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0018_ergebnis.webp",
    description: "Sorgfältig getrocknete und abgelagerte historische Massivholzbalken für charakterstarke Sonderbauten und Restaurationen.",
    woodType: "Abgelagertes Eichen-Altholz"
  },
  {
    id: "g2",
    title: "Historisches Altholz-Balkenlager",
    category: "restauration",
    categoryLabel: "Restauration",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0008_ergebnis.webp",
    description: "Ausgewählte historische Balken und Eichensubstanz für denkmalgerechte Restaurationen und rustikale Einzelstücke.",
    woodType: "Historisches Eichenholz"
  },
  {
    id: "g3",
    title: "Präziser Stufen- & Wangenzuschnitt",
    category: "treppen",
    categoryLabel: "Treppenfertigung",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0017_ergebnis.webp",
    description: "Präzise Vorfertigung und Zuschnitt von gewendelten Treppenstufen und Schablonen in unserer Balger Werkstatt.",
    woodType: "Stufenzuschnitt nach 3D-Maß"
  },
  {
    id: "g4",
    title: "Massivholz-Landhausdielen verlegt",
    category: "boeden",
    categoryLabel: "Parkett & Böden",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0163-1-scaled_ergebnis.webp",
    description: "Großformatige, edel gebürstete und naturgeölte Massivholzdielen mit sichtbarer Holzmaserung und samtiger Haptik.",
    woodType: "Wildeiche gebürstet & geölt"
  },
  {
    id: "g5",
    title: "Moderne Faltwerk- & Kragarmtreppe",
    category: "treppen",
    categoryLabel: "Treppenbau",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0086_ergebnis.webp",
    description: "Schwebende Kragarm-Treppenkonstruktion mit massiven Eichenstufen und integrierter dezenter Wandbeleuchtung.",
    woodType: "Massive Eichen-Trittstufen"
  },
  {
    id: "g6",
    title: "Mosaik- & Würfelparkett Verlegung",
    category: "boeden",
    categoryLabel: "Parkett & Böden",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0048-1_ergebnis.webp",
    description: "Klassisches Massivholz-Würfelparkett für langlebige, widerstandsfähige Wohnräume mit lebendiger Struktur.",
    woodType: "Eiche Mosaikparkett"
  },
  {
    id: "g7",
    title: "Formverleimung & Stufenpresse",
    category: "treppen",
    categoryLabel: "Werkstattfertigung",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0015_ergebnis.webp",
    description: "Hochdruck-Verleimung massiver Treppenwangen und Rohlinge für maximale Tragfähigkeit und Formstabilität.",
    woodType: "Massivholz-Verpressung Balge"
  },
  {
    id: "g8",
    title: "Meisterwerkstatt & Hobelbank-Bereich",
    category: "restauration",
    categoryLabel: "Meisterwerkstatt",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0050_ergebnis.webp",
    description: "Blick in unsere traditionelle Werkstatt in Balge: Echte Handwerksarbeit an Hobelbänken und Präzisionsmaschinen seit 1883.",
    woodType: "100% Eigene Werkstatt Balge"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "treppenbau",
    title: "Exklusiver Treppenbau nach Maß",
    subtitle: "Das architektonische Herzstück Ihres Zuhauses",
    description: "Von freitragenden Kragarmtreppen über moderne Faltwerkoptik bis hin zu klassischen aufgesattelten Wangentreppen. Jede Stufe wird in unserer Werkstatt in Balge nach präzisem 3D-Aufmaß millimetergenau gefertigt.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0015_ergebnis.webp",
    features: [
      "Faltwerk-, Kragarm-, Bolzen- und Wangentreppen",
      "Geländerkombinationen mit Sicherheitsglas & Schwarzstahl",
      "Integrierte LED-Stufenbeleuchtung & Schattenfugen",
      "Höchste Trittsicherheit & normgerechte Statik"
    ],
    materials: ["Wildeiche", "Asteiche", "Nussbaum", "Esche", "Glas", "Edelstahl"],
    popular: true
  },
  {
    id: "parkett-boeden",
    title: "Parkett & Edle Fußbodenkultur",
    subtitle: "Natürliche Wärme und langlebige Eleganz unter Ihren Füßen",
    description: "Fachgerechtes Verlegen von Massivholzdielen, edlem Fischgrätparkett und modernen Schlossdielen. Zudem spezialisiert auf die staubarme Aufbereitung und Pflege alter Holzböden.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0017_ergebnis.webp",
    features: [
      "Verlegung von Landhausdielen & Fischgrätparkett",
      "Staubarmes Schleifen & Versiegeln bestehender Böden",
      "Biologische Naturöle & langlebige Hartwachsbeschichtung",
      "Perfekte farbliche Abstimmung zur Massivholztreppe"
    ],
    materials: ["Eiche Natur", "Räuchereiche", "Schlossdielen", "Naturöle"]
  },
  {
    id: "innentueren",
    title: "Maßgefertigte Innentüren",
    subtitle: "Flächenbündiges Design & historische Eleganz",
    description: "Verleihen Sie Ihrem Zuhause neuen Charakter. Ob raumhohe Designtüren mit verdeckten Bändern, Schiebeelemente aus Glas oder die stilvolle Nachbildung klassischer Altbautüren mit Kassettenprofilen.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0018_ergebnis.webp",
    features: [
      "Stumpf einschlagende Türen mit verdeckten Bändern",
      "Magnetschlösser für geräuschloses Schließen",
      "Individuelle Kassetten- und Altbautür-Reproduktionen",
      "Großflächige Glasschiebe-Elemente"
    ],
    materials: ["Echtholzfurnier", "Lack matt/glänzend", "Klarglas & Satinato", "Akustik-Dämmung"]
  },
  {
    id: "fenster-sonnenschutz",
    title: "Fenster, Haustüren & Sonnenschutz",
    subtitle: "Höchste Energieeffizienz, Sicherheit & Wohnkomfort",
    description: "Beratung und fachgerechter Einbau von hochwertigen Fenstern, einbruchhemmenden Haustüren sowie modernen Raffstores, Textilscreens und Plissees deutscher Markenhersteller.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0048-1_ergebnis.webp",
    features: [
      "Modernste Wärmeschutz- und Sicherheitsfenster",
      "Individuelle Massivholz- & Aluminium-Haustüren",
      "Elektrische Raffstores & windstabile Textilscreens",
      "Maßgefertigte Insektenschutzgitter für Fenster & Türen"
    ],
    materials: ["Holz-Alu", "Premium-Kunststoff", "Sicherheitsbeschläge RC2/RC3", "Somfy Smart-Home"]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Persönliche Beratung & Vor-Ort-Aufmaß",
    description: "Wir nehmen uns Zeit für Ihre Ideen, prüfen Raumgeometrie und Lichtverhältnisse vor Ort und ermitteln millimetergenaue Maße."
  },
  {
    step: "02",
    title: "Individuelle 3D-Planung & Holzauswahl",
    description: "Sie erleben Ihre Wunschtreppe vorab als fotorealistische 3D-Konstruktion und wählen echte Holzmuster und Oberflächen aus."
  },
  {
    step: "03",
    title: "Präzise Fertigung in unserer Meisterwerkstatt",
    description: "In Balge fertigen Tischlermeister und Gesellen jedes Bauteil mit modernster CNC-Technik und handwerklichem Feinschliff."
  },
  {
    step: "04",
    title: "Saubere & staubarme Meister-Montage",
    description: "Pünktlicher, passgenauer Einbau durch unser eigenes eingespieltes Team. Sauber, zuverlässig und schlüsselfertig."
  }
];

export const CAREER_BENEFITS = [
  { icon: "Clock", title: "Geregelte Arbeitszeiten", desc: "Freitags früher ins Wochenende & faire Überstundenregelung." },
  { icon: "Wrench", title: "Modernste Werkstattausstattung", desc: "CNC-Bearbeitung, ergonomische Hebehilfen & Premium-Werkzeug." },
  { icon: "Euro", title: "Überdurchschnittliche Vergütung", desc: "Leistungsgerechtes Gehalt, Urlaubs- & Weihnachtsgeld sowie Extras." },
  { icon: "Heart", title: "Echte Wertschätzung", desc: "Familiäres Miteinander in 4. Generation – keine anonyme Konzernnummer." },
  { icon: "GraduationCap", title: "Weiterbildung & Meisterförderung", desc: "Individuelle Schulungen zu CAD, CNC-Programmierung & Restauration." },
  { icon: "Coffee", title: "Kostenlose Getränke & Arbeitskleidung", desc: "Hochwertige Engelbert-Strauss-Montur und Kaffee for free." }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "tischler-geselle",
    title: "Tischler / Schreiner (m/w/d) für Treppenbau & Montage",
    type: "Vollzeit (unbefristet)",
    location: "Balge-Blenhorst & regionale Baustellen",
    tag: "Sofort verfügbar",
    description: "Du liebst anspruchsvolles Massivholzhandwerk und möchtest exklusive Treppen, Böden und Möbelprojekte mitgestalten? Dann bist du bei uns genau richtig!",
    tasks: [
      "Fertigung von individuellen Maßtreppen in unserer Werkstatt in Balge",
      "Montage von Treppenanlagen, Parkett und Innentüren beim Kunden vor Ort",
      "Bedienung moderner Holzbearbeitungsmaschinen und Handwerkzeuge",
      "Mitarbeit bei Restaurationen historischer Holztreppen"
    ],
    benefits: [
      "Attraktives Gehalt über Tarif + Sonderzahlungen",
      "Moderne Montagefahrzeuge mit erstklassiger Werkzeugausstattung",
      "Tolles, hilfsbereites Team mit echtem Zusammenhalt",
      "Unbefristeter Arbeitsvertrag mit Zukunftsperspektive"
    ]
  },
  {
    id: "ausbildung-tischler",
    title: "Ausbildung zum Tischler (m/w/d) – Start 2026/2027",
    type: "Ausbildung (3 Jahre)",
    location: "Balge-Blenhorst",
    tag: "Ausbildungsplatz",
    description: "Lerne das traditionelle Tischlerhandwerk von der Pike auf in einem der ältesten Meisterbetriebe der Region mit über 140 Jahren Erfahrung!",
    tasks: [
      "Erlernen aller Holzverbindungen, Säge- und Hobeltechniken",
      "Einblick in CNC-Planung, Treppenkonstruktion und Parkettverlegung",
      "Begleitung auf spannende Montageprojekte in modernen Eigenheimen",
      "Eigene Azubi-Projekte mit meisterhafter Betreuung"
    ],
    benefits: [
      "Faire Ausbildungsvergütung + Fahrtkostenzuschuss",
      "1:1 Betreuung durch erfahrene Meister und Gesellen",
      "Sehr hohe Übernahmechancen nach erfolgreichem Abschluss",
      "Kostenlose hochwertige Arbeitskleidung und Werkzeugset"
    ]
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Wie lange dauert die Fertigung einer individuellen Maßtreppe?",
    answer: "Ab finaler Freigabe der 3D-CAD-Planung und des Holzes beträgt die Fertigungszeit in unserer Werkstatt in der Regel ca. 4 bis 6 Wochen. Der eigentliche Einbau vor Ort dauert meist nur 1 bis 3 Tage, sodass Ihr Wohnalltag kaum beeinträchtigt wird."
  },
  {
    question: "Kann eine stark knarrende alte Treppe wirklich geräuschfrei gemacht werden?",
    answer: "Ja! Durch unsere meisterhafte Sanierungstechnik lokalisieren wir die genauen Reibungspunkte zwischen Stufen, Setzstufen und Wangen. Mit gezielter Keilung, Nachverschraubung von unten und elastischer Fugenversiegelung beseitigen wir das Knarren dauerhaft."
  },
  {
    question: "Ist das Schleifen von Parkett und Treppen wirklich staubarm?",
    answer: "Ja, wir setzen auf modernste Schleifmaschinen mit hocheffizienten HEPA-Industrie-Absauganlagen der Staubklasse M. Dadurch wird die Staubbelastung im Wohnraum um über 95% gegenüber herkömmlichen Methoden reduziert."
  },
  {
    question: "In welchem Umkreis ist die Tischlerei Schlemermeyer tätig?",
    answer: "Unser Kerngebiet erstreckt sich von Balge und Nienburg/Weser über die gesamte Region Hannover, Bremen, Verden (Aller), Diepholz, Syke, Hoya bis ins Weserbergland. Für besondere Groß- und Architekturprojekte sind wir auch überregional im Einsatz."
  },
  {
    question: "Wie läuft die erste Kontaktaufnahme und Beratung ab?",
    answer: "Völlig unkompliziert und unverbindlich. Nutzen Sie unseren 3-Schritte-Projektassistenten oder rufen Sie uns direkt an (05022 / 633). Wir vereinbaren einen Termin für ein kostenloses Vor-Ort-Aufmaß und erstellen Ihnen ein transparentes Festpreis-Angebot."
  }
];
