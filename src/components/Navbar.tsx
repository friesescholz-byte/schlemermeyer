import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Award, ChevronRight, Briefcase, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'jobs';
  onNavigate: (page: 'home' | 'about' | 'jobs', sectionId?: string) => void;
  onOpenLeadFunnel: () => void;
  onOpenJobModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenLeadFunnel, 
  onOpenJobModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: 'home' | 'about' | 'jobs', sectionId?: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <>
      {/* MAIN HEADER */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-custom">
          <div className="header-container">
            
            {/* LOGO */}
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="header-logo-wrap"
            >
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt={COMPANY_INFO.name} 
                className="header-logo-img"
              />
            </a>

            {/* DESKTOP NAV LINKS */}
            <ul className="header-nav-menu">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className={`header-nav-link ${currentPage === 'home' ? 'active' : ''}`}
                >
                  Startseite
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  onClick={(e) => handleNavClick(e, 'home', 'leistungen')}
                  className="header-nav-link"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  onClick={(e) => handleNavClick(e, 'home', 'galerie')}
                  className="header-nav-link"
                >
                  Referenzen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className={`header-nav-link ${currentPage === 'about' ? 'active' : ''}`}
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, 'jobs')}
                  className={`header-nav-link jobs-badge ${currentPage === 'jobs' ? 'active' : ''}`}
                >
                  <Briefcase size={14} color="#C96A00" />
                  <span>Jobangebote</span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, 'home', 'faq')}
                  className="header-nav-link"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  onClick={(e) => handleNavClick(e, 'home', 'kontakt')}
                  className="header-nav-link"
                >
                  Kontakt
                </a>
              </li>
            </ul>

            {/* RIGHT ACTIONS */}
            <div className="header-nav-actions">
              <a
                href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
                className="header-phone-callout"
              >
                <Phone size={14} color="#C96A00" />
                <span>05022 / 633</span>
              </a>

              <button
                onClick={onOpenLeadFunnel}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.88rem' }}
              >
                <span>Projekt anfragen</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="header-mobile-toggle"
              aria-label="Menü"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileOpen && (
          <div className="mobile-navigation-drawer">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'home')}
              className="mobile-nav-item"
            >
              <span>Startseite</span>
              <ChevronRight size={18} color="#94A3B8" />
            </a>
            <a
              href="#leistungen"
              onClick={(e) => handleNavClick(e, 'home', 'leistungen')}
              className="mobile-nav-item"
            >
              <span>Leistungen</span>
              <ChevronRight size={18} color="#94A3B8" />
            </a>
            <a
              href="#galerie"
              onClick={(e) => handleNavClick(e, 'home', 'galerie')}
              className="mobile-nav-item"
            >
              <span>Referenzen &amp; Galerie</span>
              <ChevronRight size={18} color="#94A3B8" />
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'about')}
              className="mobile-nav-item"
            >
              <span>Über uns</span>
              <ChevronRight size={18} color="#94A3B8" />
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'jobs')}
              className="mobile-nav-item"
              style={{ color: '#C96A00', fontWeight: 700 }}
            >
              <span>Jobangebote &amp; Karriere</span>
              <ChevronRight size={18} color="#C96A00" />
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'home', 'faq')}
              className="mobile-nav-item"
            >
              <span>Häufige Fragen (FAQ)</span>
              <ChevronRight size={18} color="#94A3B8" />
            </a>
            <a
              href="#kontakt"
              onClick={(e) => handleNavClick(e, 'home', 'kontakt')}
              className="mobile-nav-item"
            >
              <span>Kontakt &amp; Standort</span>
              <ChevronRight size={18} color="#94A3B8" />
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenLeadFunnel();
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Kostenloses Angebot anfragen</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenJobModal();
                }}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', borderColor: '#C96A00', color: '#C96A00' }}
              >
                <span>Schnellbewerbung (60 Sek.)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
