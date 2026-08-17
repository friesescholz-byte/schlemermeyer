import React from 'react';
import { Award, Phone, Mail, MapPin, ArrowUp, Star, ExternalLink, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz' | 'barrierefreiheit') => void;
  onOpenLeadFunnel: () => void;
  onNavigate: (page: 'home' | 'about' | 'jobs', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenLeadFunnel, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      
      {/* 1. ELEGANT CALLOUT BANNER */}
      <div className="footer-callout">
        <div className="container-custom">
          <div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              Bereit für Ihren starken Auftritt mit echtem Meisterholz?
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', marginTop: '4px' }}>
              Kostenloses Vor-Ort-Aufmaß &amp; 3D-Visualisierung für Nienburg, Hannover, Bremen &amp; Region.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
              className="btn-secondary"
              style={{ 
                padding: '12px 22px', 
                fontSize: '0.9rem', 
                background: 'rgba(255, 255, 255, 0.08)', 
                color: '#FFFFFF', 
                borderColor: 'rgba(255, 255, 255, 0.2)' 
              }}
            >
              <Phone size={15} color="#FBBF24" />
              <span>05022 / 633</span>
            </a>
            
            <button
              onClick={onOpenLeadFunnel}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              <span>Projekt jetzt anfragen</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER (AUFGERÄUMT & KONTRASTSTARK) */}
      <div className="container-custom">
        <div className="footer-main-grid-clean">
          
          {/* COL 1: UNTERNEHMEN & MEISTERBETRIEB */}
          <div className="footer-brand-col">
            <img 
              src={COMPANY_INFO.logoUrl} 
              alt={COMPANY_INFO.name} 
              className="footer-logo-img"
            />
            <p className="footer-about-text">
              Die Tischlerei Dirk Schlemermeyer GmbH ist Ihr meistergeführter Spezialist für exklusiven Treppenbau, hochwertige Parkettböden und langlebige Meisterholz-Unikate seit 1883 in Balge.
            </p>
            <div className="footer-guild-badge">
              <Award size={18} color="#FBBF24" />
              <span>Eingetragener Meisterbetrieb der Tischlerinnung</span>
            </div>
          </div>

          {/* COL 2: UNTERSEITEN & NAVIGATION */}
          <div className="footer-links-col">
            <h4>Seiten &amp; Bereiche</h4>
            <ul className="footer-clean-nav-list">
              <li>
                <button onClick={() => onNavigate('home')} className="footer-nav-btn">
                  Startseite &amp; Leistungsübersicht
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="footer-nav-btn">
                  Über uns (Tradition seit 1883)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('jobs')} className="footer-nav-btn highlight-job">
                  Karriere &amp; Jobangebote (Balge)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'galerie')} className="footer-nav-btn">
                  Referenz-Galerie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'kontakt')} className="footer-nav-btn">
                  Standort &amp; Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* COL 3: WERKSTATT, KONTAKT & GOOGLE REVIEWS */}
          <div className="footer-contact-col">
            <h4>Werkstatt &amp; Kontakt</h4>
            
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <MapPin size={16} color="#FBBF24" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Blenhorster Str. 7, 31609 Balge – Blenhorst</span>
              </div>
              
              <div className="footer-contact-row">
                <Phone size={16} color="#FBBF24" style={{ flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.contact.phoneCallable}`} className="footer-phone-link">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              
              <div className="footer-contact-row">
                <Mail size={16} color="#FBBF24" style={{ flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="footer-email-link">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="footer-opening-hours">
                Mo–Do: 07:30–16:30 Uhr &bull; Fr: 07:30–13:00 Uhr
              </div>
            </div>

            {/* GOOGLE BEWERTUNG BUTTON */}
            <div style={{ marginTop: '20px' }}>
              <a
                href={COMPANY_INFO.contact.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-google-review-card"
                title="Google-Bewertungen ansehen"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FBBF24' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FBBF24" stroke="#FBBF24" />
                  ))}
                  <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#FFFFFF', marginLeft: '4px' }}>5.0 / 5</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Google-Bewertungen ansehen</span>
                  <ExternalLink size={13} color="#CBD5E1" />
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* 3. RECHTLICHE FOOTER-LEISTE */}
      <div className="footer-bottom-bar">
        <div className="container-custom">
          <div style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
            &copy; 2026 {COMPANY_INFO.name}. Alle Rechte vorbehalten.
          </div>

          <div className="footer-legal-links-wrap">
            <button onClick={() => onOpenLegal('impressum')} className="footer-legal-link">
              Impressum
            </button>
            <span className="footer-legal-sep">&bull;</span>
            <button onClick={() => onOpenLegal('datenschutz')} className="footer-legal-link">
              Datenschutzerklärung
            </button>
            <span className="footer-legal-sep">&bull;</span>
            <button onClick={() => onOpenLegal('barrierefreiheit')} className="footer-legal-link">
              Barrierefreiheitserklärung
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="footer-scroll-top-btn"
            aria-label="Nach oben scrollen"
            title="Nach oben"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

    </footer>
  );
};
