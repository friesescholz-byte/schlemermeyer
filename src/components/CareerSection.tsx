import React from 'react';
import { 
  Briefcase, 
  Clock, 
  Wrench, 
  Euro, 
  Heart, 
  GraduationCap, 
  Coffee, 
  ArrowRight, 
  CheckCircle2, 
  Users,
  Sparkles
} from 'lucide-react';
import { CAREER_BENEFITS } from '../data/content';

interface CareerSectionProps {
  onNavigateToJobs: () => void;
}

export const CareerSection: React.FC<CareerSectionProps> = ({ onNavigateToJobs }) => {
  const iconMap: Record<string, any> = {
    Clock,
    Wrench,
    Euro,
    Heart,
    GraduationCap,
    Coffee
  };

  // Modernes Werkstatt- & Teambild aus Balge
  const teamImageUrl = 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0163-1-scaled_ergebnis.webp';
  // Standort-Hintergrundbild
  const locationBgUrl = 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0050_ergebnis.webp';

  return (
    <section 
      className="career-location-parallax-section" 
      id="karriere"
      style={{ backgroundImage: `url(${locationBgUrl})` }}
    >
      {/* FROSTED GLASS & WARM OVERLAY FÜR MAXIMALE LESBARKEIT */}
      <div className="career-parallax-overlay" />

      <div className="container-custom" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* SECTION HEADER IN EDLEM FROSTED GLASS CONTAINER */}
        <div className="career-header-glass-card">
          <div className="badge-pill amber" style={{ background: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <Briefcase size={14} />
            <span>Karriere &amp; Handwerk in Balge</span>
          </div>
          <h2>
            Handwerk mit Zukunft. <br />
            <span className="wood-highlight-text font-serif-accent">
              Werde Teil unseres Meisterteams.
            </span>
          </h2>
          <p>
            Bei uns bist du keine anonyme Personalnummer. Wir bieten dir echte Wertschätzung, modernste Maschinen und spannende Projekte im exklusiven Treppenbau und Innenausbau.
          </p>
        </div>

        {/* 6 BENEFITS GRID */}
        <div className="career-benefits-grid" style={{ marginBottom: '36px' }}>
          {CAREER_BENEFITS.map((b, i) => {
            const Icon = iconMap[b.icon] || CheckCircle2;
            return (
              <div key={i} className="career-benefit-card" style={{ padding: '22px 20px' }}>
                <div className="benefit-icon-box">
                  <Icon size={22} color="#C96A00" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                    {b.title}
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.55 }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* TEASER SHOWCASE MIT TEAMBILD & DIREKTVERLINKUNG ZUR JOB-SEITE */}
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid #E8E2D5',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(17,21,28,0.06)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          alignItems: 'stretch'
        }}>
          
          {/* LINKER INHALTSBEREICH */}
          <div style={{
            padding: '44px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(201,106,0,0.08)',
                border: '1px solid rgba(201,106,0,0.25)',
                color: '#C96A00',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                <Users size={14} />
                <span>4. Generation Meisterwerkstatt</span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.25, marginBottom: '16px' }}>
                Lust auf echte Holzleidenschaft &amp; ein starkes Team?
              </h3>

              <p style={{ fontSize: '1.02rem', color: '#334155', lineHeight: 1.65, marginBottom: '24px' }}>
                Egal ob erfahrener Tischlergeselle, Meister oder motivierter Quereinsteiger: Bei uns arbeitest du an anspruchsvollen Massivholztreppen und edlen Böden – mit <strong>100% eigener Fertigung in Balge</strong> und modernsten Hebehilfen.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#0F172A', fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#C96A00" style={{ flexShrink: 0 }} />
                  <span>Kein Anschreiben nötig</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#0F172A', fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#C96A00" style={{ flexShrink: 0 }} />
                  <span>4-Tage-Woche (Mo–Do)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#0F172A', fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#C96A00" style={{ flexShrink: 0 }} />
                  <span>Überdurchschnittliches Gehalt</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#0F172A', fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#C96A00" style={{ flexShrink: 0 }} />
                  <span>Bezahlte Fahrtzeiten</span>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION: DIREKT ZUR JOBSEITE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
              <button
                onClick={onNavigateToJobs}
                className="btn-primary"
                style={{ padding: '14px 28px' }}
              >
                <span>Alle offenen Stellenangebote ansehen</span>
                <ArrowRight size={18} />
              </button>
              
              <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600 }}>
                Bewerbung in unter 60 Sekunden möglich
              </span>
            </div>

          </div>

          {/* RECHTER BILD-BEREICH: TEAM- & WERKSTATTFOTO */}
          <div style={{
            position: 'relative',
            minHeight: '380px',
            background: '#0E1218',
            overflow: 'hidden'
          }}>
            <img 
              src={teamImageUrl} 
              alt="Meisterteam Tischlerei Dirk Schlemermeyer Balge" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* Sanfter Farbverlauf am Bildrand */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)',
              pointerEvents: 'none'
            }} />

            {/* FLOATING BADGE ÜBER DEM BILD */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              left: '20px',
              background: 'rgba(255,255,255,0.94)',
              backdropFilter: 'blur(10px)',
              border: '1.5px solid rgba(201,106,0,0.3)',
              borderRadius: '12px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 10px 24px rgba(0,0,0,0.2)'
            }}>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#11151C' }}>
                  Werkstatt &amp; Meisterteam Balge
                </div>
                <div style={{ fontSize: '0.76rem', color: '#64748B', fontWeight: 600 }}>
                  Traditionelle Handwerkskunst seit 1883
                </div>
              </div>
              <Sparkles size={20} color="#C96A00" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
