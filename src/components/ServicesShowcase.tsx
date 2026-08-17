import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { CheckCircle2, ArrowRight, Layers, Hammer } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesShowcase: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section className="section-wrapper white" id="leistungen">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="badge-pill amber">
            <Layers size={14} />
            <span>Meisterliche Handwerksdisziplinen</span>
          </div>
          <h2>Ganzheitliche Holz- &amp; Raumkultur aus einer Hand.</h2>
          <p>
            Ob spektakuläre Treppenarchitektur, barfußfreundliche Parkettböden oder maßgefertigte Innentüren: Wir fertigen Unikate mit meisterhafter Präzision in eigener Werkstatt.
          </p>
        </div>

        {/* TABS BUTTONS */}
        <div className="services-tabs-wrap">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveServiceId(service.id)}
              className={`service-tab-btn ${activeServiceId === service.id ? 'active' : ''}`}
            >
              <span>{service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}</span>
            </button>
          ))}
        </div>

        {/* FEATURED SERVICE CARD */}
        <div className="service-featured-card">
          
          {/* IMAGE */}
          <div className="service-featured-img">
            <img
              src={activeService.image}
              alt={activeService.title}
            />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              background: 'rgba(18, 21, 27, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '12px 18px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#FCD34D' }}>
                {activeService.subtitle}
              </span>
              <p style={{ fontSize: '0.88rem', fontWeight: 700, marginTop: '2px' }}>
                Individuell geplant &amp; gefertigt in Balge
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="service-featured-content">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800, color: '#C96A00', textTransform: 'uppercase', marginBottom: '8px' }}>
                <Hammer size={14} />
                <span>Maßarbeit nach Ihren Wünschen</span>
              </div>

              <h3>{activeService.title}</h3>

              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                {activeService.description}
              </p>

              {/* FEATURES */}
              <div className="service-features-list">
                <p style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#11141A', letterSpacing: '0.04em' }}>
                  Ihre Vorteile &amp; Ausführungsdetails:
                </p>
                {activeService.features.map((feat, i) => (
                  <div key={i} className="service-feature-row">
                    <CheckCircle2 size={16} color="#C96A00" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* MATERIALS */}
              <div style={{ marginTop: '20px' }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#11141A', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Beliebte Materialien &amp; Hölzer:
                </p>
                <div className="material-tags-row">
                  {activeService.materials.map((mat, i) => (
                    <span key={i} className="material-tag">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ACTION */}
            <div style={{ 
              paddingTop: '24px', 
              borderTop: '1px solid #E8E2D5', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                Kostenloses Vor-Ort-Aufmaß inklusive
              </span>

              <button
                onClick={() => onSelectService(activeService.title)}
                className="btn-primary"
              >
                <span>{activeService.title.split(' ')[0]} jetzt anfragen</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

        {/* 4 MINI CARDS */}
        <div className="services-cards-grid" id="treppenarten">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setActiveServiceId(srv.id)}
              className={`service-mini-card ${activeServiceId === srv.id ? 'active' : ''}`}
            >
              <div>
                <div className="service-mini-img">
                  <img src={srv.image} alt={srv.title} />
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: '6px' }}>
                  {srv.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, marginBottom: '14px' }}>
                  {srv.subtitle}
                </p>
              </div>

              <div style={{ 
                paddingTop: '10px', 
                borderTop: '1px solid #F1F5F9', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                color: '#C96A00',
                fontSize: '0.82rem',
                fontWeight: 700
              }}>
                <span>Details ansehen</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
