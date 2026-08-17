import React from 'react';
import { X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | 'barrierefreiheit' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '840px' }}>
        
        {/* HEADER */}
        <div style={{ background: '#12151B', color: '#FFFFFF', padding: '24px 28px', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#FCD34D' }}>Rechtliche Hinweise</span>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 800, marginTop: '2px' }}>
              {type === 'impressum' && 'Impressum'}
              {type === 'datenschutz' && 'Datenschutzerklärung'}
              {type === 'barrierefreiheit' && 'Erklärung zur Barrierefreiheit'}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
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
        </div>

        {/* BODY */}
        <div style={{ padding: '28px', maxHeight: '65vh', overflowY: 'auto', fontSize: '0.92rem', color: '#374151', lineHeight: 1.65 }}>
          
          {type === 'impressum' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h4 style={{ fontWeight: 800, color: '#11141A' }}>Angaben gemäß § 5 TMG</h4>
              <p>
                <strong>Tischlerei Dirk Schlemermeyer GmbH</strong><br />
                Blenhorster Str. 7<br />
                31609 Balge – Blenhorst<br />
                Deutschland
              </p>

              <h4 style={{ fontWeight: 800, color: '#11141A' }}>Vertreten durch:</h4>
              <p>Geschäftsführer: Dirk Schlemermeyer (Tischlermeister)</p>

              <h4 style={{ fontWeight: 800, color: '#11141A' }}>Kontakt:</h4>
              <p>
                Telefon: 05022 / 633<br />
                E-Mail: info@schlemermeyer.de<br />
                Website: www.schlemermeyer.de
              </p>

              <h4 style={{ fontWeight: 800, color: '#11141A' }}>Registereintrag &amp; Kammer:</h4>
              <p>
                Handwerkskammer Hannover, Berliner Allee 17, 30175 Hannover<br />
                Berufsbezeichnung: Tischlermeister (verliehen in der Bundesrepublik Deutschland)<br />
                Berufsrechtliche Regelungen: Handwerksordnung (HwO)
              </p>
            </div>
          )}

          {type === 'datenschutz' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h4 style={{ fontWeight: 800, color: '#11141A' }}>1. Datenschutz auf einen Blick</h4>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h4 style={{ fontWeight: 800, color: '#11141A' }}>2. Verantwortliche Stelle</h4>
              <p>
                Tischlerei Dirk Schlemermeyer GmbH<br />
                Blenhorster Str. 7, 31609 Balge – Blenhorst<br />
                Telefon: 05022 / 633<br />
                E-Mail: info@schlemermeyer.de
              </p>

              <h4 style={{ fontWeight: 800, color: '#11141A' }}>3. Datenerfassung auf dieser Website</h4>
              <p>
                Wenn Sie uns per Kontaktformular oder Projekt-Funnel Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
          )}

          {type === 'barrierefreiheit' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h4 style={{ fontWeight: 800, color: '#11141A' }}>Erklärung zur digitalen Barrierefreiheit</h4>
              <p>
                Die <strong>Tischlerei Dirk Schlemermeyer GmbH</strong> ist bestrebt, ihren Webauftritt im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates sowie dem Behindertengleichstellungsgesetz (BGG) und der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) barrierefrei zugänglich zu machen.
              </p>

              <h4 style={{ fontWeight: 800, color: '#11141A' }}>Stand der Vereinbarkeit mit den Anforderungen</h4>
              <p>
                Diese Website ist mit den Richtlinien für barrierefreie Webinhalte (WCAG 2.1) auf Konformitätsstufe AA weitestgehend vereinbar.
              </p>
              
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Klare, skalierbare Typografie mit hohem Kontrastverhältnis.</li>
                <li>Vollständige semantische HTML5-Struktur für Screenreader.</li>
                <li>Bedienbarkeit aller interaktiven Elemente (Buttons, Modals, Menüs) per Tastatur.</li>
                <li>Alternativtexte für informative Bildelemente.</li>
                <li>Responsive Darstellung für alle Bildschirmgrößen und Zoomstufen bis 200%.</li>
              </ul>

              <h4 style={{ fontWeight: 800, color: '#11141A' }}>Feedback &amp; Kontakt</h4>
              <p>
                Sollten Ihnen Mängel in Bezug auf die barrierefreie Gestaltung unserer Website auffallen, können Sie uns jederzeit kontaktieren:<br />
                E-Mail: <a href="mailto:info@schlemermeyer.de" style={{ color: '#C96A00', fontWeight: 700 }}>info@schlemermeyer.de</a><br />
                Telefon: 05022 / 633
              </p>
            </div>
          )}

        </div>

        {/* FOOTER */}
        <div style={{ padding: '16px 28px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
