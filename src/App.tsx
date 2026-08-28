import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTeaser } from './components/AboutTeaser';
import { ProblemAgitateSolve } from './components/ProblemAgitateSolve';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { CareerSection } from './components/CareerSection';
import { LeadFunnel } from './components/LeadFunnel';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { JobsPage } from './components/JobsPage';
import { ServiceInnenausbauPage } from './components/ServiceInnenausbauPage';
import { ServiceZimmereiPage } from './components/ServiceZimmereiPage';
import { ServiceDachdeckereiPage } from './components/ServiceDachdeckereiPage';
import { AdminDashboard } from './components/AdminDashboard';
import { JobModal } from './components/JobModal';
import { LegalModal } from './components/LegalModal';
import { Phone, ArrowRight, X } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export type AppCurrentPage = 
  | 'home' 
  | 'about' 
  | 'jobs' 
  | 'service-innenausbau' 
  | 'service-zimmerei' 
  | 'service-dachdeckerei'
  | 'admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppCurrentPage>('home');
  
  // Modals
  const [funnelModalOpen, setFunnelModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | undefined>(undefined);
  
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | 'barrierefreiheit' | null>(null);

  // ROUTE DETECTION (/admin or #/admin)
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = window.location.search;
      if (path.includes('/admin') || hash.includes('/admin') || search.includes('admin')) {
        setCurrentPage('admin');
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  const handleNavigate = (page: AppCurrentPage, sectionId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'admin') {
      window.history.pushState(null, '', '/admin');
    } else if (page === 'home' && window.location.pathname.includes('/admin')) {
      window.history.pushState(null, '', '/');
    }

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
      
      {/* 1. TOPBAR & ELEGANT NAVBAR (HIDDEN ON ADMIN FOR MAXIMUM FOCUS) */}
      {currentPage !== 'admin' && (
        <Navbar 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenLeadFunnel={() => handleOpenLeadFunnel()}
          onOpenJobModal={() => handleOpenJobModal()}
        />
      )}

      {/* RENDER VIEW BASED ON CURRENT PAGE */}
      {currentPage === 'home' && (
        <>
          {/* 2. DESIGNER HERO */}
          <Hero 
            onOpenLeadFunnel={() => handleOpenLeadFunnel()} 
            onNavigateToJobs={() => handleNavigate('jobs')}
          />

          {/* 2.5 UNTERNEHMENSVORSTELLUNG / ÜBER UNS TEASER */}
          <AboutTeaser onNavigateToAbout={() => handleNavigate('about')} />

          {/* 3. PROBLEM - AGITATE - SOLVE */}
          <ProblemAgitateSolve onOpenLeadFunnel={() => handleOpenLeadFunnel()} />

          {/* 3.5 UNSERE 3 HAUPT-LEISTUNGEN */}
          <ServicesSection 
            onNavigateToService={(servicePage) => handleNavigate(servicePage)}
            onOpenLeadFunnel={(service) => handleOpenLeadFunnel(service)} 
          />

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

      {/* 3 DEDICATED SERVICE SUBPAGES */}
      {currentPage === 'service-innenausbau' && (
        <ServiceInnenausbauPage 
          onNavigate={handleNavigate}
          onOpenLeadFunnel={(srv) => handleOpenLeadFunnel(srv)}
        />
      )}

      {currentPage === 'service-zimmerei' && (
        <ServiceZimmereiPage 
          onNavigate={handleNavigate}
          onOpenLeadFunnel={(srv) => handleOpenLeadFunnel(srv)}
        />
      )}

      {currentPage === 'service-dachdeckerei' && (
        <ServiceDachdeckereiPage 
          onNavigate={handleNavigate}
          onOpenLeadFunnel={(srv) => handleOpenLeadFunnel(srv)}
        />
      )}

      {/* ADMIN DASHBOARD (/admin) */}
      {currentPage === 'admin' && (
        <AdminDashboard 
          onNavigateHome={() => handleNavigate('home')}
        />
      )}

      {/* FOOTER (HIDDEN ON ADMIN, CALLOUT SUPPRESSED ON SUBPAGES TO AVOID DUPLICATES) */}
      {currentPage !== 'admin' && (
        <Footer 
          onOpenLegal={(type) => setLegalModalType(type)}
          onOpenLeadFunnel={() => handleOpenLeadFunnel()}
          onNavigate={handleNavigate}
          hideCallout={currentPage !== 'home'}
        />
      )}

      {/* LEAD FUNNEL MODAL */}
      {funnelModalOpen && (
        <div className="lead-modal-backdrop" onClick={() => setFunnelModalOpen(false)}>
          <div className="lead-modal-box" onClick={(e) => e.stopPropagation()}>
            <LeadFunnel 
              initialService={preselectedService} 
              isModal={true}
              onClose={() => setFunnelModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* JOB APPLICATION MODAL */}
      {jobModalOpen && (
        <JobModal 
          initialJobId={selectedJobId}
          onClose={() => setJobModalOpen(false)}
        />
      )}

      {/* LEGAL MODALS */}
      {legalModalType && (
        <LegalModal 
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}

    </div>
  );
}
