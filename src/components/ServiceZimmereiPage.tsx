import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  CheckCircle2, 
  Hammer, 
  Home, 
  Building, 
  TreePine, 
  ShieldCheck 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface SubpageProps {
  onNavigate: (page: 'home' | 'about' | 'jobs' | 'service-innenausbau' | 'service-zimmerei' | 'service-dachdeckerei', sectionId?: string) => void;
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

export const ServiceZimmereiPage: React.FC<SubpageProps> = ({ onNavigate, onOpenLeadFunnel }) => {
  const disciplines = [
    {
      title: 'Dachstühle & Dachabbund',
      tag: 'Präziser Holzabbund',
      desc: 'Herstellung und Montage traditioneller und moderner Dachstühle aller Art – ob Satteldach, Pultdach, Walmdach oder Mansarddach. Nach CAD-Planung millimetergenau abgebunden und gerichtet.',
      highlights: ['Höchste statische Sicherheit & Stabilität', 'Hochwertiges Konstruktionsvollholz (KVH)', 'Schnelles, termingerechtes Aufschlagen vor Ort']
    },
    {
      title: 'Holzrahmenbau & Aufstockungen',
      tag: 'Ökologischer Holzbau',
      desc: 'Wohnraumerweiterungen, Anbauten und schlüsselfertige Aufstockungen in ökologischer Holzrahmenbauweise. Hervorragende Dämmwerte und kurze Bauzeiten.',
      highlights: ['Schlanker Wandaufbau mit maximaler Dämmwirkung', 'Angenehmes, gesundes Raumklima', 'Ideal für Aufstockungen dank geringem Eigengewicht']
    },
    {
      title: 'Carports & Terrassenüberdachungen',
      tag: 'Individuelle Maßanfertigung',
      desc: 'Wetterfeste Carports für ein oder mehrere Fahrzeuge sowie maßgeschneiderte Terrassenüberdachungen aus Massivholz – passgenau an Ihr Wohnhaus angepasst.',
      highlights: ['Solide zimmermannsmäßige Holzverbindungen', 'Kombinierbar mit Glas-, Ziegel- oder Blecheindeckung', 'Integrierte Geräteräume & Sichtschutzelemente']
    },
    {
      title: 'Dachgauben & Dachausbau',
      tag: 'Mehr Raum & Licht',
      desc: 'Schleppgauben, Spitzgauben oder moderne Flachdachgauben. Wir schaffen spürbar mehr Stehhöhe, Tageslicht und wertvollen Wohnraum in Ihrem Dachgeschoss.',
      highlights: ['Kompletter Gaubenbau aus einer Hand', 'Wärmebrückenfreie Dämmung nach GEG', 'Außenverkleidung mit Holz, Zink oder Schiefer']
    },
    {
      title: 'Fachwerksanierung & Denkmalpflege',
      tag: 'Historische Handwerkskunst',
      desc: 'Fachgerechte Sanierung und Restaurierung historischer Fachwerkkonstruktionen mit traditionellen Holzverbindungen und abgelagertem Eichenholz.',
      highlights: ['Erhalt wertvoller denkmalgeschützter Substanz', 'Traditionelle Zapfen- & Holznagelverbindungen', 'Schadensanalyse und statische Instandsetzung']
    },
    {
      title: 'Balkone, Vordächer & Holzfassaden',
      tag: 'Witterungsschutz & Ästhetik',
      desc: 'Massive Holzbalkone, schützende Hauseingangsvordächer und hinterlüftete Holzfassaden für modernen architektonischen Ausdruck und dauerhaften Witterungsschutz.',
      highlights: ['Langlebige Hölzer wie Douglasie, Lärche und Eiche', 'Konstruktiver Holzschutz für maximale Haltbarkeit', 'Harmonische Abstimmung zur Gesamtarchitektur']
    }
  ];

  return (
    <div className="subpage-wrapper">
      
      {/* 1. HERO HEADER */}
      <section className="subpage-hero-stage">
        <div className="container-custom">
          
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
              style={{ padding: '16px 26px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Phone size={16} color="#C96A00" />
              <span>{COMPANY_INFO.contact.phone}</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. DISCIPLINES LIST */}
      <section className="section-wrapper white">
        <div className="container-custom">
          
          <div className="section-header">
            <div className="badge-pill amber">
              <Sparkles size={14} />
              <span>Zimmerei &amp; Holzbau-Leistungen</span>
            </div>
            <h2>Solide Konstruktionen für Neubau, Umbau &amp; Sanierung.</h2>
            <p>
              Präzise berechnet, handwerklich perfekt abgebunden und mit jahrzehntelanger Erfahrung montiert.
            </p>
          </div>

          <div className="subpage-disciplines-grid">
            {disciplines.map((item, idx) => (
              <div key={idx} className="subpage-discipline-card">
                <div className="discipline-card-header">
                  <span className="discipline-tag">{item.tag}</span>
                  <h3 className="discipline-title">{item.title}</h3>
                </div>
                <p className="discipline-desc">{item.desc}</p>
                <div className="discipline-highlights-list">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="discipline-highlight-row">
                      <CheckCircle2 size={16} color="#C96A00" style={{ flexShrink: 0, marginTop: '2px' }} />
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
            <div className="subpage-cta-btn-wrap">
              <button 
                onClick={() => onOpenLeadFunnel('Zimmerei & Holzbau')}
                className="btn-primary"
                style={{ padding: '16px 30px' }}
              >
                <span>Jetzt Zimmerer-Angebot anfragen</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
