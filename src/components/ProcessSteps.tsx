import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Compass, Box, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenLeadFunnel: () => void;
}

export const ProcessSteps: React.FC<ProcessProps> = ({ onOpenLeadFunnel }) => {
  const icons = [Compass, Box, Hammer, CheckCircle2];

  return (
    <section className="section-wrapper white" id="ablauf">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="badge-pill amber">
            <Compass size={14} />
            <span>Transparenter Ablauf</span>
          </div>
          <h2>In 4 Schritten zu Ihrem maßgefertigten Ergebnis.</h2>
          <p>
            Vom ersten unverbindlichen Aufmaß bis zur sauberen Montage bei Ihnen vor Ort: Wir garantieren einen reibungslosen, verlässlichen Ablauf ohne Stress.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="process-grid">
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = icons[idx] || CheckCircle2;
            return (
              <div key={item.step} className="process-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <span className="process-num">{item.step}</span>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#FFFFFF',
                      border: '1px solid #E8E2D5',
                      color: '#C96A00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid #EAE4D9', marginTop: '20px', fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8' }}>
                  Schritt {idx + 1} von 4
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTION */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            onClick={onOpenLeadFunnel}
            className="btn-primary"
          >
            <span>Jetzt unverbindlich Schritt 1 starten</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
