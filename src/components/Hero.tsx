import React from 'react';
import { 
  ArrowRight, 
  Sparkles,
  Briefcase,
  Phone,
  Mail
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenLeadFunnel: (serviceTitle?: string) => void;
  onNavigateToJobs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadFunnel, onNavigateToJobs }) => {
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
              <span>Meisterwerkstatt in Balge seit 1883</span>
            </div>

            {/* HEADLINE */}
            <h1 className="hero-split-headline">
              Treppen, Böden &amp; Innenausbau{' '}
              <span className="wood-highlight-text">
                mit meisterhafter Präzision.
              </span>
            </h1>

            {/* SUBLINE - PUNCHY & SCHNELL ERFASSBAR */}
            <p className="hero-split-subline">
              Von individuellen Maßtreppen und edlen Holzböden bis hin zu Innentüren, Fenstern und Sonnenschutz – 
              meisterhaft gefertigt in Balge mit <strong>100% Festpreis- &amp; Termingarantie</strong>.
            </p>

            {/* ACTION BUTTON */}
            <div className="hero-actions-row">
              <button 
                onClick={() => onOpenLeadFunnel()}
                className="btn-primary hero-main-cta"
              >
                <span>Projekt unverbindlich anfragen</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* QUIET & AIRY SECONDARY LINKS (UNOBTRUSIVE JOB LINK & DIRECT CONTACT) */}
            <div className="hero-secondary-meta">
              <div className="hero-job-inline">
                <button
                  onClick={onNavigateToJobs}
                  className="hero-job-text-link"
                >
                  <Briefcase size={14} className="hero-job-icon" />
                  <span>Wir suchen Verstärkung:</span>
                  <span className="hero-job-highlight">Offene Stellen entdecken &rarr;</span>
                </button>
              </div>

              <div className="hero-contact-inline-bar">
                <a 
                  href={`tel:${COMPANY_INFO.contact.phoneCallable}`} 
                  className="hero-contact-link"
                  title="Jetzt anrufen"
                >
                  <Phone size={13} color="#C96A00" />
                  <span>{COMPANY_INFO.contact.phone}</span>
                </a>
                <span className="hero-meta-dot">•</span>
                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`} 
                  className="hero-contact-link"
                  title="E-Mail senden"
                >
                  <Mail size={13} color="#C96A00" />
                  <span>{COMPANY_INFO.contact.email}</span>
                </a>
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
