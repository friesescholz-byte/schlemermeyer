import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Briefcase 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: any, sectionId?: string) => void;
  onOpenLeadFunnel: () => void;
  onOpenJobModal: () => void;
}

// 1. Innenausbau: Feine Treppenstufen & Raumarchitektur
const InnenausbauIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 20h18" />
    <path d="M4 16h4v-4h4V8h4V4h4" />
    <path d="M4 20v-4" />
  </svg>
);

// 2. Zimmerei: Authentisches Dachstuhl-Holzstrebwerk (Dachabbund / Kehlbalkenbinder)
const ZimmereiTrussIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20h20" />
    <path d="M12 3L2 20" />
    <path d="M12 3l10 20" />
    <path d="M6 14h12" />
    <path d="M12 3v17" />
  </svg>
);

// 3. Dachdeckerei: Schützendes Dach mit Ziegelschichten
const DachdeckereiIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 10L12 2l10 8" />
    <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
    <path d="M7 10h10" />
    <path d="M6 14h12" />
    <path d="M7 18h10" />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenLeadFunnel, 
  onOpenJobModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: any, sectionId?: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(page, sectionId);
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
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

              {/* LEISTUNGEN WITH HOVER DROPDOWN TO 3 SUBPAGES */}
              <li 
                className="header-dropdown-parent"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <a
                  href="#leistungen"
                  onClick={(e) => handleNavClick(e, 'home', 'leistungen')}
                  className={`header-nav-link dropdown-trigger ${currentPage.startsWith('service-') ? 'active' : ''}`}
                >
                  <span>Leistungen</span>
                  <ChevronDown size={14} className={`dropdown-chevron-icon ${servicesDropdownOpen ? 'rotated' : ''}`} />
                </a>

                {servicesDropdownOpen && (
                  <div className="services-desktop-dropdown-card">
                    
                    <a
                      href="#"
                      onClick={(e) => handleNavClick(e, 'service-innenausbau')}
                      className={`dropdown-item-row ${currentPage === 'service-innenausbau' ? 'active' : ''}`}
                    >
                      <div className="dropdown-item-icon">
                        <InnenausbauIcon size={20} />
                      </div>
                      <div className="dropdown-item-text">
                        <strong className="dropdown-item-title">Innenausbau &amp; Tischlerei</strong>
                        <span className="dropdown-item-sub">Treppen, Böden, Türen, Fenster &amp; Sonnenschutz</span>
                      </div>
                      <ChevronRight size={15} className="dropdown-item-arrow" />
                    </a>

                    <a
                      href="#"
                      onClick={(e) => handleNavClick(e, 'service-zimmerei')}
                      className={`dropdown-item-row ${currentPage === 'service-zimmerei' ? 'active' : ''}`}
                    >
                      <div className="dropdown-item-icon">
                        <ZimmereiTrussIcon size={20} />
                      </div>
                      <div className="dropdown-item-text">
                        <strong className="dropdown-item-title">Zimmerei &amp; Holzbau</strong>
                        <span className="dropdown-item-sub">Dachstühle, Holzrahmenbau, Carports &amp; Gauben</span>
                      </div>
                      <ChevronRight size={15} className="dropdown-item-arrow" />
                    </a>

                    <a
                      href="#"
                      onClick={(e) => handleNavClick(e, 'service-dachdeckerei')}
                      className={`dropdown-item-row ${currentPage === 'service-dachdeckerei' ? 'active' : ''}`}
                    >
                      <div className="dropdown-item-icon">
                        <DachdeckereiIcon size={20} />
                      </div>
                      <div className="dropdown-item-text">
                        <strong className="dropdown-item-title">Dachdeckerei &amp; Dachsanierung</strong>
                        <span className="dropdown-item-sub">Steildach, Flachdach, Dämmung &amp; Dachfenster</span>
                      </div>
                      <ChevronRight size={15} className="dropdown-item-arrow" />
                    </a>

                    <div className="dropdown-footer-link">
                      <a 
                        href="#leistungen" 
                        onClick={(e) => handleNavClick(e, 'home', 'leistungen')}
                      >
                        <span>Alle 3 Kernbereiche im Überblick &rarr;</span>
                      </a>
                    </div>

                  </div>
                )}
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

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="mobile-hamburger-btn"
                aria-label="Menü öffnen"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileOpen && (
          <div className="mobile-nav-drawer">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'home')}
              className="mobile-nav-item"
            >
              <span>Startseite</span>
              <ChevronRight size={18} color="#94A3B8" />
            </a>

            {/* MOBILE LEISTUNGEN ACCORDION */}
            <div className="mobile-nav-services-group">
              <div 
                className="mobile-nav-item services-parent"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span style={{ fontWeight: 800 }}>Leistungen (3 Hauptbereiche)</span>
                <ChevronDown 
                  size={18} 
                  color="#C96A00" 
                  style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                />
              </div>

              {mobileServicesOpen && (
                <div className="mobile-subservices-list">
                  <a
                    href="#"
                    onClick={(e) => handleNavClick(e, 'service-innenausbau')}
                    className="mobile-subservice-link"
                  >
                    <InnenausbauIcon size={18} />
                    <span>Innenausbau &amp; Tischlerei</span>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleNavClick(e, 'service-zimmerei')}
                    className="mobile-subservice-link"
                  >
                    <ZimmereiTrussIcon size={18} />
                    <span>Zimmerei &amp; Holzbau</span>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleNavClick(e, 'service-dachdeckerei')}
                    className="mobile-subservice-link"
                  >
                    <DachdeckereiIcon size={18} />
                    <span>Dachdeckerei &amp; Dachsanierung</span>
                  </a>
                </div>
              )}
            </div>

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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
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
