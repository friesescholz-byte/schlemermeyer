import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Phone, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { SubpageGallerySlider } from './SubpageGallerySlider';

interface SubpageProps {
  onNavigate: (page: 'home' | 'about' | 'jobs' | 'service-innenausbau' | 'service-zimmerei' | 'service-dachdeckerei', sectionId?: string) => void;
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

export const ServiceInnenausbauPage: React.FC<SubpageProps> = ({ onNavigate, onOpenLeadFunnel }) => {
  const disciplines = [
    {
      title: 'Treppenbau nach Maß',
      desc: 'Planung, Fertigung und Montage knarrfreier Unikate – von schwebenden Kragarm- und Faltwerktreppen bis zu klassischen Wangentreppen.',
      highlights: ['Faltwerk- & Kragarmtreppen', 'Glas- & Schwarzstahlgeländer', '100% eigene Fertigung in Balge']
    },
    {
      title: 'Fußböden & Parkett',
      desc: 'Fachgerechtes Verlegen und staubarmes Aufbereiten edler Landhausdielen, Fischgrät- und Massivholzböden mit samtiger Haptik.',
      highlights: ['Landhausdielen & Fischgrät', 'Staubarmes Schleifen', 'Farbabstimmung zur Treppe']
    },
    {
      title: 'Innentüren nach Maß',
      desc: 'Flächenbündige Designtüren, stilgerechte Altbautüren, Glasschiebeelemente und geräuschlose Magnetschlösser.',
      highlights: ['Verdeckte Bänder & stumpf einschlagend', 'Historische Türen-Aufbereitung', 'Schall- & Wärmeschutz']
    },
    {
      title: 'Fenster & Haustüren',
      desc: 'Energieeffiziente Fenster und sichere Haustüren deutscher Qualitätshersteller nach aktuellem Gebäudeenergiegesetz (GEG).',
      highlights: ['Höchste Wärmedämmung & Einbruchschutz', 'Passgenauer Meistereinbau', 'Große Material- & Farbvielfalt']
    },
    {
      title: 'Sonnenschutz & Screens',
      desc: 'Witterungsbeständige Rollladen, moderne Außenraffstores, windstabile Textilscreens und smarte elektrische Steuerungen.',
      highlights: ['Smarte Funksteuerungen', 'Effektiver Hitzeschutz', 'Maßgefertigte Plissees & Screens']
    },
    {
      title: 'Insektenschutzgitter',
      desc: 'Millimetergenaue, fast unsichtbare Spann- und Drehrahmen sowie Schiebeanlagen für dauerhaft insektenfreie Wohnräume.',
      highlights: ['Reißfestes Transpatec-Gewebe', 'Stabile Aluminiumprofile', 'Passgenau für jedes Fenster']
    }
  ];

  return (
    <div className="subpage-wrapper">
      
      {/* 1. HERO HEADER WITH FIXED BACKGROUND */}
      <section className="subpage-hero-stage">
        <div className="subpage-hero-fixed-bg innenausbau" />
        <div className="subpage-hero-overlay" />
        
        <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
          
          <h1 className="subpage-hero-title" style={{ marginTop: 0 }}>
            Ganzheitlicher Innenausbau. <br />
            <span className="wood-highlight-text">
              Aus Balge für Generationen.
            </span>
          </h1>

          <p className="subpage-hero-desc">
            Vom architektonischen Treppenbau über barfußfreundliche Massivholzböden bis zu maßgefertigten 
            Innentüren, Fenstern und Sonnenschutz – wir schaffen harmonische Wohnwelten mit meisterhafter Präzision.
          </p>

          <div className="subpage-hero-actions">
            <button 
              onClick={() => onOpenLeadFunnel('Innenausbau & Tischlerei')}
              className="btn-primary"
              style={{ padding: '16px 32px' }}
            >
              <span>Innenausbau anfragen</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
              className="btn-secondary"
              style={{ padding: '16px 26px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFFFFF' }}
            >
              <Phone size={16} color="#C96A00" />
              <span>{COMPANY_INFO.contact.phone}</span>
            </a>
          </div>

        </div>
      </section>

      {/* 1.5 REFERENZEN & INSPIRATION SLIDER */}
      <SubpageGallerySlider 
        category="innenausbau"
        badgeTitle="Referenzen & Maßarbeiten"
        heading="Ausgewählte Projekte im Innenausbau."
        description="Entdecken Sie unsere gefertigten Faltwerktreppen, Landhausdielen, Wangentreppen und maßgefertigten Innenausbauten."
        onOpenLeadFunnel={onOpenLeadFunnel}
      />

      {/* 2. DISCIPLINES LIST (CLEAN & ULTRA SCANNABLE) */}
      <section className="section-wrapper white">
        <div className="container-custom">
          
          <div className="section-header">
            <div className="badge-pill amber">
              <Sparkles size={14} />
              <span>Leistungen im Überblick</span>
            </div>
            <h2>Alle Gewerke im Innenausbau auf einen Blick.</h2>
            <p>
              Präzise handwerkliche Lösungen für Ihr Vorhaben – schnell, transparent und aus einer Meisterhand.
            </p>
          </div>

          <div className="subpage-disciplines-grid">
            {disciplines.map((item, idx) => (
              <div key={idx} className="subpage-discipline-card">
                <h3 className="discipline-title">{item.title}</h3>
                <p className="discipline-desc">{item.desc}</p>
                <div className="discipline-highlights-list">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="discipline-highlight-row">
                      <CheckCircle2 size={15} color="#C96A00" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. TRUST & BOTTOM CTA */}
      <section className="section-wrapper alt">
        <div className="container-custom">
          <div className="subpage-cta-banner">
            <div className="subpage-cta-text">
              <span className="subpage-cta-eyebrow">IHR INNENAUSBAU-PROJEKT</span>
              <h3>Planen Sie jetzt Ihren individuellen Innenausbau mit Schlemermeyer.</h3>
              <p>
                Kostenfreie Erstberatung und Vor-Ort-Aufmaß im Landkreis Nienburg, Hannover, Bremen und Umgebung.
              </p>
            </div>
            <div className="subpage-cta-btn-wrap" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={() => onOpenLeadFunnel('Innenausbau & Tischlerei')}
                className="btn-primary"
                style={{ padding: '16px 28px' }}
              >
                <span>Jetzt Projekt anfragen</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
                className="btn-secondary"
                style={{ padding: '16px 24px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFFFFF' }}
              >
                <Phone size={16} color="#C96A00" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
