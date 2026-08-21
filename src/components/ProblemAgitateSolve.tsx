import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface PasProps {
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

interface LuxuryPillar {
  id: string;
  tag: string;
  title: string;
  problemText: string;
  solutionHighlight: string;
  solutionText: string;
  specs: string[];
  image: string;
  imageAlt: string;
  detailHighlight: string;
}

export const ProblemAgitateSolve: React.FC<PasProps> = ({ onOpenLeadFunnel }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const pillars: LuxuryPillar[] = [
    {
      id: 'neubau',
      tag: 'Neubau-Falle',
      title: 'Die klapprige Katalogtreppe',
      problemText: 'Dünne Standardtreppe vom Bauträger knarrt bei jedem Schritt und entwertet das gesamte Traumhaus.',
      solutionHighlight: 'Massivholz-Unikat aus Balge',
      solutionText: 'Bis zu 60 mm massive Eiche nach CAD-Planung – dauerhaft verzugsfrei und garantiert knarrfrei.',
      specs: [
        'Bis 60 mm massive Eiche',
        'Statisch geprüfte Knarrfreiheit',
        'Elegante Glas- & LED-Details'
      ],
      image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Standarttreppe_ergebnis.webp',
      imageAlt: 'Minderwertige Standardtreppe mit Mängeln',
      detailHighlight: 'Eigene CAD-Planung & Fertigung'
    },
    {
      id: 'altbau',
      tag: 'Altbau & Sanierung',
      title: 'Knarrende Stufen & Staub-Angst',
      problemText: 'Alte Stufen sind ausgetreten und laut – doch Sie scheuen den Schmutz und die Kosten eines Abrisses.',
      solutionHighlight: 'Staubarme Meister-Restauration',
      solutionText: '99,9% staubarmes Schleifen mit HEPA-Absaugung und Nachkeilung gegen störende Knarrgeräusche.',
      specs: [
        'Voller Werterhalt ohne Abriss',
        'Staubarm direkt im Wohnbereich',
        'Beseitigung von Knarrgeräuschen'
      ],
      image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Bauschutt-und-staub_ergebnis.webp',
      imageAlt: 'Staub und Bauschutt bei unprofessioneller Sanierung',
      detailHighlight: 'Werterhalt alter Bausubstanz'
    },
    {
      id: 'harmonie',
      tag: 'Gewerke-Harmonie',
      title: 'Das Farb- & Holzchaos',
      problemText: 'Treppe, Parkett und Türen von drei verschiedenen Händlern – am Ende beißt sich jeder Holzfarbton.',
      solutionHighlight: '1 Durchgängiges Raumkonzept',
      solutionText: 'Stufen, Schlossdielen und Innentüren aus identischen Holzchargen perfekt aufeinander abgestimmt.',
      specs: [
        'Exakt harmonierende Beiztöne',
        'Nahtlose Meister-Fugen',
        '1 Ansprechpartner für alles'
      ],
      image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Unpassende%20Holzarten_ergebnis.webp',
      imageAlt: 'Nicht zusammenpassende Holzarten und Farbtöne',
      detailHighlight: 'Ganzheitliche Maßanfertigung'
    },
    {
      id: 'zuverlaessigkeit',
      tag: 'Verlässlichkeit',
      title: 'Bauverzug & versteckte Kosten',
      problemText: 'Unzuverlässige Termine, anonyme Subunternehmer und saftige Nachträge rauben Bauherren die Nerven.',
      solutionHighlight: 'Garantie & Handschlag seit 1883',
      solutionText: '100% verbindliche Festpreise vor Beginn und pünktliche Montage durch eigene Tischlergesellen.',
      specs: [
        'Garantierter Festpreis ohne Nachträge',
        'Feste Einbautermine mit Garantie',
        'Eigene Gesellen aus Balge'
      ],
      image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Probleme/Bauverzug-Treppe_ergebnis.webp',
      imageAlt: 'Baustelle mit Bauverzug und unfertiger Treppe',
      detailHighlight: 'Innungsbetrieb seit 1883'
    }
  ];

  const total = pillars.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // 5 SECONDS AUTOPLAY
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  return (
    <section className="section-wrapper white" id="herausforderungen" style={{ borderBottom: '1px solid #E8E2D5', overflow: 'hidden' }}>
      <div className="container-custom">
        
        {/* EDITORIAL HEADER */}
        <div style={{ maxWidth: '820px', margin: '0 auto 44px auto', textAlign: 'center' }}>
          <div className="badge-pill amber" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} />
            <span>Klartext für Bauherren &amp; Sanierer</span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#11141A',
            lineHeight: 1.18,
            marginBottom: '14px'
          }}>
            Typische Probleme vermeiden.{' '}
            <span className="wood-gradient-text font-serif-accent" style={{ display: 'inline', fontSize: '1.02em' }}>
              Meisterhaft gelöst.
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.08rem',
            color: '#475569',
            lineHeight: 1.65,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            Klicken oder wischen Sie durch unser interaktives Rondell, um typische Bau- und Sanierungsfallen zu vermeiden.
          </p>
        </div>

        {/* 3D RONDELL / COVERFLOW STAGE */}
        <div 
          className="rondell-stage-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* NAVIGATION ARROW LEFT */}
          <button 
            onClick={prevSlide}
            className="rondell-nav-arrow left"
            aria-label="Vorherige Problemstellung"
          >
            <ChevronLeft size={26} />
          </button>

          {/* RONDELL CAROUSEL TRACK */}
          <div className="rondell-track">
            {pillars.map((pillar, index) => {
              const offset = (index - activeIndex + total) % total;
              let positionClass = 'rondell-card hidden';

              if (offset === 0) {
                positionClass = 'rondell-card active-center';
              } else if (offset === 1) {
                positionClass = 'rondell-card next-right';
              } else if (offset === total - 1) {
                positionClass = 'rondell-card prev-left';
              }

              return (
                <div
                  key={pillar.id}
                  className={positionClass}
                  onClick={() => {
                    if (offset === 1) nextSlide();
                    if (offset === total - 1) prevSlide();
                    if (offset === 0) onOpenLeadFunnel(pillar.title);
                  }}
                >
                  <div className="atelier-card-inner">
                    
                    {/* LARGE IMAGE WRAPPER (TOP - CLEAN, NO OVERLAY TEXT) */}
                    <div className="atelier-card-image-wrap">
                      <img 
                        src={pillar.image} 
                        alt={pillar.imageAlt}
                        className="atelier-card-img"
                      />
                    </div>

                    {/* CARD BODY */}
                    <div className="atelier-card-body">
                      <div>
                        {/* PROBLEM TITLE */}
                        <h3 className="atelier-card-title">
                          {pillar.title}
                        </h3>

                        {/* DAS PROBLEM */}
                        <div className="atelier-problem-box">
                          <strong className="atelier-problem-label">
                            Das Problem:
                          </strong>
                          <span className="atelier-problem-text">
                            {pillar.problemText}
                          </span>
                        </div>
                      </div>

                      {/* MEISTER SPECS & ACTION */}
                      <div className="atelier-specs-wrapper">
                        <div className="atelier-specs-list">
                          {pillar.specs.map((spec, i) => (
                            <div key={i} className="atelier-spec-row">
                              <Check size={16} color="#C96A00" style={{ flexShrink: 0 }} />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>

                        <div className="atelier-action-link">
                          <span>Lösung unverbindlich anfragen</span>
                          <ArrowRight size={16} className="atelier-arrow-icon" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NAVIGATION ARROW RIGHT */}
          <button 
            onClick={nextSlide}
            className="rondell-nav-arrow right"
            aria-label="Nächste Problemstellung"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* PAGINATION DOTS & TIME PROGRESS BAR (CLEAN, NO EXTRA TEXT) */}
        <div className="rondell-controls-bar">
          <div className="rondell-dots-wrapper">
            {pillars.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rondell-dot ${activeIndex === i ? 'active' : ''}`}
                aria-label={`Problem ${i + 1}`}
              >
                {activeIndex === i && !isPaused && (
                  <span className="rondell-dot-progress" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* BOTTOM LUXURY CALLOUT BANNER - HOCHWERTIG FORMATIERT */}
        <div style={{
          marginTop: '44px',
          background: '#FFFFFF',
          border: '1.5px solid #E8E2D5',
          borderRadius: '20px',
          padding: '36px 44px',
          maxWidth: '1080px',
          margin: '44px auto 0 auto',
          boxShadow: '0 12px 36px rgba(17, 21, 28, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(201, 106, 0, 0.08)',
              color: '#C96A00',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              <Sparkles size={14} />
              <span>Persönliche Meisterberatung</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.25, marginBottom: '8px' }}>
              Sie planen einen Neubau oder eine Sanierung?
            </h3>
            <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.6 }}>
              Wir beraten Sie gerne unverbindlich vor Ort bei Ihnen oder in unserer Meisterwerkstatt in Balge-Blenhorst.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
              className="btn-secondary"
              style={{ padding: '14px 22px', fontSize: '0.94rem' }}
            >
              <Phone size={16} color="#C96A00" />
              <span>05022 / 633</span>
            </a>

            <button
              onClick={() => onOpenLeadFunnel()}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '0.96rem' }}
            >
              <span>Kostenloses Vor-Ort-Aufmaß anfragen</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
