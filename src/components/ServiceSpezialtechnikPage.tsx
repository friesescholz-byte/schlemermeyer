import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2,
  Info,
  Paintbrush,
  Flame
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { SubpageGallerySlider } from './SubpageGallerySlider';

interface SubpageProps {
  onNavigate: (page: 'home' | 'about' | 'jobs' | 'service-innenausbau' | 'service-zimmerei' | 'service-spezialtechnik', sectionId?: string) => void;
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

export const ServiceSpezialtechnikPage: React.FC<SubpageProps> = ({ onNavigate, onOpenLeadFunnel }) => {
  return (
    <div className="subpage-wrapper">
      
      {/* 1. HERO HEADER WITH FIXED BACKGROUND (IDENTISCH ZU DEN ANDEREN UNTERSEITEN) */}
      <section className="subpage-hero-stage">
        <div className="subpage-hero-fixed-bg spezialtechnik" />
        <div className="subpage-hero-overlay" />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
          
          <h1 className="subpage-hero-title" style={{ marginTop: 0 }}>
            Moderne Spezialtechnik. <br />
            <span className="wood-highlight-text">
              Präzision &amp; Effizienz im Handwerk.
            </span>
          </h1>

          <p className="subpage-hero-desc">
            Vom automatischen Streichautomaten für Bretter und Leisten bis zur 
            staubarmen Fußbodenfräse für Bestandsestriche – meisterhafte Technik für makellose Ergebnisse.
          </p>

          <div className="subpage-hero-actions">
            <button 
              onClick={() => onOpenLeadFunnel('Spezialtechnik & Maschinenservice')}
              className="btn-primary"
              style={{ padding: '16px 32px' }}
            >
              <span>Spezialtechnik anfragen</span>
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
        category="spezialtechnik"
        heading="Ausgewählte Projekte in der Spezialtechnik."
        description="Eindrücke unserer maschinellen 4-Seiten-Holzbeschichtungen und staubarmen Fußbodenfräsungen im Bestandsestrich."
        onOpenLeadFunnel={onOpenLeadFunnel}
      />

      {/* 2. BESPOKE DUO-CARD SHOWCASE: DIE BEIDEN SYSTEME IM DETAIL */}
      <section className="section-wrapper white">
        <div className="container-custom">
          
          <div className="section-header">
            <h2>Spezialtechnik &amp; Maschinenservice auf einen Blick.</h2>
            <p>
              Zwei moderne Spezialmaschinen, die Ihnen tagelange Arbeit, Schmutz und hohe Sanierungskosten ersparen.
            </p>
          </div>

          <div className="specialtech-duo-grid">
            
            {/* KARTE 1: STREICHAUTOMAT */}
            <div className="specialtech-card">
              {/* BACKGROUND IMAGE WITH SMOOTH OVERLAY BLEND */}
              <div className="immersive-card-bg-wrap">
                <img 
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/streichautomat-ctec-werkstatt.webp" 
                  alt="Streichautomat C-TEC von Bruns in der Schlemermeyer Meisterwerkstatt" 
                  className="immersive-card-img"
                  loading="lazy"
                />
                <div className="specialtech-card-gradient-overlay" />
              </div>

              {/* CONTENT LAYER */}
              <div className="specialtech-card-content">
                <div className="specialtech-card-top">
                  <div className="immersive-icon-box">
                    <Paintbrush size={22} />
                  </div>
                </div>

                <div className="specialtech-card-body">
                  <h3 className="specialtech-title">
                    Streichautomat <span className="specialtech-tool-name">(C-TEC von Bruns)</span>
                  </h3>

                  <div className="specialtech-lead-text">
                    Bretter &amp; Leisten 4-seitig maschinell streichen
                  </div>

                  <p className="specialtech-core-benefit">
                    Schluss mit tagelangem Streichen von Hand: Das Holz wird einmal durch die Maschine geschoben 
                    und kommt auf allen vier Seiten gleichmäßig und sauber gestrichen heraus.
                  </p>

                  <div className="specialtech-points-list">
                    <div className="specialtech-point-row">
                      <CheckCircle2 size={16} color="#FBBF24" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span><strong>4 Seiten in 1 Durchgang:</strong> Ober-, Unter- und beide Längsseiten in Sekunden fertig</span>
                    </div>
                    <div className="specialtech-point-row">
                      <CheckCircle2 size={16} color="#FBBF24" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span><strong>Makelloser Farbauftrag:</strong> Keine Läufer, keine Tropfen, keine Pinselspuren</span>
                    </div>
                    <div className="specialtech-point-row">
                      <CheckCircle2 size={16} color="#FBBF24" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span><strong>Enorme Zeitersparnis:</strong> Für Fassadenhölzer, Schalungsbretter &amp; Leisten</span>
                    </div>
                  </div>

                  <div className="specialtech-note-box">
                    <Info size={15} style={{ flexShrink: 0, marginTop: '2px', color: '#FBBF24' }} />
                    <span><strong>Auch als Lohnservice:</strong> Bringen Sie Ihr Holz einfach vorbei – wir beschichten es für Sie.</span>
                  </div>

                  <div className="specialtech-card-action">
                    <button 
                      onClick={() => onOpenLeadFunnel('Streichautomat C-TEC')}
                      className="btn-primary"
                    >
                      <span>Streichautomat anfragen</span>
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* KARTE 2: FUSSBODENFRÄSE */}
            <div className="specialtech-card tech-blue">
              {/* BACKGROUND IMAGE WITH SMOOTH OVERLAY BLEND */}
              <div className="immersive-card-bg-wrap">
                <img 
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/fussbodenfraese-estrich-sanierung.webp" 
                  alt="Fußbodenfräse von Ecotherm im Bestandsestrich" 
                  className="immersive-card-img"
                  loading="lazy"
                />
                <div className="specialtech-card-gradient-overlay" />
              </div>

              {/* CONTENT LAYER */}
              <div className="specialtech-card-content">
                <div className="specialtech-card-top">
                  <div className="immersive-icon-box tech-blue-icon">
                    <Flame size={22} />
                  </div>
                </div>

                <div className="specialtech-card-body">
                  <h3 className="specialtech-title">
                    Fußbodenfräse <span className="specialtech-tool-name">(von Ecotherm)</span>
                  </h3>

                  <div className="specialtech-lead-text">
                    Fußbodenheizung nachträglich in Estrich fräsen
                  </div>

                  <p className="specialtech-core-benefit">
                    Fußbodenheizung nachrüsten, ohne den alten Estrich herauszureißen: Passgenaue Rohrkanäle 
                    werden direkt in Ihren Bestandsboden gefräst – sauber und nahezu staubfrei.
                  </p>

                  <div className="specialtech-points-list">
                    <div className="specialtech-point-row">
                      <CheckCircle2 size={16} color="#38BDF8" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span><strong>0 mm Aufbauhöhe:</strong> Vorhandene Türen, Zargen und Treppen bleiben erhalten</span>
                    </div>
                    <div className="specialtech-point-row">
                      <CheckCircle2 size={16} color="#38BDF8" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span><strong>Nahezu staubfrei:</strong> Direkte Hochleistungsabsaugung an der Diamantscheibe</span>
                    </div>
                    <div className="specialtech-point-row">
                      <CheckCircle2 size={16} color="#38BDF8" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span><strong>In 1 Tag fertig:</strong> Sofort verlegebereit – keine wochenlange Estrich-Trocknung</span>
                    </div>
                  </div>

                  <div className="specialtech-note-box">
                    <Info size={15} style={{ flexShrink: 0, marginTop: '2px', color: '#38BDF8' }} />
                    <span><strong>Komplettservice:</strong> Auf Wunsch verlegen wir im Anschluss direkt Ihr neues Parkett.</span>
                  </div>

                  <div className="specialtech-card-action">
                    <button 
                      onClick={() => onOpenLeadFunnel('Ecotherm Fußbodenfräse')}
                      className="btn-primary"
                    >
                      <span>Fußbodenfräse anfragen</span>
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 3-PILLAR TRUST BAR */}
          <div className="specialtech-trust-bar">
            <div className="specialtech-trust-col">
              <span className="specialtech-trust-title">
                <CheckCircle2 size={16} color="#16A34A" />
                <span>Für Privat &amp; Handwerk</span>
              </span>
              <p className="specialtech-trust-desc">
                Für private Eigenheimbesitzer genauso wie für Maler-, Fliesenleger- und Zimmererbetriebe.
              </p>
            </div>
            <div className="specialtech-trust-col">
              <span className="specialtech-trust-title">
                <CheckCircle2 size={16} color="#16A34A" />
                <span>Schnelle Ausführung</span>
              </span>
              <p className="specialtech-trust-desc">
                Kurzfristige Termine und zügige Bearbeitung direkt in unserer Meisterwerkstatt in Balge.
              </p>
            </div>
            <div className="specialtech-trust-col">
              <span className="specialtech-trust-title">
                <CheckCircle2 size={16} color="#16A34A" />
                <span>Faire Festpreise</span>
              </span>
              <p className="specialtech-trust-desc">
                Transparente Abrechnung pro laufendem Meter oder Fläche – verlässlich ohne versteckte Kosten.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TRUST & BOTTOM CTA */}
      <section className="section-wrapper alt">
        <div className="container-custom">
          <div className="subpage-cta-banner">
            <div className="subpage-cta-text">
              <span className="subpage-cta-eyebrow">IHRE MASCHINEN- &amp; FRÄSANFRAGE</span>
              <h3>Nutzen Sie modernste Spezialtechnik für Ihr Bau- oder Sanierungsvorhaben.</h3>
              <p>
                Kostenlose Beratung, transparente Konditionen und schnelle Ausführung im Landkreis Nienburg und Umgebung.
              </p>
            </div>
            <div className="subpage-cta-btn-wrap" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={() => onOpenLeadFunnel('Spezialtechnik & Maschinenservice')}
                className="btn-primary"
                style={{ padding: '16px 28px' }}
              >
                <span>Jetzt Spezialtechnik anfragen</span>
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
