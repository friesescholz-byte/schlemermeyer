import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  AlertTriangle,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface PasProps {
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

interface LuxuryPillar {
  id: string;
  number: string;
  category: string;
  title: string;
  
  // Problem
  problemLabel: string;
  problemHeadline: string;
  problemText: string;
  problemTakeaway: string;
  problemImage: string;
  problemImageAlt: string;
  
  // Solution
  solutionLabel: string;
  solutionHeadline: string;
  solutionText: string;
  solutionTakeaway: string;
  solutionImage: string;
  solutionImageAlt: string;
}

export const ProblemAgitateSolve: React.FC<PasProps> = ({ onOpenLeadFunnel }) => {
  const pillars: LuxuryPillar[] = [
    {
      id: 'harmonie',
      number: '01',
      category: 'Innenausbau & Parkett',
      title: 'Das Farb- & Holzchaos',
      problemLabel: 'Typische Realität am Markt',
      problemHeadline: 'Zusammengewürfelte Holzarten & Farbtöne',
      problemText: 'Treppe, Parkett und Innentüren stammen häufig von drei unterschiedlichen Händlern. Am Ende beißt sich jeder Holzfarbton, Maserungen harmonieren nicht und das Gesamtbild des Wohnbereichs wirkt unruhig.',
      problemTakeaway: '✕ Kein durchgängiges Farb- & Raumkonzept',
      problemImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Unpassende%20Holzarten_ergebnis.webp',
      problemImageAlt: 'Nicht zusammenpassende Holzarten und Farbtöne',
      solutionLabel: 'Der Schlemermeyer-Standard',
      solutionHeadline: '100% Farb- & Materialharmonie aus einem Guss',
      solutionText: 'Stufen, Schlossdielen und Innentüren werden aus identischen Holzchargen in unserer Meisterwerkstatt gefertigt und exakt aufeinander gebeizt und geölt – für ein ruhiges, luxuriöses Wohnambiente ohne Stilbrüche.',
      solutionTakeaway: '✓ Eigene Fertigung & chargengleiche Veredelung',
      solutionImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Abgestimmte-Holz-T%C3%B6ne_ergebnis.webp',
      solutionImageAlt: 'Perfekt aufeinander abgestimmte Holztöne und Parkett'
    },
    {
      id: 'zimmerei-dach',
      number: '02',
      category: 'Zimmerei & Dachdeckerei',
      title: 'Undichte Dächer & minderwertige Zimmerei',
      problemLabel: 'Risiko bei Schnittstellen-Problemen',
      problemHeadline: 'Mangelhafte Anschlüsse & feuchte Dämmschichten',
      problemText: 'Wenn Zimmerei und Dachdeckerei nicht Hand in Hand arbeiten, drohen unsauber verklebte Dampfbremsen, fehlerhafte Anschlüsse und billiges Bauholz. Feuchtigkeitsschäden und hohe Wärmeverluste sind die Folge.',
      problemTakeaway: '✕ Versteckte Bauschäden & steigende Heizkosten',
      problemImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/schlechte-Dachdecker_ergebnis.webp',
      problemImageAlt: 'Minderwertige Dacharbeiten und undichte Dächer',
      solutionLabel: 'Der Schlemermeyer-Standard',
      solutionHeadline: 'Zimmerei & Dacheindeckung aus einer Meisterhand',
      solutionText: 'Vom zimmermannsmäßigen Dachabbund bis zur sturmsicheren Dacheindeckung und lückenlosen GEG-Wärmedämmung: Alle Schritte greifen nahtlos ineinander – ohne Schnittstellenverlust, mit voller Meistergarantie.',
      solutionTakeaway: '✓ Geprüfte Statik & lückenlose Luftdichtheit',
      solutionImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/schlemermeyer-Dachdecker_ergebnis.webp',
      solutionImageAlt: 'Meisterhafte Schlemermeyer Dachdecker- und Dachsanierungsarbeiten'
    },
    {
      id: 'neubau',
      number: '03',
      category: 'Massivholz-Treppenbau',
      title: 'Die klapprige Katalogtreppe',
      problemLabel: 'Industrielle Standard-Massenware',
      problemHeadline: 'Dünne Standardstufen knarren bei jedem Schritt',
      problemText: 'Dünne 30–40 mm Standardtreppen vom Bauträger sparen an Substanz und Verankerung. Schon nach kurzer Zeit lockern sich die Fugen im Holz – störendes Knarren und Nachfedern entwerten das gesamte Traumhaus.',
      problemTakeaway: '✕ Dünne Standardstufen & störende Trittgeräusche',
      problemImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Standarttreppe_ergebnis.webp',
      problemImageAlt: 'Minderwertige Standardtreppe mit Mängeln',
      solutionLabel: 'Der Schlemermeyer-Standard',
      solutionHeadline: 'Bis zu 60 mm massive Eiche – dauerhaft knarrfrei',
      solutionText: 'Individuelle CAD-Planung mit bis zu 60 mm massiver Eiche, formstabiler Verleimung und spezieller akustischer Entkopplung. In unserer Balger Werkstatt gefertigt für dauerhafte Ruhe und Generationenwert.',
      solutionTakeaway: '✓ Bis zu 60 mm Massivholz & Flüstermontage',
      solutionImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Designer_Treppe_ergebnis.webp',
      solutionImageAlt: 'Exklusive Schlemermeyer Design-Massivholztreppe'
    }
  ];

  return (
    <section className="section-wrapper pas-section-fixed-bg" id="vorteile">
      {/* 1. FESTSTEHENDES ATELIER-HINTERGRUNDBILD (PARALLAX / FIXED) */}
      <div className="pas-fixed-backdrop" aria-hidden="true" />
      <div className="pas-backdrop-wash" aria-hidden="true" />

      {/* 2. EDLE ÜBERGÄNGE NACH OBEN (ZU DEN VORHERIGEN ABSCHNITTEN) */}
      <div className="pas-transition-top" aria-hidden="true">
        <div className="pas-transition-hairline top" />
      </div>

      {/* 3. EDLE ÜBERGÄNGE NACH UNTEN (ZU DEN NACHFOLGENDEN ABSCHNITTEN) */}
      <div className="pas-transition-bottom" aria-hidden="true">
        <div className="pas-transition-hairline bottom" />
      </div>

      <div className="container-custom pas-content-relative">
        
        {/* SECTION HEADER (EYEBROW ENTFERNT) */}
        <div className="section-header">
          <h2>
            Typische Probleme vermeiden. <br />
            <span className="wood-highlight-text">
              Meisterhaft gelöst.
            </span>
          </h2>
          <p>
            Ob Neubau, Dachstuhl &amp; Dacheindeckung oder nahtloser Innenausbau: 
            Erfahren Sie auf einen Blick, warum anspruchsvolle Bauherren auf unsere Meisterwerkstatt vertrauen.
          </p>
        </div>

        {/* 3 MEISTER-STORIES (SIDE-BY-SIDE GEGENÜBERSTELLUNG: PROBLEM LINKS vs. LÖSUNG RECHTS) */}
        <div className="pas-compare-stories-list">
          {pillars.map((pillar) => {
            return (
              <div 
                key={pillar.id}
                className="pas-compare-story-block"
              >
                {/* THEMEN-ÜBERSCHRIFT */}
                <div className="pas-story-header">
                  <h3 className="pas-compare-main-title">{pillar.title}</h3>
                </div>

                {/* 2-SPALTEN GRID: EDITORIAL CARDS */}
                <div className="pas-compare-columns-grid">
                  
                  {/* LINKE SPALTE: DAS PROBLEM */}
                  <div className="pas-editorial-card problem-card">
                    <div className="pas-card-content">
                      <div className="pas-card-eyebrow problem">
                        <span className="pas-indicator-dot problem" />
                        <span>{pillar.problemLabel}</span>
                      </div>
                      <h4 className="pas-card-headline problem">
                        {pillar.problemHeadline}
                      </h4>
                      <p className="pas-card-desc">
                        {pillar.problemText}
                      </p>
                      <div className="pas-takeaway-badge problem">
                        <span>{pillar.problemTakeaway}</span>
                      </div>
                    </div>

                    <div className="pas-card-media-wrapper">
                      <img
                        src={pillar.problemImage}
                        alt={pillar.problemImageAlt}
                        className="pas-card-img"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* RECHTE SPALTE: DIE SCHLEMERMEYER-LÖSUNG */}
                  <div className="pas-editorial-card solution-card">
                    <div className="pas-card-content">
                      <div className="pas-card-eyebrow solution">
                        <Sparkles size={13} />
                        <span>{pillar.solutionLabel}</span>
                      </div>
                      <h4 className="pas-card-headline solution">
                        {pillar.solutionHeadline}
                      </h4>
                      <p className="pas-card-desc">
                        {pillar.solutionText}
                      </p>
                      <div className="pas-takeaway-badge solution">
                        <span>{pillar.solutionTakeaway}</span>
                      </div>
                    </div>

                    <div className="pas-card-media-wrapper">
                      <img
                        src={pillar.solutionImage}
                        alt={pillar.solutionImageAlt}
                        className="pas-card-img"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* BOTTOM CALLOUT CARD */}
        <div className="pas-bottom-luxury-card">
          <div className="pas-luxury-card-inner">
            <div className="pas-luxury-text">
              <div className="badge-pill amber" style={{ marginBottom: '10px' }}>
                <Sparkles size={13} />
                <span>Persönliche Beratung in Balge & vor Ort</span>
              </div>
              <h3 className="pas-luxury-title">
                Sie planen einen Neubau oder eine anspruchsvolle Sanierung?
              </h3>
              <p className="pas-luxury-desc">
                Wir beraten Sie gerne direkt vor Ort bei Ihnen oder in unserer Meisterwerkstatt in Balge.
              </p>
            </div>

            <div className="pas-luxury-cta-group">
              <a 
                href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 22px', fontSize: '0.94rem' }}
              >
                <Phone size={16} color="#C96A00" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>

              <button
                onClick={() => onOpenLeadFunnel()}
                className="btn-primary"
                style={{ padding: '14px 28px', fontSize: '0.96rem' }}
              >
                <span>Kostenloses Vor-Ort-Aufmaß anfragen</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
