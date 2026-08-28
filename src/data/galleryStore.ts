export interface GalleryItem {
  id: string;
  title: string;
  category: 'innenausbau' | 'zimmerei' | 'dachdeckerei';
  categoryLabel: string;
  image: string;
  description: string;
  woodType?: string;
  createdAt?: string;
}

export const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-faltwerktreppe",
    title: "Moderne Faltwerk- & Kragarmtreppe",
    category: "innenausbau",
    categoryLabel: "Innenausbau & Tischlerei",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0086_ergebnis.webp",
    description: "Schwebende Kragarm-Treppenkonstruktion mit massiven Eichenstufen und integrierter Wandbeleuchtung.",
    woodType: "Massive Eichen-Trittstufen"
  },
  {
    id: "g-holzbau-dachstuhl",
    title: "Traditioneller Dachstuhl & Holzabbund",
    category: "zimmerei",
    categoryLabel: "Zimmerei & Holzbau",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/drive/12_ergebnis.webp",
    description: "Präzise abgebundener Dachstuhl mit zimmermannsmäßigen Holzverbindungen für höchste statische Sicherheit.",
    woodType: "Fichten- & Tannen-Bauholz"
  },
  {
    id: "g-dach-steildach",
    title: "Steildacheindeckung & Dachsanierung",
    category: "dachdeckerei",
    categoryLabel: "Dachdeckerei & Dachsanierung",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/schlemermeyer-Dachdecker_ergebnis.webp",
    description: "Fachgerechte Neueindeckung mit hochwertigen Tondachziegeln, sturmsicherer Verklammerung und Firstentlüftung.",
    woodType: "Tondachziegel & GEG-Dämmung"
  },
  {
    id: "g-massivholzdielen",
    title: "Massivholz-Landhausdielen & Parkett",
    category: "innenausbau",
    categoryLabel: "Innenausbau & Tischlerei",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0163-1-scaled_ergebnis.webp",
    description: "Großformatige, edel gebürstete und naturgeölte Massivholzdielen mit samtiger Haptik und sichtbarer Maserung.",
    woodType: "Wildeiche gebürstet & geölt"
  },
  {
    id: "g-hrb-wandelemente",
    title: "Ökologischer Holzrahmenbau & Wandelemente",
    category: "zimmerei",
    categoryLabel: "Zimmerei & Holzbau",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/drive/HRB%20IV_ergebnis.webp",
    description: "Präzise Vorfertigung und millimetergenaue Kranmontage von hochgedämmten Holzrahmenbau-Wandelementen.",
    woodType: "Konstruktionsvollholz (KVH)"
  },
  {
    id: "g-dach-flachdach",
    title: "Flachdachabdichtung & Gaubenverkleidung",
    category: "dachdeckerei",
    categoryLabel: "Dachdeckerei & Dachsanierung",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/drive/image007_ergebnis.webp",
    description: "Langlebige Flachdach- und Gaubenabdichtung mit mehrlagigen Bitumenbahnen und Gefälledämmung gegen stehendes Wasser.",
    woodType: "Bitumen- & Folienabdichtung"
  },
  {
    id: "g-raeuchereiche-wange",
    title: "Wangentreppe in edler Räuchereiche-Optik",
    category: "innenausbau",
    categoryLabel: "Innenausbau & Tischlerei",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/drive/IMG_2558_ergebnis.webp",
    description: "Geradläufige Wangentreppe mit dunkel gebeizten Stufen und filigranen Edelstahl-Geländerstäben.",
    woodType: "Eiche dunkel gebeizt & Edelstahl"
  },
  {
    id: "g-hrb-wohnhaus",
    title: "Holzrahmenbau-Wohnhaus mit Pultdach",
    category: "zimmerei",
    categoryLabel: "Zimmerei & Holzbau",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/drive/HRB%20III_ergebnis.webp",
    description: "Nachhaltiger Holzrahmenbau mit handwerklich aufgerichtetem Dachstuhl und diffusionsoffener Dämmebene.",
    woodType: "Konstruktionsvollholz & BSH"
  },
  {
    id: "g-mosaikparkett",
    title: "Mosaik- & Würfelparkett Verlegung",
    category: "innenausbau",
    categoryLabel: "Innenausbau & Tischlerei",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0048-1_ergebnis.webp",
    description: "Klassisches Massivholz-Würfelparkett für langlebige, hoch beanspruchbare Wohnräume mit lebendiger Struktur.",
    woodType: "Eiche Mosaikparkett"
  },
  {
    id: "g-galerie-treppe",
    title: "Eichen-Wangentreppe mit Galeriegeländer",
    category: "innenausbau",
    categoryLabel: "Innenausbau & Tischlerei",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/drive/14_ergebnis.webp",
    description: "Massive Eichenstufen und Handläufe harmonisch kombiniert mit durchgehenden Edelstahlstäben bis zur Galerie.",
    woodType: "Eiche massiv & Edelstahl"
  },
  {
    id: "g-hrb-anbau",
    title: "Holzrahmenbau-Anbau mit Kranmontage",
    category: "zimmerei",
    categoryLabel: "Zimmerei & Holzbau",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/drive/17_ergebnis.webp",
    description: "Wohnhaus-Erweiterung durch vorgefertigte Holzrahmen-Elemente mit optimaler Wärmedämmung.",
    woodType: "Holzrahmenbau & KVH"
  },
  {
    id: "g-altholz-werkstatt",
    title: "Meisterwerkstatt & Hobelbank-Bereich",
    category: "innenausbau",
    categoryLabel: "Innenausbau & Tischlerei",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0050_ergebnis.webp",
    description: "Blick in unsere traditionelle Werkstatt in Balge: Echte Handwerksarbeit an Hobelbänken und Präzisionsmaschinen seit 1883.",
    woodType: "100% Eigene Werkstatt Balge"
  }
];

const STORAGE_KEY = 'schlemermeyer_gallery_items_v2';

export const getStoredGalleryItems = (): GalleryItem[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading gallery items from localStorage:', e);
  }
  return INITIAL_GALLERY_ITEMS;
};

export const saveStoredGalleryItems = (items: GalleryItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('schlemermeyer_gallery_updated'));
  } catch (e) {
    console.error('Error saving gallery items to localStorage:', e);
  }
};

export const resetStoredGalleryItems = (): GalleryItem[] => {
  saveStoredGalleryItems(INITIAL_GALLERY_ITEMS);
  return INITIAL_GALLERY_ITEMS;
};
