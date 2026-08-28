import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { HelpCircle, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FaqProps {
  onOpenLeadFunnel: () => void;
}

export const FAQSection: React.FC<FaqProps> = ({ onOpenLeadFunnel }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-wrapper white" id="faq">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="badge-pill amber">
            <HelpCircle size={14} />
            <span>Häufige Fragen &amp; Antworten</span>
          </div>
          <h2>Alles, was Sie vor dem Projektstart wissen müssen.</h2>
          <p>
            Transparenz und ehrliche Beratung sind das Fundament unseres Betriebs seit 1883. Hier finden Sie direkte Antworten auf die wichtigsten Fragen.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="faq-list-wrap">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-card-item">
                <button
                  onClick={() => toggle(idx)}
                  className="faq-card-btn"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    color="#C96A00"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* HELP BOX */}
        <div style={{
          marginTop: '48px',
          background: '#FAF6EE',
          border: '1.5px solid #E2D7C3',
          borderRadius: '16px',
          padding: '28px 36px',
          maxWidth: '820px',
          margin: '48px auto 0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '4px' }}>
              Haben Sie eine spezifische Frage zu Ihrem Projekt?
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
              Rufen Sie uns direkt in der Werkstatt in Balge an oder nutzen Sie unseren Projekt-Assistenten.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
              className="btn-secondary"
              style={{ padding: '10px 18px', fontSize: '0.85rem' }}
            >
              <Phone size={14} color="#C96A00" />
              <span>05022 / 633</span>
            </a>

            <button
              onClick={onOpenLeadFunnel}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <span>Projekt anfragen</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
