import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Phone, Send, Upload, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface LeadFunnelProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const LeadFunnel: React.FC<LeadFunnelProps> = ({ initialService, isModal = false, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    gewerk: initialService || 'Neuer Treppenbau',
    objektTyp: 'Neubau (Planung / Rohbau)',
    zeitrahmen: 'In 1-3 Monaten',
    name: '',
    telefon: '',
    email: '',
    ort: '',
    nachricht: ''
  });

  const services = [
    { id: 'treppe-neu', label: 'Neuer Treppenbau', icon: '🪜', desc: 'Faltwerk, Kragarm, Wangentreppe' },
    { id: 'treppe-sanierung', label: 'Treppen-Restauration', icon: '✨', desc: 'Aufbereitung & Knarrschutz' },
    { id: 'parkett', label: 'Parkett & Holzböden', icon: '🪵', desc: 'Verlegung & staubfreies Schleifen' },
    { id: 'tueren', label: 'Maßgefertigte Innentüren', icon: '🚪', desc: 'Design- & Altbautüren' },
    { id: 'fenster', label: 'Fenster & Sonnenschutz', icon: '🪟', desc: 'Wärmeschutz & Raffstores' }
  ];

  const objektTypes = [
    'Neubau (Planung / Rohbau)',
    'Altbau / Sanierung im Bestand',
    'Denkmalgeschütztes Gebäude',
    'Gewerbeobjekt / Architektenplanung'
  ];

  const timeframes = [
    'Schnellstmöglich',
    'In 1-3 Monaten',
    'In 3-6 Monaten',
    'Nur Vorab-Kalkulation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={isModal ? '' : 'section-wrapper white'} id="projekt-anfragen">
      <div className={isModal ? '' : 'container-custom'}>
        
        {!isModal && (
          <div className="section-header">
            <div className="badge-pill amber">
              <Sparkles size={14} />
              <span>In 3 Schritten zum Angebot</span>
            </div>
            <h2>Starten Sie jetzt Ihre kostenfreie Projektanfrage.</h2>
            <p>
              Beantworten Sie uns 3 kurze Fragen zu Ihrem Vorhaben. Wir melden uns innerhalb von 24 Stunden mit einer fundierten Ersteinschätzung und Termin für ein Vor-Ort-Aufmaß.
            </p>
          </div>
        )}

        <div className="funnel-container">
          
          {/* TOP BAR */}
          <div className="funnel-top-bar">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#FCD34D', letterSpacing: '0.05em' }}>
                  {submitted ? 'Anfrage erfolgreich' : `Schritt ${step} von 3`}
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 800, marginTop: '2px' }}>
                  {submitted 
                    ? 'Vielen Dank für Ihr Vertrauen!' 
                    : step === 1 
                      ? 'Welches Projekt möchten Sie umsetzen?' 
                      : step === 2 
                        ? 'Details zu Ihrem Gebäude & Zeitplan' 
                        : 'Ihre Kontaktdaten für die Ersteinschätzung'
                  }
                </h3>
              </div>

              {!submitted && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: step >= 1 ? '#C96A00' : '#232A35',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>1</span>
                  <span style={{ width: '12px', height: '2px', background: '#374151' }} />
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: step >= 2 ? '#C96A00' : '#232A35',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>2</span>
                  <span style={{ width: '12px', height: '2px', background: '#374151' }} />
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: step >= 3 ? '#C96A00' : '#232A35',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>3</span>
                </div>
              )}
            </div>

            {!submitted && (
              <div style={{ width: '100%', background: '#232A35', height: '4px', borderRadius: '9999px', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    width: `${(step / 3) * 100}%`, 
                    background: 'linear-gradient(90deg, #F59E0B, #C96A00)', 
                    height: '100%', 
                    transition: 'width 0.3s ease' 
                  }} 
                />
              </div>
            )}
          </div>

          {/* BODY */}
          <div className="funnel-body">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#D1FAE5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
                  Projektanfrage erfolgreich übermittelt!
                </h4>
                <p style={{ color: '#64748B', maxWidth: '460px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Vielen Dank, Herr/Frau <strong style={{ color: '#11141A' }}>{formData.name || 'Bauherr'}</strong>. Tischlermeister Dirk Schlemermeyer oder unser Meisterteam wird Ihre Angaben prüfen und sich schnellstmöglich bei Ihnen melden.
                </p>

                <div style={{
                  background: '#FFFFFF',
                  border: '1px solid #E8E2D5',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  maxWidth: '440px',
                  margin: '0 auto 24px auto',
                  textAlign: 'left',
                  fontSize: '0.85rem'
                }}>
                  <p><strong>Gewerk:</strong> {formData.gewerk}</p>
                  <p style={{ marginTop: '4px' }}><strong>Gebäudetyp:</strong> {formData.objektTyp}</p>
                  <p style={{ marginTop: '4px' }}><strong>Telefon:</strong> {formData.telefon || 'Wird geprüft'}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
                    className="btn-primary"
                  >
                    <Phone size={16} />
                    <span>Direkt anrufen: 05022 / 633</span>
                  </a>

                  {isModal && (
                    <button
                      onClick={onClose}
                      className="btn-secondary"
                    >
                      Fenster schließen
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                {/* STEP 1 */}
                {step === 1 && (
                  <div>
                    <p style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', marginBottom: '14px' }}>
                      Wählen Sie Ihr Hauptanliegen:
                    </p>
                    <div className="funnel-options-grid">
                      {services.map((srv) => (
                        <div
                          key={srv.id}
                          onClick={() => setFormData({ ...formData, gewerk: srv.label })}
                          className={`funnel-option-box ${formData.gewerk === srv.label ? 'active' : ''}`}
                        >
                          <span style={{ fontSize: '1.6rem' }}>{srv.icon}</span>
                          <div>
                            <p style={{ fontWeight: 800, fontSize: '0.92rem', color: '#11141A' }}>{srv.label}</p>
                            <p style={{ fontSize: '0.78rem', color: '#64748B' }}>{srv.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ paddingTop: '20px', borderTop: '1px solid #E8E2D5', display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-primary"
                      >
                        <span>Weiter zu Schritt 2</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div>
                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', marginBottom: '10px' }}>
                        Art des Gebäudes:
                      </label>
                      <div className="funnel-options-grid" style={{ margin: 0 }}>
                        {objektTypes.map((typ) => (
                          <div
                            key={typ}
                            onClick={() => setFormData({ ...formData, objektTyp: typ })}
                            className={`funnel-option-box ${formData.objektTyp === typ ? 'active' : ''}`}
                            style={{ padding: '14px' }}
                          >
                            <p style={{ fontWeight: 700, fontSize: '0.88rem' }}>{typ}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', marginBottom: '10px' }}>
                        Gewünschter Ausführungszeitraum:
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                        {timeframes.map((tf) => (
                          <div
                            key={tf}
                            onClick={() => setFormData({ ...formData, zeitrahmen: tf })}
                            className={`funnel-option-box ${formData.zeitrahmen === tf ? 'active' : ''}`}
                            style={{ padding: '12px', justifyContent: 'center', textAlign: 'center' }}
                          >
                            <p style={{ fontWeight: 700, fontSize: '0.82rem' }}>{tf}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ paddingTop: '20px', borderTop: '1px solid #E8E2D5', display: 'flex', justifyContent: 'space-between' }}>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn-secondary"
                      >
                        <ArrowLeft size={16} />
                        <span>Zurück</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="btn-primary"
                      >
                        <span>Weiter zu Kontaktdaten</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div>
                    <p style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: '#0F172A', marginBottom: '16px' }}>
                      Wohin dürfen wir die Auswertung &amp; Terminvorschlag senden?
                    </p>

                    <div className="form-group-grid">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                          Vollständiger Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="z. B. Markus Schmidt"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="form-input-control"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                          Telefonnummer für Rückfragen *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="z. B. 0170 1234567"
                          value={formData.telefon}
                          onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                          className="form-input-control"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                          E-Mail-Adresse *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="z. B. m.schmidt@email.de"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-input-control"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                          Projekt-Standort / PLZ Ort
                        </label>
                        <input
                          type="text"
                          placeholder="z. B. 31582 Nienburg"
                          value={formData.ort}
                          onChange={(e) => setFormData({ ...formData, ort: e.target.value })}
                          className="form-input-control"
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                        Kurzbeschreibung oder Besonderheiten (optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="z. B. Raumhöhe ca. 2,80m, Wunschholz Eiche natur geölt..."
                        value={formData.nachricht}
                        onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                        className="form-input-control"
                      />
                    </div>

                    <div style={{
                      background: '#FFFFFF',
                      border: '1.5px dashed #CBD5E1',
                      borderRadius: '10px',
                      padding: '14px',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      color: '#64748B',
                      marginBottom: '16px',
                      cursor: 'pointer'
                    }}>
                      <Upload size={16} color="#94A3B8" style={{ margin: '0 auto 4px auto' }} />
                      <span>Optional: Grundriss, Skizze oder Fotos der aktuellen Raumsituation anhängen</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#64748B', marginBottom: '20px' }}>
                      <ShieldCheck size={16} color="#059669" style={{ flexShrink: 0 }} />
                      <span>100% datenschutzkonform. Ihre Angaben werden vertraulich behandelt.</span>
                    </div>

                    <div style={{ paddingTop: '20px', borderTop: '1px solid #E8E2D5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-secondary"
                      >
                        <ArrowLeft size={16} />
                        <span>Zurück</span>
                      </button>

                      <button
                        type="submit"
                        className="btn-primary"
                      >
                        <Send size={16} />
                        <span>Kostenlos Anfrage absenden</span>
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
