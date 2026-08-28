import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  CheckCircle2, 
  Layers, 
  TreePine, 
  DoorClosed, 
  SunMedium, 
  ShieldCheck, 
  AppWindow, 
  Hammer, 
  Award,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface SubpageProps {
  onNavigate: (page: 'home' | 'about' | 'jobs' | 'service-innenausbau' | 'service-zimmerei' | 'service-dachdeckerei', sectionId?: string) => void;
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

export const ServiceInnenausbauPage: React.FC<SubpageProps> = ({ onNavigate, onOpenLeadFunnel }) => {
  const disciplines = [
    {
      title: 'Treppenbau nach Maß',
      tag: 'Eigene Fertigung Balge',
      desc: 'Planung, Herstellung und Montage exklusiver Treppen. Gestalten Sie mit uns Ihre ganz individuelle Wunschtreppe für einen starken Auftritt – ob Faltwerk-, Kragarm- oder klassische Wangentreppe.',
      highlights: ['Dauerhaft knarrfreie Meisterkonstruktion', 'Individuelle Holzarten & Oberflächenveredelung', 'Kombinationen mit Glas- & Schwarzstahlgeländer']
    },
    {
      title: 'Fußböden & Parkettkultur',
      tag: 'Verlegung & Aufbereitung',
      desc: 'Fachgerechtes Verlegen hochwertiger Fußbodenbeläge wie Landhausdielen und Fischgrätparkett. Alte Holzböden lassen wir durch staubarme Aufbereitung in neuem Glanz erstrahlen.',
      highlights: ['Massivholzdielen & edles Fischgrät', 'Staubarmes Schleifen mit HEPA-Absaugung', 'Farbliche 1:1 Abstimmung zur Treppe']
    },
    {
      title: 'Maßgefertigte Innentüren',
      tag: 'Design & Altbau',
      desc: 'Verleihen Sie Ihrem Zuhause neuen Charme mit individuellen Innentüren. Von der stilgerechten Aufbereitung historischer Türen bis hin zur modernen, flächenbündigen Maßanfertigung.',
      highlights: ['Stumpf einschlagend mit verdeckten Bändern', 'Magnetschlösser für geräuschloses Schließen', 'Kassettentüren & Glasschiebeelemente']
    },
    {
      title: 'Fenster & Haustüren',
      tag: 'Made in Germany',
      desc: 'Beratung und fachgerechter Einbau von modernen Fenstern und sicheren Türen deutscher Markenhersteller für optimalen Wärmeschutz und höchste Einbruchsicherheit.',
      highlights: ['Höchste Energieeffizienz nach aktuellem GEG', 'Sicherheitsbeschläge & Schallschutzglas', 'Passgenaue Montage durch eigene Gesellen']
    },
    {
      title: 'Sicht- & Sonnenschutz',
      tag: 'Perfektes Raumklima',
      desc: 'Beratung und fachgerechter Einbau von Sicht- und Sonnenschutz. Zusammenarbeit mit ausgewählten Herstellern für Rollladen, Raffstores, Textilscreens und Plissees.',
      highlights: ['Elektrische & smarte Steuerungen', 'Windstabile Textilscreens & Außenraffstores', 'Große Auswahl an Stoffen & Farbnuancen']
    },
    {
      title: 'Insektenschutzgitter',
      tag: 'Millimetergenau',
      desc: 'Beratung und fachgerechter Einbau von stabilen Insektenschutzgittern nach Maß für Fenster, Türen und Schiebeelemente – langlebig, unauffällig und robust.',
      highlights: ['Passgenaue Spann- & Drehrahmen', 'Reißfestes, fast unsichtbares Transpatec-Gewebe', 'Witterungsbeständige Aluminiumprofile']
    },
    {
      title: 'Individuelle Gestaltungswünsche',
      tag: 'Unikate nach Wunsch',
      desc: 'Gerne planen wir mit Ihnen die Umsetzung Ihrer persönlichen Wünsche im Innenausbau! Maßgefertigte Einbaumöbel, Raumteiler, Wandpaneele und Sonderbauten.',
      highlights: ['100% maßgefertigte Einzelstücke', 'Persönliche 3D-Beratung vor Ort', 'Alles aus einer Meisterhand']
    }
  ];

  return (
    <div className="subpage-wrapper">
      
      {/* 1. HERO HEADER */}
      <section className="subpage-hero-stage">
        <div className="container-custom">
          
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
              <span>Unsere Gewerke &amp; Disziplinen</span>
            </div>
            <h2>Alle Leistungen im Innenausbau auf einen Blick.</h2>
            <p>
              Bei uns greift jedes Detail nahtlos ineinander – ohne Schnittstellenverluste oder unpassende Farbtöne.
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
              <span className="subpage-cta-eyebrow">IHR INNENAUSBAU-PROJEKT</span>
              <h3>Planen Sie jetzt Ihren individuellen Innenausbau mit Schlemermeyer.</h3>
              <p>
                Kostenfreie Erstberatung und Vor-Ort-Aufmaß im Landkreis Nienburg, Hannover, Bremen und Umgebung.
              </p>
            </div>
            <div className="subpage-cta-btn-wrap">
              <button 
                onClick={() => onOpenLeadFunnel('Innenausbau Komplett')}
                className="btn-primary"
                style={{ padding: '16px 30px' }}
              >
                <span>Jetzt Projekt anfragen</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
