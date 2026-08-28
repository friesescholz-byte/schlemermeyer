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

export const ServiceDachdeckereiPage: React.FC<SubpageProps> = ({ onNavigate, onOpenLeadFunnel }) => {
  const disciplines = [
    {
      title: 'Steildacheindeckung',
      desc: 'Fachgerechte Neueindeckung und Umdeckung mit sturmsicheren Tondachziegeln oder Betondachsteinen führender Qualitätshersteller.',
      highlights: ['Sturmsichere Verklammerung', 'Große Farb- & Formauswahl', 'Langlebiger Firstaufbau']
    },
    {
      title: 'Flachdachabdichtung',
      desc: 'Dauerhaft dichte, mehrlagige Abdichtungssysteme mit hochwertigen Bitumenbahnen oder Folien inklusive Gefälledämmung.',
      highlights: ['Nahtlose Bitumen- & Folienabdichtung', 'Gefälledämmung gegen Staunässe', 'Ideal für Garagen & Balkone']
    },
    {
      title: 'Energetische Dachsanierung',
      desc: 'KfW- und GEG-konforme Aufsparren- und Zwischensparrendämmung für spürbar geringere Heizkosten und optimalen Hitzeschutz.',
      highlights: ['Signifikante Heizkostensenkung', 'Sommerlicher Hitzeschutz', 'Fördermittelfähige Dämmung']
    },
    {
      title: 'Dachfenster (Velux / Roto)',
      desc: 'Fachgerechter Einbau und Austausch von Dachflächenfenstern mit passgenauen Eindeckrahmen und Sonnenschutzrollos.',
      highlights: ['Lichtdurchflutete Räume', 'Schneller 1:1 Austausch', 'Hervorragender Schall- & Wärmeschutz']
    },
    {
      title: 'Dachentwässerung & Klempnerei',
      desc: 'Maßgefertigte Dachrinnen, Fallrohre, Kaminbekleidungen und Stehfalz-Verkleidungen aus langlebigem Titanzink oder Kupfer.',
      highlights: ['Korrosionsbeständiges Titanzink', 'Schutz vor Fassadenfeuchte', 'Individuelle Kantprofile']
    },
    {
      title: 'Dachwartung & Sturmservice',
      desc: 'Regelmäßige Inspektion, schnelle Sturmschaden-Beseitigung und Rinnenreinigung zur präventiven Werterhaltung.',
      highlights: ['Schnelle Notfallhilfe bei Sturm', 'Versicherungsgerechte Dokumentation', 'Präventiver Werterhalt']
    }
  ];

  return (
    <div className="subpage-wrapper">
      
      {/* 1. HERO HEADER WITH FIXED BACKGROUND */}
      <section className="subpage-hero-stage">
        <div className="subpage-hero-fixed-bg dachdeckerei" />
        <div className="subpage-hero-overlay" />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
          
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
        category="dachdeckerei"
        badgeTitle="Dachdecker-Referenzen"
        heading="Ausgewählte Steildach- &amp; Flachdachprojekte."
        description="Eindrücke unserer meisterhaften Dacheindeckungen, energetischen Dachsanierungen, Gauben und Flachdachabdichtungen."
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
            <h2>Dachdeckerei &amp; Dachsanierung auf einen Blick.</h2>
            <p>
              Fachgerechte Ausführung nach den aktuellen Fachregeln des Deutschen Dachdeckerhandwerks (ZVDH).
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
              <span className="subpage-cta-eyebrow">IHR DACH-VORHABEN</span>
              <h3>Planen Sie jetzt Ihre Dacheindeckung oder Sanierung mit Schlemermeyer.</h3>
              <p>
                Kostenlose Vor-Ort-Besichtigung, transparente Schadensanalyse und Festpreisangebot.
              </p>
            </div>
            <div className="subpage-cta-btn-wrap" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={() => onOpenLeadFunnel('Dachdeckerei & Dachsanierung')}
                className="btn-primary"
                style={{ padding: '16px 28px' }}
              >
                <span>Jetzt Dach-Angebot anfragen</span>
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
