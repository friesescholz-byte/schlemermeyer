import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface PasProps {
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

interface LuxuryPillar {
  id: string;
  title: string;
  problemText: string;
  solutionText: string;
  problemImage: string;
  problemImageAlt: string;
  solutionImage: string;
  solutionImageAlt: string;
}

export const ProblemAgitateSolve: React.FC<PasProps> = ({ onOpenLeadFunnel }) => {
  // 1. Das Farb- & Holzchaos (Ganz oben)
  // 2. Knarrende Stufen & Staub-Angst (Mitte)
  // 3. Die klapprige Katalogtreppe (Unten)
  const pillars: LuxuryPillar[] = [
    {
      id: 'harmonie',
      title: 'Das Farb- & Holzchaos',
      problemText: 'Treppe, Parkett und Türen von drei verschiedenen Händlern – am Ende beißt sich jeder Holzfarbton.',
      solutionText: 'Stufen, Schlossdielen und Innentüren aus identischen Holzchargen perfekt aufeinander abgestimmt.',
      problemImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Unpassende%20Holzarten_ergebnis.webp',
      problemImageAlt: 'Nicht zusammenpassende Holzarten und Farbtöne',
      solutionImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Abgestimmte-Holz-T%C3%B6ne_ergebnis.webp',
      solutionImageAlt: 'Perfekt aufeinander abgestimmte Holztöne und Parkett'
    },
    {
      id: 'altbau',
      title: 'Knarrende Stufen & Staub-Angst',
      problemText: 'Alte Stufen sind ausgetreten und laut – doch Sie scheuen den Schmutz und die Kosten eines Abrisses.',
      solutionText: '99,9% staubarmes Schleifen mit HEPA-Absaugung und Nachkeilung gegen störende Knarrgeräusche.',
      problemImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Bauschutt-und-staub_ergebnis.webp',
      problemImageAlt: 'Staub und Bauschutt bei unprofessioneller Sanierung',
      solutionImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Aufger%C3%A4umte_Baustelle_ergebnis.webp',
      solutionImageAlt: 'Saubere, aufgeräumte Meister-Restauration'
    },
    {
      id: 'neubau',
      title: 'Die klapprige Katalogtreppe',
      problemText: 'Dünne Standardtreppe vom Bauträger knarrt bei jedem Schritt und entwertet das gesamte Traumhaus.',
      solutionText: 'Bis zu 60 mm massive Eiche nach CAD-Planung – dauerhaft verzugsfrei und garantiert knarrfrei gefertigt.',
      problemImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Standarttreppe_ergebnis.webp',
      problemImageAlt: 'Minderwertige Standardtreppe mit Mängeln',
      solutionImage: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Designer_Treppe_ergebnis.webp',
      solutionImageAlt: 'Exklusive Schlemermeyer Design-Massivholztreppe'
    }
  ];

  return (
    <section className="section-wrapper alt" id="vorteile">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="badge-pill amber">
            <ShieldCheck size={14} />
            <span>Warum Schlemermeyer • Meistervorteile</span>
          </div>
          <h2>
            Typische Probleme vermeiden. <br />
            <span className="wood-highlight-text">
              Meisterhaft gelöst.
            </span>
          </h2>
          <p>
            Ob Neubau, anspruchsvolle Altbau-Restauration oder nahtlose Gewerke-Harmonie: 
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
                <h3 className="pas-compare-main-title">
                  {pillar.title}
                </h3>

                {/* 2-SPALTEN GRID: PROBLEM LINKS VS. LÖSUNG RECHTS */}
                <div className="pas-compare-columns-grid">
                  
                  {/* LINKE SPALTE: DAS PROBLEM (TEXT OBEN + BILD UNTEN) */}
                  <div className="pas-side-col problem-side">
                    <div className="pas-problem-box">
                      <div className="pas-box-header problem">
                        <AlertTriangle size={15} color="#DC2626" />
                        <span>Das typische Problem:</span>
                      </div>
                      <p className="pas-box-text">
                        {pillar.problemText}
                      </p>
                    </div>

                    <div className="pas-side-img-frame problem">
                      <img
                        src={pillar.problemImage}
                        alt={pillar.problemImageAlt}
                        className="pas-side-img"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* RECHTE SPALTE: DIE SCHLEMERMEYER-LÖSUNG (TEXT OBEN + BILD UNTEN) */}
                  <div className="pas-side-col solution-side">
                    <div className="pas-solution-box">
                      <div className="pas-box-header solution">
                        <CheckCircle2 size={15} color="#16A34A" />
                        <span>Die Schlemermeyer-Lösung:</span>
                      </div>
                      <p className="pas-box-text">
                        {pillar.solutionText}
                      </p>
                    </div>

                    <div className="pas-side-img-frame solution">
                      <img
                        src={pillar.solutionImage}
                        alt={pillar.solutionImageAlt}
                        className="pas-side-img"
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
