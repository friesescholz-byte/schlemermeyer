import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Phone,
  DoorOpen
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ServicesSectionProps {
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

// 1. Treppen: Präzise architektonische Treppenstufen
const StairIcon: React.FC<{ size?: number; className?: string }> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 19h4v-4h4v-4h4V7h4" />
    <path d="M4 19v-4" opacity="0.35" />
  </svg>
);

// 2. Fußböden: Klassisches versetztes Parkett / Landhausdielen
const FlooringIcon: React.FC<{ size?: number; className?: string }> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
    <path d="M9 3v6" />
    <path d="M15 9v6" />
    <path d="M8 15v6" />
  </svg>
);

// 3. Innentüren: Lucide DoorOpen
const DoorIcon = DoorOpen;

// 4. Sicht- & Sonnenschutz: Sonnenschutz-Lamellen mit Sonne
const ShadingIcon: React.FC<{ size?: number; className?: string }> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6 16h12" />
    <path d="M6 19h12" />
  </svg>
);

// 5. Insektenschutz: Schutzschild mit feinem Schutzgitter
const InsectScreenIcon: React.FC<{ size?: number; className?: string }> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M8 9h8" />
    <path d="M8 13h8" />
    <path d="M10 7v8" />
    <path d="M14 7v8" />
  </svg>
);

// 6. Fenster / Türen: Klassisches 4-Felder-Präzisionsfenster
const WindowDoorIcon: React.FC<{ size?: number; className?: string }> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 3v18" />
    <path d="M3 12h18" />
  </svg>
);

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadFunnel }) => {
  const mainServices: ServiceCardData[] = [
    {
      id: 'treppen',
      title: 'Treppen',
      icon: StairIcon,
      description: 'Planung, Herstellung und Montage exklusiver Treppen. Gestalten Sie mit uns Ihre ganz individuelle Wunschtreppe für einen starken Auftritt.'
    },
    {
      id: 'fussboeden',
      title: 'Fußböden',
      icon: FlooringIcon,
      description: 'Fachgerechtes Verlegen hochwertiger Fußbodenbeläge. Alte Fußböden durch Aufbereitung in neuem Glanz erstrahlen lassen.'
    },
    {
      id: 'innentueren',
      title: 'Innentüren',
      icon: DoorIcon,
      description: 'Verleihen Sie Ihrem zu Hause neuen Charme mit individuellen Innentüren. Von der Aufbereitung alter Türen bishin zur Maßanfertigung.'
    },
    {
      id: 'sonnenschutz',
      title: 'Sicht- / Sonnenschutz',
      icon: ShadingIcon,
      description: 'Beratung und fachgerechter Einbau von Sicht- und Sonnenschutz. Zusammenarbeit mit ausgewählten Herstellern - Rolladen, Raffstores, Textilscreens & Plissees.'
    },
    {
      id: 'insektenschutz',
      title: 'Insektenschutz',
      icon: InsectScreenIcon,
      description: 'Beratung und fachgerechter Einbau von Insektenschutzgittern. Zusammenarbeit mit ausgewähltem Hersteller.'
    },
    {
      id: 'fenster-tueren',
      title: 'Fenster / Türen',
      icon: WindowDoorIcon,
      description: 'Beratung und fachgerechter Einbau von Fenstern und Türen. Zusammen mit ausgewähltem Hersteller. Markenprofil hergestellt in Deutschland.'
    }
  ];

  return (
    <section className="section-wrapper white" id="leistungen">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="badge-pill amber">
            <Sparkles size={14} />
            <span>Unsere Leistungen • Meisterwerkstatt Balge</span>
          </div>
          <h2>
            Handwerkliche Vielfalt. <br />
            <span className="wood-highlight-text">
              Meisterhafte Ausführung.
            </span>
          </h2>
          <p>
            Von exklusiven Maßtreppen und edlen Holzböden bis zu maßgefertigten Innentüren, 
            modernen Fenstern sowie Sicht-, Sonnen- und Insektenschutz – alles verlässlich aus einer Meisterhand.
          </p>
        </div>

        {/* 6 CORE SERVICES GRID (CLEAN ICON CARDS MIT HOVER EFFECT) */}
        <div className="services-icon-cards-grid">
          {mainServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className="service-icon-card"
                onClick={() => onOpenLeadFunnel(service.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onOpenLeadFunnel(service.title);
                  }
                }}
              >
                {/* ICON BOX WITH COOL MOUSEOVER */}
                <div className="service-icon-box">
                  <IconComponent size={28} className="service-icon-svg" />
                </div>

                {/* CONTENT */}
                <h3 className="service-icon-card-title">
                  {service.title}
                </h3>
                <p className="service-icon-card-desc">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 7TH SERVICE: INDIVIDUELLE GESTALTUNGSWÜNSCHE (FEATURED LUXURY BANNER) */}
        <div className="service-custom-luxury-card">
          <div className="service-custom-inner">
            
            <div className="service-custom-text">
              <div className="badge-pill amber" style={{ marginBottom: '12px' }}>
                <Sparkles size={13} />
                <span>Individuelle Maßanfertigung</span>
              </div>
              <h3 className="service-custom-title">
                Individuelle Gestaltungswünsche
              </h3>
              <p className="service-custom-desc">
                Gerne planen wir mit Ihnen die Umsetzung Ihrer persönlichen Wünsche! 
                Zögern Sie nicht, uns unverbindlich zu kontaktieren – wir beraten Sie direkt vor Ort oder in unserer Werkstatt in Balge.
              </p>
            </div>

            <div className="service-custom-actions">
              <a 
                href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 22px', fontSize: '0.94rem' }}
              >
                <Phone size={16} color="#C96A00" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>

              <button
                onClick={() => onOpenLeadFunnel('Individuelle Gestaltungswünsche')}
                className="btn-primary"
                style={{ padding: '14px 26px', fontSize: '0.95rem' }}
              >
                <span>Wunschprojekt anfragen</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
