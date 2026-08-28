import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Home, 
  CloudRain, 
  Sun, 
  Flame 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface SubpageProps {
  onNavigate: (page: 'home' | 'about' | 'jobs' | 'service-innenausbau' | 'service-zimmerei' | 'service-dachdeckerei', sectionId?: string) => void;
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

export const ServiceDachdeckereiPage: React.FC<SubpageProps> = ({ onNavigate, onOpenLeadFunnel }) => {
  const disciplines = [
    {
      title: 'Steildacheindeckung',
      tag: 'Tondachziegel & Betondachsteine',
      desc: 'Fachgerechte Neueindeckung und Umdeckung von Steildächern mit langlebigen Tondachziegeln oder Betondachsteinen führender Qualitätshersteller.',
      highlights: ['Sturmsichere Verklammerung & Firstsysteme', 'Große Auswahl an Farben, Glasuren & Formen', 'Wirtschaftlich, langlebig & wertsteigernd']
    },
    {
      title: 'Flachdachabdichtung',
      tag: 'Bitumen & Folie',
      desc: 'Dauerhaft dichte Abdichtung von Flachdächern für Wohngebäude, Garagen, Gewerbeobjekte und Balkone mit hochwertigen Bitumenschweißbahnen oder Kunststoff-Folien.',
      highlights: ['Mehrlagige nahtlose Abdichtungssysteme', 'Gefälledämmung gegen stehendes Wasser', 'Begrünbare Flachdach-Konzepte möglich']
    },
    {
      title: 'Energetische Dachsanierung & Dämmung',
      tag: 'KfW & GEG Konform',
      desc: 'Aufsparrendämmung, Zwischensparrendämmung und Untersparrendämmung für maximale Energieeinsparung, geringere Heizkosten und staatliche Fördermöglichkeiten.',
      highlights: ['Signifikante Senkung der Heizenergiekosten', 'Effektiver Hitzeschutz im Sommer', 'Schimmel- & Zugluftvermeidung durch luftdichte Ebene']
    },
    {
      title: 'Dachflächenfenster & Lichtsysteme',
      tag: 'Velux & Roto Partner',
      desc: 'Einbau, Austausch und Erweiterung von Dachflächenfenstern inklusive passgenauer Eindeckrahmen, Sonnenschutzrollos und elektrischer Fernbedienung.',
      highlights: ['Helle, lichtdurchflutete Dachwohnräume', 'Hervorragende Wärmedämmwerte & Schallschutz', 'Schneller, sauberer Austausch bestehender Fenster']
    },
    {
      title: 'Dachentwässerung & Klempnerarbeiten',
      tag: 'Zink, Kupfer & Aluminium',
      desc: 'Maßgefertigte Dachrinnen, Fallrohre, Kaminbekleidungen, Mauerabdeckungen und Stehfalz-Verkleidungen aus langlebigem Titanzink oder Kupfer.',
      highlights: ['Zuverlässiger Schutz des Mauerwerks vor Regenwasser', 'Individuelle Kantprofile & Kaminhauben', 'Korrosionsbeständig & wartungsarm']
    },
    {
      title: 'Dachwartung & Sturmschaden-Notdienst',
      tag: 'Schnelle Hilfe & Werterhalt',
      desc: 'Regelmäßige Dachinspektion, Beseitigung von Sturmschäden, Austausch einzelner Ziegel und Reinigung verstopfter Dachrinnen zur Vermeidung von Folgeschäden.',
      highlights: ['Schnelle Reaktionszeiten bei Sturmschäden', 'Präventiver Werterhalt der gesamten Dachsubstanz', 'Versicherungsfähige Schadensdokumentation']
    }
  ];

  return (
    <div className="subpage-wrapper">
      
      {/* 1. HERO HEADER */}
      <section className="subpage-hero-stage">
        <div className="container-custom">
          
          <h1 className="subpage-hero-title" style={{ marginTop: 0 }}>
            Dachdeckerarbeiten aus Meisterhand. <br />
            <span className="wood-highlight-text">
              Dauerhafter Schutz bei jedem Wetter.
            </span>
          </h1>

          <p className="subpage-hero-desc">
            Vom Steil- und Flachdach über energetische Aufsparrendämmung bis hin zu Dachfenstern und 
            Klempnerarbeiten – wir sichern Ihr Gebäude rundum ab, verlässlich und sturmsicher.
          </p>

          <div className="subpage-hero-actions">
            <button 
              onClick={() => onOpenLeadFunnel('Dachdeckerei & Dachsanierung')}
              className="btn-primary"
              style={{ padding: '16px 32px' }}
            >
              <span>Dach-Projekt anfragen</span>
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
              <span>Dachdecker- &amp; Sanierungsleistungen</span>
            </div>
            <h2>Sicherheit, Dämmung &amp; Werterhalt für Ihr Dach.</h2>
            <p>
              Fachgerechte Ausführung nach den aktuellen Fachregeln des Deutschen Dachdeckerhandwerks (ZVDH).
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
              <span className="subpage-cta-eyebrow">IHR DACH-VORHABEN</span>
              <h3>Planen Sie jetzt Ihre Dacheindeckung oder Sanierung mit Schlemermeyer.</h3>
              <p>
                Kostenlose Vor-Ort-Besichtigung, transparente Schadensanalyse und Festpreisangebot.
              </p>
            </div>
            <div className="subpage-cta-btn-wrap">
              <button 
                onClick={() => onOpenLeadFunnel('Dachdeckerei & Dachsanierung')}
                className="btn-primary"
                style={{ padding: '16px 30px' }}
              >
                <span>Jetzt Dach-Angebot anfragen</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
