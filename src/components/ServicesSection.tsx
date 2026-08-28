import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ServicesSectionProps {
  onNavigateToService: (servicePage: 'service-innenausbau' | 'service-zimmerei' | 'service-dachdeckerei') => void;
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

// 1. Innenausbau: Feine Treppenstufen & Raumarchitektur
const InnenausbauIcon: React.FC<{ size?: number; className?: string }> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 20h18" />
    <path d="M4 16h4v-4h4V8h4V4h4" />
    <path d="M4 20v-4" />
  </svg>
);

// 2. Zimmerei: Authentisches Dachstuhl-Holzstrebwerk (Dachabbund / Kehlbalkenbinder)
const ZimmereiTrussIcon: React.FC<{ size?: number; className?: string }> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20h20" />
    <path d="M12 3L2 20" />
    <path d="M12 3l10 20" />
    <path d="M6 14h12" />
    <path d="M12 3v17" />
  </svg>
);

// 3. Dachdeckerei: Schützendes Dach mit Ziegelschichten
const DachdeckereiIcon: React.FC<{ size?: number; className?: string }> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 10L12 2l10 8" />
    <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
    <path d="M7 10h10" />
    <path d="M6 14h12" />
    <path d="M7 18h10" />
  </svg>
);

interface MainServicePillar {
  id: 'service-innenausbau' | 'service-zimmerei' | 'service-dachdeckerei';
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onNavigateToService, 
  onOpenLeadFunnel 
}) => {
  const pillars: MainServicePillar[] = [
    {
      id: 'service-innenausbau',
      title: 'Innenausbau & Tischlerei',
      tagline: 'Maßgefertigte Holz- & Raumkultur',
      description: 'Von exklusiven Maßtreppen und barfußfreundlichem Parkett bis zu individuellen Innentüren, Fenstern, Sonnen- und Insektenschutz – harmonisch abgestimmt aus Meisterhand.',
      image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Abgestimmte-Holz-T%C3%B6ne_ergebnis.webp',
      imageAlt: 'Innenausbau, Treppenbau und edle Böden von Schlemermeyer',
      icon: InnenausbauIcon
    },
    {
      id: 'service-zimmerei',
      title: 'Zimmerei & Holzbau',
      tagline: 'Solide Zimmermannskunst',
      description: 'Präziser Holzabbund und zimmermannsmäßige Konstruktionen für Neubau, Umbau und denkmalgeschützte Sanierung – langlebig, statisch sicher und formvollendet.',
      image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/drive/HRB%20IV_ergebnis.webp',
      imageAlt: 'Zimmerei, Dachstühle und Holzrahmenbau von Schlemermeyer',
      icon: ZimmereiTrussIcon
    },
    {
      id: 'service-dachdeckerei',
      title: 'Dachdeckerei & Dachsanierung',
      tagline: 'Dauerhafter Schutz von oben',
      description: 'Fachgerechte Eindeckungen mit Tondachziegeln, Flachdachabdichtungen, energetische Dachsanierung nach GEG sowie Dachfenster und Klempnerarbeiten.',
      image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/schlemermeyer-Dachdecker_ergebnis.webp',
      imageAlt: 'Dachdeckerei und energetische Dachsanierung von Schlemermeyer',
      icon: DachdeckereiIcon
    }
  ];

  return (
    <section className="section-wrapper white" id="leistungen">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="badge-pill amber">
            <Sparkles size={14} />
            <span>Unsere 3 Kernbereiche • Meisterbetrieb seit 1883</span>
          </div>
          <h2>
            Handwerkliche Vielfalt. <br />
            <span className="wood-highlight-text">
              Meisterhafte Ausführung.
            </span>
          </h2>
          <p>
            Vom Dachstuhl über die Dacheindeckung bis zum kompletten schlüsselfertigen Innenausbau: 
            Wählen Sie Ihren Bereich und entdecken Sie alle Leistungen im Detail.
          </p>
        </div>

        {/* 3 HAUPT-LEISTUNGSKACHELN (ATMOSPHERIC IMMERSIVE CARDS) */}
        <div className="immersive-pillars-grid">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="immersive-pillar-card"
                onClick={() => onNavigateToService(pillar.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onNavigateToService(pillar.id);
                  }
                }}
              >
                {/* BACKGROUND IMAGE WITH SMOOTH OVERLAY BLEND */}
                <div className="immersive-card-bg-wrap">
                  <img 
                    src={pillar.image} 
                    alt={pillar.imageAlt} 
                    className="immersive-card-img"
                    loading="lazy"
                  />
                  <div className="immersive-card-gradient-overlay" />
                </div>

                {/* CONTENT LAYER */}
                <div className="immersive-card-content">
                  
                  {/* TOP BADGE */}
                  <div className="immersive-card-top">
                    <div className="immersive-icon-box">
                      <IconComp size={22} />
                    </div>
                    <span className="immersive-tagline">{pillar.tagline}</span>
                  </div>

                  {/* BOTTOM INFO */}
                  <div className="immersive-card-bottom">
                    <h3 className="immersive-title">{pillar.title}</h3>
                    <p className="immersive-desc">{pillar.description}</p>
                    
                    <div className="immersive-btn-row">
                      <span className="immersive-action-link">
                        <span>Leistungen im Detail ansehen</span>
                        <ArrowRight size={16} className="immersive-arrow-icon" />
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* BOTTOM MEISTER HINWEIS BANNER (GROßZÜGIGES SPACING) */}
        <div className="service-custom-luxury-card" style={{ marginTop: '44px' }}>
          <div className="service-custom-inner">
            <div className="service-custom-text">
              <div className="badge-pill amber" style={{ marginBottom: '12px' }}>
                <ShieldCheck size={14} />
                <span>Alles aus einer Meisterhand</span>
              </div>
              <h3 className="service-custom-title">
                Ganzheitliche Bauprojekte ohne Schnittstellen-Chaos
              </h3>
              <p className="service-custom-desc">
                Zimmerei, Dachdeckerei und Innenausbau greifen bei uns perfekt ineinander. 
                1 Ansprechpartner für Ihr gesamtes Bauvorhaben – mit Festpreis- und Termingarantie.
              </p>
            </div>

            <div className="service-custom-actions">
              <a 
                href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
                className="btn-secondary"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '10px', 
                  padding: '16px 26px', 
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap'
                }}
              >
                <Phone size={17} color="#C96A00" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>

              <button
                onClick={() => onOpenLeadFunnel('Komplett-Projekt')}
                className="btn-primary"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '16px 30px', 
                  fontSize: '0.96rem',
                  fontWeight: 800,
                  whiteSpace: 'nowrap'
                }}
              >
                <span>Gesamtprojekt anfragen</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
