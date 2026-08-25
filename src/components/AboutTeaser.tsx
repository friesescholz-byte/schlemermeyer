import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AboutTeaserProps {
  onNavigateToAbout: () => void;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ onNavigateToAbout }) => {
  return (
    <section className="section-wrapper white" id="ueber-uns-teaser">
      <div className="container-custom">
        <div className="about-teaser-grid">
          
          {/* LEFT COLUMN: TEXT & INTRO */}
          <div className="about-teaser-text">
            <div className="badge-pill amber">
              <Sparkles size={14} />
              <span>Unternehmensvorstellung</span>
            </div>

            <h2 className="about-teaser-heading">
              Willkommen bei der <br />
              <span className="about-teaser-brand">Tischlerei Dirk Schlemermeyer</span>
            </h2>

            <p className="about-teaser-desc">
              Seit über 140 Jahren steht unser meistergeführter Familienbetrieb in Balge-Blenhorst 
              für anspruchsvollen Massivholz-Treppenbau, edle Parkettkultur und langlebigen Innenausbau 
              in der gesamten Region Nienburg, Hannover und Bremen.
            </p>

            <p className="about-teaser-subdesc">
              Mit persönlicher Beratung direkt durch Tischlermeister Dirk Schlemermeyer, modernem 3D-Aufmaß 
              und 100% eigener Fertigung in unserer Werkstatt schaffen wir Unikate, die Generationen überdauern – 
              garantiert knarrfrei und mit verlässlichen Festpreisen.
            </p>

            {/* 3 STATS / TRUST METRICS ROW */}
            <div className="about-teaser-stats-row">
              <div className="teaser-stat-item">
                <span className="teaser-stat-val">Seit 1883</span>
                <span className="teaser-stat-label">Meistertradition</span>
              </div>
              <div className="teaser-stat-item">
                <span className="teaser-stat-val">100%</span>
                <span className="teaser-stat-label">Eigene Werkstatt</span>
              </div>
              <div className="teaser-stat-item">
                <span className="teaser-stat-val">Innungs-</span>
                <span className="teaser-stat-label">Meisterbetrieb</span>
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="about-teaser-cta-wrap">
              <button 
                onClick={onNavigateToAbout}
                className="btn-secondary about-teaser-btn"
              >
                <span>Lernen Sie unsere Tischlerei kennen</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: IMAGE WITH FLOATING TRUST BADGE */}
          <div className="about-teaser-media-wrap">
            <div className="about-teaser-image-frame">
              <img 
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0163-1-scaled_ergebnis.webp" 
                alt="Meisterwerkstatt Tischlerei Schlemermeyer in Balge" 
                className="about-teaser-img"
              />
              <div className="about-teaser-floating-badge">
                <div className="floating-badge-number">140+</div>
                <div className="floating-badge-text">
                  <strong>Jahre Erfahrung</strong>
                  <span>Inhabergeführt in Balge</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
