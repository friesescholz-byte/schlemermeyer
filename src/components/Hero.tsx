import React from 'react';
import { 
  ArrowRight, 
  Star, 
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenLeadFunnel: (serviceTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadFunnel }) => {
  const heroImage = 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/Hero_Schlemermeyer_ergebnis.webp';

  return (
    <section 
      className="stepped-split-hero-section fixed-bg"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      
      {/* 2. LEFT SIDE FROSTED GLASS OVERLAY WITH STEPPED STAIR CUT */}
      <div className="stepped-frosted-overlay">
        
        {/* GOLD / WOOD ACCENT STAIR-STEPPED CUT SVG BORDER */}
        <div className="stair-cut-edge-accent" aria-hidden="true">
          <svg 
            className="stair-cut-svg" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            {/* Feine architektonische Treppenkontur-Kantenlinie */}
            <polyline 
              points="
                56,0 
                56,16.66 
                54,16.66 
                54,33.33 
                52,33.33 
                52,50 
                50,50 
                50,66.66 
                48,66.66 
                48,83.33 
                46,83.33 
                46,100
              "
              fill="none" 
              stroke="rgba(201, 106, 0, 0.55)" 
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
            />
            {/* Warmer Gold-Glanz entlang der Kante */}
            <polyline 
              points="
                56,0 
                56,16.66 
                54,16.66 
                54,33.33 
                52,33.33 
                52,50 
                50,50 
                50,66.66 
                48,66.66 
                48,83.33 
                46,83.33 
                46,100
              "
              fill="none" 
              stroke="rgba(254, 240, 138, 0.85)" 
              strokeWidth="0.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

      </div>

      {/* 3. HERO CONTENT STAGE */}
      <div className="hero-stage-container">
        
        {/* LEFT COLUMN: CRISP TYPOGRAPHY OVER FROSTED GLASS */}
        <div className="hero-text-column">
          <div className="hero-text-wrapper">
            
            {/* EYEBROW BADGE */}
            <div className="hero-eyebrow-pill">
              <Sparkles size={14} color="#C96A00" />
              <span>Meisterwerkstatt in Balge seit 1883 • 4. Generation</span>
            </div>

            {/* HEADLINE */}
            <h1 className="hero-split-headline">
              Massivholz-Treppen &amp; Böden{' '}
              <span className="wood-highlight-text">
                mit meisterhafter Präzision.
              </span>
            </h1>

            {/* SUBLINE - PUNCHY & SCHNELL ERFASSBAR */}
            <p className="hero-split-subline">
              Individuelle Maßtreppen und edle Böden aus echtem Meisterholz – 
              dauerhaft knarrfrei, maßgefertigt in Balge und mit{' '}
              <strong>100% Festpreis- &amp; Termingarantie</strong>.
            </p>

            {/* ACTION BUTTON */}
            <div className="hero-actions-row">
              <button 
                onClick={() => onOpenLeadFunnel()}
                className="btn-primary hero-main-cta"
              >
                <span>Kostenloses Vor-Ort-Aufmaß anfragen</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* GOOGLE REVIEWS PILL */}
            <div className="hero-google-row">
              <a
                href={COMPANY_INFO.contact.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-google-badge"
                title="Google-Bewertungen aufrufen"
              >
                <div className="hero-google-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#C96A00" color="#C96A00" />
                  ))}
                </div>
                <span className="hero-google-text">
                  <strong>5.0 / 5</strong> Google-Bewertungen
                </span>
              </a>
            </div>

            {/* METRICS ROW - GROSS & SOFORT SICHTBAR */}
            <div className="hero-metrics-grid">
              <div className="hero-metric-box">
                <div className="metric-number">1883</div>
                <div className="metric-label">Gegründet in Balge</div>
              </div>
              <div className="hero-metric-box">
                <div className="metric-number">100%</div>
                <div className="metric-label">Eigene Fertigung</div>
              </div>
              <div className="hero-metric-box">
                <div className="metric-number">60 mm</div>
                <div className="metric-label">Massive Stufen</div>
              </div>
              <div className="hero-metric-box">
                <div className="metric-number">4. Gen.</div>
                <div className="metric-label">Innungs-Meister</div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: TRANSPARENT VIEWPORT LETTING THE ORIGINAL PHOTO SHINE IN FULL BRILLIANCE */}
        <div className="hero-photo-showcase-column" />

      </div>

      {/* =========================================================================
          CARPENTER TRANSITION DIVIDER
          ========================================================================= */}
      <div className="hero-carpenter-transition light">
        
        {/* CARPENTER MEASUREMENT SCALE (MILLIMETER TICK MARKS) */}
        <div className="carpenter-scale-line light">
          {[...Array(24)].map((_, i) => (
            <div key={i} className={`scale-tick light ${i % 5 === 0 ? 'major' : ''}`}>
              {i % 5 === 0 && <span className="scale-num light">{i * 50}</span>}
            </div>
          ))}
        </div>

        {/* ARCHITECTURAL WOODEN BEVEL & CONTOUR SVG CUT */}
        <svg 
          className="carpenter-contour-svg"
          viewBox="0 0 1440 110" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 45L480 85L960 30L1440 75V110H0V45Z" 
            fill="rgba(201, 106, 0, 0.05)" 
          />
          <path 
            d="M0 60L520 95L1020 50L1440 85V110H0V60Z" 
            fill="rgba(201, 106, 0, 0.1)" 
          />
          <path 
            d="M0 78L600 105L1200 68L1440 92V110H0V78Z" 
            fill="#FAF8F5" 
          />
        </svg>

      </div>

    </section>
  );
};
