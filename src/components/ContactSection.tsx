import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ContactProps {
  onOpenLeadFunnel: () => void;
}

export const ContactSection: React.FC<ContactProps> = ({ onOpenLeadFunnel }) => {
  return (
    <section className="section-wrapper" id="kontakt">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="badge-pill amber">
            <MapPin size={14} />
            <span>Standort &amp; Anfahrt</span>
          </div>
          <h2>Besuchen Sie uns in Balge-Blenhorst.</h2>
          <p>
            Direkt an der Weser im Landkreis Nienburg gelegen. Vereinbaren Sie vorab einen Termin für ein persönliches Beratungsgespräch oder Holzmuster-Bemusterung in unserer Werkstatt.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* CONTACT INFO */}
          <div className="contact-card-info">
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '2px' }}>
                Tischlerei Dirk Schlemermeyer GmbH
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#C96A00', fontWeight: 700 }}>
                Meisterbetrieb im Treppenbau &amp; Innenausbau seit 1883
              </p>

              <div className="contact-details-list">
                {/* ADRESSE */}
                <div className="contact-row-item">
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(201,106,0,0.1)', color: '#C96A00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: '#11141A' }}>Werkstatt &amp; Firmensitz:</strong>
                    <span style={{ fontSize: '0.85rem', color: '#4B5563' }}>{COMPANY_INFO.address.street}</span><br />
                    <span style={{ fontSize: '0.85rem', color: '#4B5563' }}>{COMPANY_INFO.address.city}</span><br />
                    <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>{COMPANY_INFO.address.region}</span>
                  </div>
                </div>

                {/* TELEFON */}
                <div className="contact-row-item">
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(201,106,0,0.1)', color: '#C96A00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: '#11141A' }}>Telefonischer Direktkontakt:</strong>
                    <a href={`tel:${COMPANY_INFO.contact.phoneCallable}`} style={{ fontSize: '0.95rem', color: '#C96A00', fontWeight: 800 }}>
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="contact-row-item">
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(201,106,0,0.1)', color: '#C96A00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: '#11141A' }}>E-Mail für Pläne &amp; Anfragen:</strong>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} style={{ fontSize: '0.85rem', color: '#4B5563' }}>
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                {/* HOURS */}
                <div className="contact-row-item" style={{ paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(201,106,0,0.1)', color: '#C96A00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: '#11141A', marginBottom: '2px' }}>Öffnungszeiten:</strong>
                    {COMPANY_INFO.openingHours.map((h, i) => (
                      <div key={i} style={{ fontSize: '0.82rem', color: '#64748B' }}>
                        <span style={{ fontWeight: 700, color: '#11141A' }}>{h.days}:</span> {h.hours}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenLeadFunnel}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
            >
              <span>Beratungstermin vereinbaren</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* MAP */}
          <div className="map-wrapper-box" style={{ minHeight: '440px' }}>
            <iframe
              title="Standort Tischlerei Dirk Schlemermeyer"
              src="https://maps.google.com/maps?q=Blenhorster%20Str.%207,%2031609%20Balge&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="map-iframe"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
