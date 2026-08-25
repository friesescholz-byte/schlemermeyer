import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTeaser } from './components/AboutTeaser';
import { ProblemAgitateSolve } from './components/ProblemAgitateSolve';
import { GallerySection } from './components/GallerySection';
import { CareerSection } from './components/CareerSection';
import { LeadFunnel } from './components/LeadFunnel';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { JobsPage } from './components/JobsPage';
import { JobModal } from './components/JobModal';
import { LegalModal } from './components/LegalModal';
import { Phone, ArrowRight, X } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'jobs'>('home');
  
  // Modals
  const [funnelModalOpen, setFunnelModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | undefined>(undefined);
  
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | 'barrierefreiheit' | null>(null);

  const handleNavigate = (page: 'home' | 'about' | 'jobs', sectionId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenLeadFunnel = (service?: string) => {
    setPreselectedService(service);
    setFunnelModalOpen(true);
  };

  const handleOpenJobModal = (jobId?: string) => {
    setSelectedJobId(jobId);
    setJobModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FAF8F5' }}>
      
      {/* 1. TOPBAR & ELEGANT NAVBAR */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenLeadFunnel={() => handleOpenLeadFunnel()}
        onOpenJobModal={() => handleOpenJobModal()}
      />

      {/* RENDER VIEW BASED ON CURRENT PAGE */}
      {currentPage === 'home' && (
        <>
          {/* 2. DESIGNER HERO */}
          <Hero onOpenLeadFunnel={() => handleOpenLeadFunnel()} />

          {/* 2.5 UNTERNEHMENSVORSTELLUNG / ÜBER UNS TEASER */}
          <AboutTeaser onNavigateToAbout={() => handleNavigate('about')} />

          {/* 3. PROBLEM - AGITATE - SOLVE */}
          <ProblemAgitateSolve onOpenLeadFunnel={() => handleOpenLeadFunnel()} />

          {/* 4. GALLERY & REFERENCES */}
          <GallerySection onOpenLeadFunnel={(proj) => handleOpenLeadFunnel(proj)} />

          {/* 5. CAREER & EMPLOYER BRANDING TEASER */}
          <CareerSection onNavigateToJobs={() => handleNavigate('jobs')} />

          {/* 6. INTERACTIVE 3-STEP LEAD FUNNEL */}
          <LeadFunnel />

          {/* 7. FAQ ACCORDION */}
          <FAQSection onOpenLeadFunnel={() => handleOpenLeadFunnel()} />

          {/* 8. CONTACT & LOCATION */}
          <ContactSection onOpenLeadFunnel={() => handleOpenLeadFunnel()} />
        </>
      )}

      {currentPage === 'about' && (
        <AboutPage 
          onOpenLeadFunnel={() => handleOpenLeadFunnel()}
          onNavigateHome={() => handleNavigate('home')}
        />
      )}

      {currentPage === 'jobs' && (
        <JobsPage 
          onOpenJobModal={(jobId) => handleOpenJobModal(jobId)}
          onNavigateHome={() => handleNavigate('home')}
        />
      )}

      {/* FOOTER */}
      <Footer 
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenLeadFunnel={() => handleOpenLeadFunnel()}
        onNavigate={handleNavigate}
      />

      {/* FLOATING MOBILE BAR */}
      <div 
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid #E2E8F0',
          padding: '10px 16px',
          display: 'none',
          justifyContent: 'space-between',
          gap: '10px',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.1)'
        }}
        className="mobile-sticky-cta"
      >
        <a
          href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
          className="btn-secondary"
          style={{ flex: 1, padding: '10px', fontSize: '0.82rem', justifyContent: 'center' }}
        >
          <Phone size={14} color="#C96A00" />
          <span>05022 / 633</span>
        </a>
        <button
          onClick={() => handleOpenLeadFunnel()}
          className="btn-primary"
          style={{ flex: 1, padding: '10px', fontSize: '0.82rem', justifyContent: 'center' }}
        >
          <span>Angebot anfragen</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* MODAL: LEAD FUNNEL OVERLAY */}
      {funnelModalOpen && (
        <div className="modal-overlay" onClick={() => setFunnelModalOpen(false)}>
          <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px' }}>
            <button
              onClick={() => setFunnelModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 30,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#232A35',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
            <LeadFunnel 
              initialService={preselectedService} 
              isModal={true}
              onClose={() => setFunnelModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* MODAL: JOB / CAREER */}
      {jobModalOpen && (
        <JobModal
          initialJobId={selectedJobId}
          onClose={() => setJobModalOpen(false)}
        />
      )}

      {/* MODAL: LEGAL PAGES */}
      {legalModalType && (
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}

    </div>
  );
}
export default App;
