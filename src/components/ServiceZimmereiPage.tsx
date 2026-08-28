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

export const ServiceZimmereiPage: React.FC<SubpageProps> = ({ onNavigate, onOpenLeadFunnel }) => {
  const disciplines = [
    {
      title: 'Dachstühle & Dachabbund',
      desc: 'Präziser CAD-Abbund und termingerechtes Aufrichten solider Dachstühle aller Bauformen für Neubau und Sanierung.',
      highlights: ['Höchste statische Sicherheit', 'Konstruktionsvollholz (KVH)', 'Schnelle Kranmontage']
    },
    {
      title: 'Holzrahmenbau & Anbauten',
      desc: 'Ökologische Wohnraumerweiterungen, Aufstockungen und schlüsselfertige Wandelemente mit optimaler Dämmwirkung.',
      highlights: ['Schlanker, hochgedämmter Wandaufbau', 'Geringes Eigengewicht für Aufstockungen', 'Gesundes Wohnklima']
    },
    {
      title: 'Carports & Überdachungen',
      desc: 'Maßgeschneiderte Holz-Carports und wetterfeste Terrassenüberdachungen – harmonisch an Ihr Gebäude angepasst.',
      highlights: ['Zimmermannsmäßige Holzverbindungen', 'Integrierte Geräteräume', 'Ziegel-, Blech- oder Glasdach']
    },
    {
      title: 'Dachgauben & Ausbau',
      desc: 'Schlepp-, Spitz- und Flachdachgauben für spürbar mehr Stehhöhe, natürliches Tageslicht und wertvollen Wohnraum.',
      highlights: ['Mehr Wohnraum & Stehhöhe', 'Wärmebrückenfreie Dämmung', 'Zink-, Schiefer- oder Holzfassade']
    },
    {
      title: 'Fachwerksanierung',
      desc: 'Fachgerechter Erhalt und denkmalgerechte Restaurierung historischer Fachwerkkonstruktionen mit abgelagertem Eichenholz.',
      highlights: ['Historische Zapfenverbindungen', 'Statische Instandsetzung', 'Erhalt denkmalgeschützter Substanz']
    },
    {
      title: 'Balkone & Holzfassaden',
      desc: 'Massive Holzbalkone, schützende Hauseingangsvordächer und hinterlüftete Holzfassaden aus langlebigen Naturhölzern.',
      highlights: ['Douglasie, Lärche & Eiche', 'Konstruktiver Witterungsschutz', 'Moderne Holzarchitektur']
    }
  ];

  return (
    <div className="subpage-wrapper">
      
      {/* 1. HERO HEADER WITH FIXED BACKGROUND */}
      <section className="subpage-hero-stage">
        <div className="subpage-hero-fixed-bg zimmerei" />
        <div className="subpage-hero-overlay" />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
          
          <h1 className="subpage-hero-title" style={{ marginTop: 0 }}>
            Traditionelle Zimmermannskunst. <br />
            <span className="wood-highlight-text">
              Für solide Bauwerke mit Zukunft.
            </span>
          </h1>

          <p className="subpage-hero-desc">
            Vom passgenauen Dachstuhl und ökologischen Holzrahmenbau bis zu maßgefertigten Carports, Gauben 
            und Fachwerksanierungen – echte Zimmererqualität aus unserer Meisterwerkstatt in Balge.
          </p>

          <div className="subpage-hero-actions">
            <button 
              onClick={() => onOpenLeadFunnel('Zimmerei & Holzbau')}
              className="btn-primary"
              style={{ padding: '16px 32px' }}
            >
              <span>Zimmerei-Projekt anfragen</span>
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
        category="zimmerei"
        badgeTitle="Zimmerei-Referenzen"
        heading="Ausgewählte Holzbau- &amp; Zimmereiprojekte."
        description="Eindrücke traditioneller Dachstühle, ökologischer Holzrahmenbauten, Aufstockungen und meisterhafter Holzkonstruktionen."
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
            <h2>Zimmerei &amp; Holzbau auf einen Blick.</h2>
            <p>
              Präzise berechnet, handwerklich perfekt abgebunden und mit jahrzehntelanger Erfahrung montiert.
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
              <span className="subpage-cta-eyebrow">IHR ZIMMEREI-VORHABEN</span>
              <h3>Planen Sie jetzt Ihr Holzbau-Projekt mit Schlemermeyer.</h3>
              <p>
                Von der ersten Statik- und Bauplanung bis zum fertigen Richtfest: Wir beraten Sie verlässlich vor Ort.
              </p>
            </div>
            <div className="subpage-cta-btn-wrap" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={() => onOpenLeadFunnel('Zimmerei & Holzbau')}
                className="btn-primary"
                style={{ padding: '16px 28px' }}
              >
                <span>Jetzt Zimmerer-Angebot anfragen</span>
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
