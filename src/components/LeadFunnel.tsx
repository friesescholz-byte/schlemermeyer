import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  Send, 
  Upload, 
  ShieldCheck, 
  X, 
  Paperclip, 
  FileText, 
  AlertCircle 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface LeadFunnelProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

// BESPOKE ARCHITECTURAL CRAFT ICONS WITH VIBRANT ARTISAN COLORS
const InnenausbauIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ size = 24, color = '#C96A00', className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 20h18" />
    <path d="M4 16h4v-4h4V8h4V4h4" />
    <path d="M4 20v-4" />
  </svg>
);

const ZimmereiIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ size = 24, color = '#15803D', className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20h20" />
    <path d="M12 3L2 20" />
    <path d="M12 3l10 20" />
    <path d="M6 14h12" />
    <path d="M12 3v17" />
  </svg>
);

const DachdeckereiIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ size = 24, color = '#C2410C', className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 10L12 2l10 8" />
    <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
    <path d="M7 10h10" />
    <path d="M6 14h12" />
    <path d="M7 18h10" />
  </svg>
);

export const LeadFunnel: React.FC<LeadFunnelProps> = ({ initialService, isModal = false, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const services = [
    { 
      id: 'innenausbau', 
      label: 'Innenausbau & Tischlerei', 
      tag: 'Treppen & Raumkultur',
      icon: InnenausbauIcon, 
      color: '#C96A00',
      badgeBg: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
      borderColor: '#FCD34D',
      desc: 'Treppen, Böden, Türen, Fenster & Sonnenschutz' 
    },
    { 
      id: 'zimmerei', 
      label: 'Zimmerei & Holzbau', 
      tag: 'Konstruktion & Dachstuhl',
      icon: ZimmereiIcon, 
      color: '#15803D',
      badgeBg: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)',
      borderColor: '#86EFAC',
      desc: 'Dachstühle, Holzrahmenbau, Carports & Gauben' 
    },
    { 
      id: 'dachdeckerei', 
      label: 'Dachdeckerei & Dachsanierung', 
      tag: 'Dach & Wetterschutz',
      icon: DachdeckereiIcon, 
      color: '#C2410C',
      badgeBg: 'linear-gradient(135deg, #FFE4E6 0%, #FECDD3 100%)',
      borderColor: '#FDA4AF',
      desc: 'Steildach, Flachdach, Dämmung & Dachfenster' 
    }
  ];

  // MULTI-SELECT STATE: DEFAULT EMPTY (KEINS VORAUSGEWÄHLT)
  const getInitialGewerke = (): string[] => {
    if (!initialService) return [];
    if (initialService === 'Komplett-Projekt' || initialService === 'Gesamtprojekt') {
      return ['Innenausbau & Tischlerei', 'Zimmerei & Holzbau', 'Dachdeckerei & Dachsanierung'];
    }
    const matched = services.find(s => s.label.toLowerCase().includes(initialService.toLowerCase()) || s.id === initialService);
    return matched ? [matched.label] : [];
  };

  const [selectedGewerke, setSelectedGewerke] = useState<string[]>(getInitialGewerke);

  useEffect(() => {
    if (initialService) {
      setSelectedGewerke(getInitialGewerke());
    }
  }, [initialService]);

  const toggleGewerk = (label: string) => {
    if (selectedGewerke.includes(label)) {
      setSelectedGewerke(selectedGewerke.filter(g => g !== label));
    } else {
      setSelectedGewerke([...selectedGewerke, label]);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    telefon: '',
    email: '',
    ort: '',
    nachricht: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleGoToStep3 = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name.trim()) {
      setValidationError('Bitte geben Sie Ihren Namen an.');
      return;
    }
    if (!formData.telefon.trim()) {
      setValidationError('Bitte geben Sie eine Telefonnummer für Rückfragen an.');
      return;
    }
    if (!formData.email.trim()) {
      setValidationError('Bitte geben Sie Ihre E-Mail-Adresse an.');
      return;
    }
    setValidationError(null);
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={isModal ? '' : 'section-wrapper white'} id={isModal ? undefined : 'projekt-anfragen'}>
      <div className={isModal ? '' : 'container-custom'}>
        
        {!isModal && (
          <div className="section-header">
            <div className="badge-pill amber">
              <Sparkles size={14} />
              <span>In 3 Schritten zum Angebot</span>
            </div>
            <h2>Starten Sie jetzt Ihre kostenfreie Projektanfrage.</h2>
            <p>
              In nur wenigen Klicks zu Ihrer fundierten Ersteinschätzung direkt durch Tischlermeister Dirk Schlemermeyer oder unser Meisterteam.
            </p>
          </div>
        )}

        <div className={`funnel-container ${isModal ? 'is-modal-funnel' : ''}`}>
          
          {/* TOP BAR */}
          <div className="funnel-top-bar">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', gap: '16px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#FCD34D', letterSpacing: '0.05em' }}>
                  {submitted ? 'Anfrage erfolgreich' : `Schritt ${step} von 3`}
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 800, marginTop: '2px', lineHeight: 1.25 }}>
                  {submitted 
                    ? 'Vielen Dank für Ihr Vertrauen!' 
                    : step === 1 
                      ? 'Welche Gewerke interessieren Sie? (optional)' 
                      : step === 2 
                        ? 'Ihre Kontaktdaten für den Rückruf' 
                        : 'Details & Fotos zu Ihrem Vorhaben (optional)'
                  }
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
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
                    <span style={{ width: '10px', height: '2px', background: '#374151' }} />
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
                    <span style={{ width: '10px', height: '2px', background: '#374151' }} />
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

                {isModal && onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="funnel-modal-close-btn"
                    aria-label="Schließen"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
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
                <p style={{ color: '#64748B', maxWidth: '480px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Vielen Dank, Herr/Frau <strong style={{ color: '#11141A' }}>{formData.name || 'Bauherr'}</strong>. Tischlermeister Dirk Schlemermeyer oder unser Meisterteam wird Ihre Angaben{selectedGewerke.length > 0 ? ` für ${selectedGewerke.join(' & ')}` : ''} prüfen und sich schnellstmöglich bei Ihnen melden.
                </p>

                <div style={{
                  background: '#FFFFFF',
                  border: '1px solid #E8E2D5',
                  borderRadius: '12px',
                  padding: '18px 22px',
                  maxWidth: '460px',
                  margin: '0 auto 24px auto',
                  textAlign: 'left',
                  fontSize: '0.88rem'
                }}>
                  <p><strong>Gewerke:</strong> {selectedGewerke.length > 0 ? selectedGewerke.join(' • ') : 'Allgemeine Beratung / Noch offen'}</p>
                  <p style={{ marginTop: '6px' }}><strong>Name:</strong> {formData.name}</p>
                  <p style={{ marginTop: '6px' }}><strong>Telefon:</strong> {formData.telefon}</p>
                  <p style={{ marginTop: '6px' }}><strong>E-Mail:</strong> {formData.email}</p>
                  {formData.ort && <p style={{ marginTop: '6px' }}><strong>Projektstandort:</strong> {formData.ort}</p>}
                  {uploadedFiles.length > 0 && <p style={{ marginTop: '6px' }}><strong>Angehängte Dateien:</strong> {uploadedFiles.length} Datei(en)</p>}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
                    className="btn-primary"
                  >
                    <Phone size={16} />
                    <span>Direkt anrufen: 05022 / 633</span>
                  </a>

                  {isModal && onClose && (
                    <button
                      type="button"
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
                
                {/* STEP 1: EXAKT 3 CARDS IN EINER REIHE NEBENEINANDER (OPTIONAL) */}
                {step === 1 && (
                  <div>
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ fontSize: '0.84rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', margin: 0 }}>
                        Wählen Sie Ihre gewünschten Bereiche (optional):
                      </p>
                    </div>

                    <div className="funnel-3pillars-grid">
                      {services.map((srv) => {
                        const isSelected = selectedGewerke.includes(srv.label);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleGewerk(srv.label)}
                            className={`funnel-pillar-card ${isSelected ? 'active' : ''}`}
                            style={{ 
                              borderColor: isSelected ? srv.color : '#E2E8F0',
                              background: isSelected ? '#FFFDF9' : '#FFFFFF',
                              boxShadow: isSelected 
                                ? `0 10px 28px -6px ${srv.color}33, 0 0 0 2px ${srv.color}` 
                                : '0 2px 8px rgba(0, 0, 0, 0.03)'
                            }}
                          >
                            {/* TOP ROW: VIBRANT ICON ON THE LEFT, CHECK TOGGLE ON THE FAR RIGHT */}
                            <div style={{ 
                              width: '100%', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'space-between', 
                              marginBottom: '16px' 
                            }}>
                              {/* VIBRANT CRAFT BADGE CONTAINER */}
                              <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: srv.badgeBg,
                                border: `1.5px solid ${srv.borderColor}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: `0 4px 14px ${srv.color}25`,
                                flexShrink: 0
                              }}>
                                <srv.icon size={25} color={srv.color} />
                              </div>

                              {/* ELEGANT CIRCULAR SELECTION TOGGLE */}
                              <div style={{
                                width: '26px',
                                height: '26px',
                                borderRadius: '50%',
                                border: isSelected ? `2px solid ${srv.color}` : '2px solid #CBD5E1',
                                background: isSelected ? srv.color : '#FFFFFF',
                                color: '#FFFFFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
                                boxShadow: isSelected ? `0 3px 10px ${srv.color}45` : 'none',
                                flexShrink: 0
                              }}>
                                {isSelected ? (
                                  <Check size={14} strokeWidth={3} />
                                ) : (
                                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CBD5E1' }} />
                                )}
                              </div>
                            </div>

                            {/* CARD CONTENT */}
                            <div style={{ width: '100%', textAlign: 'left' }}>
                              <span style={{ 
                                fontSize: '0.7rem', 
                                fontWeight: 800, 
                                textTransform: 'uppercase', 
                                letterSpacing: '0.06em', 
                                color: srv.color, 
                                display: 'block', 
                                marginBottom: '4px' 
                              }}>
                                {srv.tag}
                              </span>
                              <h4 style={{ 
                                fontWeight: 850, 
                                fontSize: '1.02rem', 
                                color: '#0F172A', 
                                margin: '0 0 6px 0', 
                                lineHeight: 1.3 
                              }}>
                                {srv.label}
                              </h4>
                              <p style={{ 
                                fontSize: '0.82rem', 
                                color: '#64748B', 
                                lineHeight: 1.45, 
                                margin: 0 
                              }}>
                                {srv.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div style={{ paddingTop: '20px', marginTop: '18px', borderTop: '1px solid #E8E2D5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-primary"
                      >
                        <span>Weiter zu Schritt 2: Kontaktdaten</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: DIREKT DIE KONTAKTDATEN */}
                {step === 2 && (
                  <div>
                    <div style={{ marginBottom: '18px' }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: '#0F172A', margin: 0 }}>
                        Ihre Kontaktdaten für den Rückruf:
                      </p>
                      <p style={{ fontSize: '0.84rem', color: '#64748B', marginTop: '4px', margin: '4px 0 0' }}>
                        Tischlermeister Dirk Schlemermeyer oder unser Meisterteam meldet sich persönlich bei Ihnen.
                      </p>
                    </div>

                    {validationError && (
                      <div style={{
                        background: '#FEF2F2',
                        border: '1px solid #FECACA',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        color: '#B91C1C',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px'
                      }}>
                        <AlertCircle size={16} style={{ flexShrink: 0 }} />
                        <span>{validationError}</span>
                      </div>
                    )}

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
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (validationError) setValidationError(null);
                          }}
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
                          onChange={(e) => {
                            setFormData({ ...formData, telefon: e.target.value });
                            if (validationError) setValidationError(null);
                          }}
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
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (validationError) setValidationError(null);
                          }}
                          className="form-input-control"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                          Projekt-Standort / PLZ Ort (optional)
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

                    <div style={{ paddingTop: '20px', borderTop: '1px solid #E8E2D5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setValidationError(null);
                          setStep(1);
                        }}
                        className="btn-secondary"
                      >
                        <ArrowLeft size={16} />
                        <span>Zurück zu Gewerke</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleGoToStep3}
                        className="btn-primary"
                      >
                        <span>Weiter zu Details &amp; Fotos (optional)</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: EIGENE NACHRICHT & BILDER/PLÄNE HOCHLADEN & ABSENDEN */}
                {step === 3 && (
                  <div>
                    <div style={{ marginBottom: '18px' }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: '#0F172A', margin: 0 }}>
                        Möchten Sie uns noch Details mitteilen? (optional)
                      </p>
                      <p style={{ fontSize: '0.84rem', color: '#64748B', marginTop: '4px', margin: '4px 0 0' }}>
                        Beschreiben Sie kurz Ihre Vorstellungen oder hängen Sie Skizzen, Grundrisse und Fotos an.
                      </p>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                        Ihre Nachricht oder Besonderheiten (optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="z. B. Wunschholz Eiche, Maße, Treppen-Sanierung oder besondere Einbausituation..."
                        value={formData.nachricht}
                        onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                        className="form-input-control"
                      />
                    </div>

                    {/* FILE UPLOAD DROPZONE */}
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      style={{
                        background: '#FFFFFF',
                        border: '1.5px dashed #CBD5E1',
                        borderRadius: '12px',
                        padding: '20px',
                        textAlign: 'center',
                        fontSize: '0.86rem',
                        color: '#475569',
                        marginBottom: uploadedFiles.length > 0 ? '12px' : '18px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#C96A00';
                        e.currentTarget.style.backgroundColor = '#FFFDF8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#CBD5E1';
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                      }}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        multiple 
                        accept="image/*,.pdf" 
                        style={{ display: 'none' }} 
                      />
                      <Upload size={22} color="#C96A00" style={{ margin: '0 auto 6px auto' }} />
                      <strong style={{ display: 'block', color: '#0F172A', marginBottom: '2px', fontSize: '0.92rem' }}>
                        Fotos, Pläne oder Skizzen hier ablegen oder anklicken
                      </strong>
                      <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                        JPG, PNG oder PDF bis max. 15 MB pro Datei (optional)
                      </span>
                    </div>

                    {/* UPLOADED FILES LIST */}
                    {uploadedFiles.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                        {uploadedFiles.map((file, idx) => (
                          <div 
                            key={idx} 
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '8px 12px',
                              background: '#F8FAFC',
                              borderRadius: '8px',
                              border: '1px solid #E2E8F0',
                              fontSize: '0.85rem'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                              <FileText size={16} color="#C96A00" style={{ flexShrink: 0 }} />
                              <span style={{ fontWeight: 600, color: '#0F172A', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{file.name}</span>
                              <span style={{ color: '#64748B', fontSize: '0.78rem' }}>({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(idx);
                              }}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#94A3B8',
                                cursor: 'pointer',
                                padding: '4px',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center'
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = '#EF4444')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                              aria-label="Datei entfernen"
                            >
                              <X size={15} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* PRIVACY NOTE */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#64748B', marginBottom: '20px' }}>
                      <ShieldCheck size={16} color="#16A34A" style={{ flexShrink: 0 }} />
                      <span>100% datenschutzkonform. Ihre Angaben werden vertraulich behandelt und nicht an Dritte weitergegeben.</span>
                    </div>

                    {/* NAVIGATION BUTTONS */}
                    <div style={{ paddingTop: '20px', borderTop: '1px solid #E8E2D5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-secondary"
                      >
                        <ArrowLeft size={16} />
                        <span>Zurück zu Kontaktdaten</span>
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
