import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  TreePine, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Hammer, 
  Compass, 
  Layers, 
  Quote, 
  Building2, 
  BadgeCheck,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutPageProps {
  onOpenLeadFunnel: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenLeadFunnel, onNavigateHome }) => {
  const timeline = [
    {
      year: "1883",
      generation: "1. Generation",
      master: "Dietrich Schlemermeyer",
      title: "Gründung & Wurzeln in Balge",
      desc: "Grundsteinlegung als traditionelle Bautischlerei in Balge-Blenhorst. Handgefertigte Fenster, Holztüren und Treppen für regionale Höfe und Bürgerhäuser an der Weser.",
      image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0008_ergebnis.webp",
      tag: "Handwerkliche Wurzeln"
    },
    {
      year: "1935",
      generation: "2. Generation",
      master: "Heinrich Schlemermeyer",
      title: "Ausbau & Treppen-Spezialisierung",
      desc: "Erweiterung der Werkstattflächen und frühe Spezialisierung auf statisch anspruchsvolle Massivholztreppen, gewendelte Wangen und handgehobelte Dielenböden.",
      image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0050_ergebnis.webp",
      tag: "Tradition & Ausbau"
    },
    {
      year: "1979",
      generation: "3. Generation",
      master: "Dieter Schlemermeyer",
      title: "Präzision & Meisterwerkstatt",
      desc: "Einführung computergestützter Vorfertigung und kontinuierliche Perfektionierung von gewendelten Wangen-, Bolzen- und modernen Faltwerktreppen.",
      image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0015_ergebnis.webp",
      tag: "Präzisions-Ära"
    },
    {
      year: "Heute",
      generation: "4. Generation",
      master: "Dirk Schlemermeyer",
      title: "Architektur, Design & Unikate",
      desc: "Tischlermeister Dirk Schlemermeyer führt den Meisterbetrieb mit 3D-Laseraufmaß, nachhaltigen Harthölzern und kompromisslosem Qualitätsversprechen in die Zukunft.",
      image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0163-1-scaled_ergebnis.webp",
      tag: "Moderne Meisterklasse"
    }
  ];

  const pillars = [
    {
      icon: Hammer,
      title: "100% Eigene Fertigung",
      desc: "Vom massiven Stammzuschnitt über die Formverleimung bis zum finalen Naturölfinish entsteht jedes Bauteil komplett in unserer Werkstatt in Balge."
    },
    {
      icon: TreePine,
      title: "Ausgewählte Harthölzer",
      desc: "Wir verarbeiten ausschließlich erstklassige, zertifizierte Eiche, Esche, Nussbaum und Lärche aus nachhaltiger Forstwirtschaft mit schonender Trocknung."
    },
    {
      icon: BadgeCheck,
      title: "Feste Meistermontage",
      desc: "Keine anonymen Subunternehmer. Ihr Projekt wird von unseren eigenen, festangestellten Fachgesellen millimetergenau, sauber und staubarm montiert."
    },
    {
      icon: ShieldCheck,
      title: "100% Festpreisgarantie",
      desc: "Nach unserem detaillierten Vor-Ort-Aufmaß erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Zusatzkosten oder böse Überraschungen."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAF8F5' }}>
      
      {/* 1. ELEGANT WARM LIGHT HERO STAGE */}
      <section className="about-light-hero-stage">
        <div className="about-light-hero-bg" />
        <div className="about-light-hero-frosted-overlay" />

        <div className="container-custom" style={{ position: 'relative', zIndex: 3 }}>
          
          {/* BREADCRUMB */}
          <div className="about-breadcrumb light">
            <button onClick={onNavigateHome} className="breadcrumb-link">
              Startseite
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Über uns</span>
          </div>

          <div className="about-light-hero-content">
            <div className="badge-pill amber" style={{ background: '#FFFFFF', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
              <Award size={14} color="#C96A00" />
              <span>Meisterbetrieb seit 1883 • 4. Generation</span>
            </div>

            <h1 className="about-light-hero-headline">
              Gelebte Handwerkskultur.{' '}
              <span className="wood-highlight-text font-serif-accent">
                Aus Balge für Generationen.
              </span>
            </h1>

            <p className="about-light-hero-subline">
              Seit über 140 Jahren fertigen wir in Balge-Blenhorst maßgebaute Treppen und langlebige Massivholzböden. Wo industrielle Massenware aufhört, beginnt unser Anspruch an echte Meisterqualität.
            </p>

            <div className="about-hero-actions">
              <button
                onClick={onOpenLeadFunnel}
                className="btn-primary"
                style={{ padding: '14px 28px' }}
              >
                <span>Beratungsgespräch anfragen</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PHILOSOPHIE & WORKSHOP SHOWCASE */}
      <section className="section-wrapper white">
        <div className="container-custom">
          
          <div className="about-showcase-split-grid">
            
            {/* TEXT COLUMN */}
            <div className="about-showcase-text">
              <div className="badge-pill amber">
                <Compass size={14} />
                <span>Philosophie &amp; Anspruch</span>
              </div>

              <h2>
                Warum wir Dinge anders machen als die Industrie.
              </h2>

              <p className="lead-paragraph">
                In einer Zeit, in der industrielle Fertighäuser und vorgefertigte Standardtreppen den Markt überschwemmen, setzen wir ganz bewusst auf das Gegenteil: <strong>Maßanfertigung mit Herz, Verstand und meisterhafter Handwerkskunst</strong>.
              </p>

              <div className="about-text-paragraphs">
                <p>
                  Jeder Raum besitzt seine eigene Architektur, jede Holzart ihren individuellen Charakter. Ob moderner Neubau mit schwebender Kragarmtreppe oder die behutsame Restauration eines historischen Fachwerks: Wir planen millimetergenau und fertigen jedes Bauteil in unserer eigenen Werkstatt in Balge-Blenhorst.
                </p>
                <p>
                  Wir verzichten bewusst auf billige Furniere und dünne Deckschichten. Bei uns erhalten Sie massive Hartholzstufen mit 60 mm Stärke, handwerklich verleimt und mit schadstofffreien Naturölen veredelt.
                </p>
              </div>

              {/* MEISTER QUOTE BOX */}
              <div className="master-quote-card">
                <div className="quote-icon-wrap">
                  <Quote size={24} color="#C96A00" />
                </div>
                <div className="quote-content">
                  <p className="quote-text">
                    „Wer bei Treppen und Böden am falschen Ende spart, zahlt nach wenigen Jahren doppelt. Wir bauen Werte, die Generationen überdauern.“
                  </p>
                  <div className="quote-author">
                    <strong>Dirk Schlemermeyer</strong>
                    <span>Inhaber &amp; Tischlermeister (4. Generation)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* IMAGE COMPOSITION COLUMN */}
            <div className="about-visual-showcase">
              
              <div className="showcase-main-photo-wrap">
                <img
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0163-1-scaled_ergebnis.webp"
                  alt="Meisterwerkstatt Tischlerei Schlemermeyer in Balge"
                  className="showcase-main-img"
                />
                
                {/* FLOATING CORNER BADGE */}
                <div className="showcase-floating-badge">
                  <Building2 size={20} color="#C96A00" />
                  <div>
                    <strong>Balge-Blenhorst</strong>
                    <span>Traditioneller Standort seit 1883</span>
                  </div>
                </div>
              </div>

              {/* 2 SMALL ACCENT PHOTOS */}
              <div className="showcase-sub-photos-grid">
                <div className="sub-photo-box">
                  <img 
                    src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0015_ergebnis.webp" 
                    alt="Stufenpresse und Formverleimung" 
                  />
                  <span>Formverleimung &amp; Presse</span>
                </div>
                <div className="sub-photo-box">
                  <img 
                    src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0017_ergebnis.webp" 
                    alt="Präziser Stufenzuschnitt" 
                  />
                  <span>Präziser Zuschnitt</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. ECHTER ZEITSTRAHL (CHRONIK MIT BILDERN) */}
      <section className="section-wrapper alt">
        <div className="container-custom">
          
          <div className="section-header">
            <div className="badge-pill amber">
              <Layers size={14} />
              <span>140 Jahre Chronik</span>
            </div>
            <h2>Vier Generationen. Eine Leidenschaft.</h2>
            <p>
              Vom traditionellen Wagner- und Bautischlerbetrieb des 19. Jahrhunderts zur modernen Manufaktur für anspruchsvolle Massivholz-Architektur.
            </p>
          </div>

          {/* ECHTER VERTIKALER ZEITSTRAHL */}
          <div className="vertical-timeline-track-wrap">
            <div className="timeline-center-spine" />

            <div className="timeline-flow-list">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`timeline-row-node ${isEven ? 'left-aligned' : 'right-aligned'}`}>
                    
                    {/* TIMELINE NODE DOT IN THE CENTER */}
                    <div className="timeline-node-pin">
                      <span>{item.year}</span>
                    </div>

                    {/* TIMELINE CONTENT CARD WITH PHOTO */}
                    <div className="timeline-node-card">
                      <div className="node-card-image-wrap">
                        <img src={item.image} alt={item.title} />
                        <div className="node-gen-badge">{item.generation}</div>
                      </div>

                      <div className="node-card-body">
                        <div className="node-master-row">
                          <span className="node-master-name">{item.master}</span>
                          <span className="node-tag-pill">{item.tag}</span>
                        </div>

                        <h3 className="node-card-title">{item.title}</h3>
                        <p className="node-card-desc">{item.desc}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. UNSER QUALITÄTSVERSPRECHEN (OHNE ZAHLEN, MIT EDLEN ICONS) */}
      <section className="section-wrapper white">
        <div className="container-custom">
          
          <div className="section-header">
            <div className="badge-pill amber">
              <ShieldCheck size={14} />
              <span>Garantierte Qualität</span>
            </div>
            <h2>Unser Versprechen an Sie</h2>
            <p>
              Warum private Bauherren, Denkmaleigentümer und Architekten seit Generationen auf Tischlerei Schlemermeyer vertrauen.
            </p>
          </div>

          <div className="clean-pillars-grid">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="clean-pillar-card">
                  <div className="pillar-icon-circle">
                    <Icon size={24} color="#C96A00" />
                  </div>

                  <h3 className="clean-pillar-title">{p.title}</h3>
                  <p className="clean-pillar-desc">{p.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CTA BANNER */}
          <div className="about-bottom-cta-banner">
            <div className="cta-banner-text">
              <h3>Planen Sie ein Treppen- oder Bodenprojekt?</h3>
              <p>Lassen Sie sich unverbindlich vor Ort beraten oder besuchen Sie unsere Meisterwerkstatt in Balge.</p>
            </div>
            <button
              onClick={onOpenLeadFunnel}
              className="btn-primary"
              style={{ padding: '16px 32px' }}
            >
              <span>Kostenlose Vor-Ort-Beratung anfragen</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
