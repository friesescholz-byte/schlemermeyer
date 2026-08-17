import React, { useState } from 'react';
import { X, CheckCircle2, Briefcase, Send } from 'lucide-react';
import { JOB_OPENINGS } from '../data/content';

interface JobModalProps {
  initialJobId?: string;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ initialJobId, onClose }) => {
  const [selectedJobId, setSelectedJobId] = useState<string>(initialJobId || 'tischler-geselle');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telefon: '',
    email: '',
    erfahrung: 'Ausgebildeter Tischler / Geselle',
    nachricht: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()}>
        
        {/* HEADER */}
        <div style={{ background: '#12151B', color: '#FFFFFF', padding: '24px 28px', position: 'relative' }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
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
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 800, color: '#FCD34D', textTransform: 'uppercase', marginBottom: '4px' }}>
            <Briefcase size={14} />
            <span>Karriere in Balge-Blenhorst</span>
          </div>

          <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 800 }}>
            Werde Teil unseres Meisterteams!
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '2px' }}>
            Bewerbung in 60 Sekunden – kein formelles Anschreiben oder Lebenslauf nötig.
          </p>
        </div>

        {/* BODY */}
        <div style={{ padding: '28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#D1FAE5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
                Bewerbung erfolgreich erhalten!
              </h4>
              <p style={{ color: '#64748B', maxWidth: '420px', margin: '0 auto 20px auto', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Vielen Dank, <strong style={{ color: '#11141A' }}>{formData.name}</strong>! Dirk Schlemermeyer wird sich in den nächsten 2 Werktagen unkompliziert telefonisch bei dir für ein kurzes Kennenlernen melden.
              </p>
              <button
                onClick={onClose}
                className="btn-primary"
              >
                Fertig &amp; Schließen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* JOB SELECTOR */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', marginBottom: '8px' }}>
                  Gewünschte Stelle:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {JOB_OPENINGS.map((job) => (
                    <div
                      key={job.id}
                      onClick={() => setSelectedJobId(job.id)}
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1.5px solid',
                        borderColor: selectedJobId === job.id ? '#C96A00' : '#E8E2D5',
                        background: selectedJobId === job.id ? '#FFF9F0' : '#FFFFFF',
                        cursor: 'pointer'
                      }}
                    >
                      <p style={{ fontWeight: 800, fontSize: '0.85rem', color: '#11141A' }}>{job.title}</p>
                      <p style={{ fontSize: '0.75rem', color: '#64748B' }}>{job.type}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* INPUT FIELDS */}
              <div className="form-group-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>Dein Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="z. B. Jonas Müller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input-control"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>Deine Telefonnummer *</label>
                  <input
                    type="tel"
                    required
                    placeholder="z. B. 0170 9876543"
                    value={formData.telefon}
                    onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    className="form-input-control"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>E-Mail-Adresse</label>
                  <input
                    type="email"
                    placeholder="z. B. jonas@email.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input-control"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>Dein Stand</label>
                  <select
                    value={formData.erfahrung}
                    onChange={(e) => setFormData({ ...formData, erfahrung: e.target.value })}
                    className="form-input-control"
                  >
                    <option value="Ausgebildeter Tischler / Geselle">Ausgebildeter Tischler / Geselle</option>
                    <option value="Tischlermeister">Tischlermeister</option>
                    <option value="Interesse an Ausbildung">Interesse an Ausbildung</option>
                    <option value="Quereinsteiger mit Holzerfahrung">Quereinsteiger mit Holzerfahrung</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                  Möchtest du uns noch etwas mitteilen? (optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="z. B. Frühester Starttermin, besondere Erfahrung..."
                  value={formData.nachricht}
                  onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                  className="form-input-control"
                />
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid #E8E2D5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  Werkstattkontakt: 05022 / 633
                </span>
                
                <button
                  type="submit"
                  className="btn-primary"
                >
                  <Send size={16} />
                  <span>Bewerbung absenden</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
