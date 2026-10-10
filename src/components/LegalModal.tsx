import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Scale, Accessibility, ExternalLink, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export type LegalTabType = 'impressum' | 'datenschutz' | 'barrierefreiheit';

interface LegalModalProps {
  type: LegalTabType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [activeTab, setActiveTab] = useState<LegalTabType>('impressum');

  useEffect(() => {
    if (type) {
      setActiveTab(type);
    }
  }, [type]);

  if (!type) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      style={{ zIndex: 9999 }}
    >
      <div 
        className="modal-dialog-box" 
        onClick={(e) => e.stopPropagation()} 
        style={{ 
          maxWidth: '960px', 
          width: '94%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
          background: '#FFFFFF'
        }}
      >
        
        {/* MODAL HEADER */}
        <div style={{ 
          background: '#111827', 
          color: '#FFFFFF', 
          padding: '24px 32px 20px', 
          position: 'relative', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.08em',
                  color: '#F59E0B' 
                }}>
                  Rechtssicherheit &amp; Transparenz
                </span>
                <span style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>•</span>
                <span style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>Stand: Oktober 2026</span>
              </div>
              <h3 
                id="legal-modal-title"
                style={{ 
                  color: '#FFFFFF', 
                  fontSize: '1.45rem', 
                  fontWeight: 800, 
                  letterSpacing: '-0.02em',
                  margin: 0
                }}
              >
                {activeTab === 'impressum' && 'Impressum & Gesetzliche Pflichtangaben'}
                {activeTab === 'datenschutz' && 'Datenschutzerklärung (DSGVO, TDDDG & BDSG)'}
                {activeTab === 'barrierefreiheit' && 'Erklärung zur digitalen Barrierefreiheit (BFSG & BITV 2.0)'}
              </h3>
            </div>

            <button
              onClick={onClose}
              aria-label="Modal schließen"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#1F2937',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#374151')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#1F2937')}
            >
              <X size={18} />
            </button>
          </div>

          {/* TAB NAVIGATION */}
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            marginTop: '18px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '14px',
            overflowX: 'auto'
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('impressum')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                background: activeTab === 'impressum' ? '#C96A00' : 'rgba(255, 255, 255, 0.06)',
                color: activeTab === 'impressum' ? '#FFFFFF' : '#D1D5DB',
                transition: 'all 0.2s'
              }}
            >
              <Scale size={15} />
              Impressum
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('datenschutz')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                background: activeTab === 'datenschutz' ? '#C96A00' : 'rgba(255, 255, 255, 0.06)',
                color: activeTab === 'datenschutz' ? '#FFFFFF' : '#D1D5DB',
                transition: 'all 0.2s'
              }}
            >
              <ShieldCheck size={15} />
              Datenschutz
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('barrierefreiheit')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                background: activeTab === 'barrierefreiheit' ? '#C96A00' : 'rgba(255, 255, 255, 0.06)',
                color: activeTab === 'barrierefreiheit' ? '#FFFFFF' : '#D1D5DB',
                transition: 'all 0.2s'
              }}
            >
              <Accessibility size={15} />
              Barrierefreiheit (BFSG)
            </button>
          </div>
        </div>

        {/* MODAL BODY (SCROLLABLE) */}
        <div style={{ 
          padding: '32px', 
          overflowY: 'auto', 
          flex: 1, 
          fontSize: '0.94rem', 
          color: '#334155', 
          lineHeight: 1.7 
        }}>
          
          {/* ======================================================== */}
          {/* 1. IMPRESSUM                                             */}
          {/* ======================================================== */}
          {activeTab === 'impressum' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div style={{ 
                background: '#F8FAFC', 
                border: '1px solid #E2E8F0', 
                borderRadius: '12px', 
                padding: '20px 24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '18px'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '4px' }}>
                    Diensteanbieter gemäß § 5 DDG
                  </span>
                  <strong style={{ fontSize: '1.05rem', color: '#0F172A', display: 'block' }}>{COMPANY_INFO.name}</strong>
                  <p style={{ margin: '4px 0 0', color: '#475569' }}>
                    {COMPANY_INFO.address.street}<br />
                    {COMPANY_INFO.address.city}<br />
                    {COMPANY_INFO.address.region}<br />
                    Deutschland
                  </p>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '4px' }}>
                    Vertretungsberechtigte Geschäftsführung
                  </span>
                  <strong style={{ fontSize: '1.05rem', color: '#0F172A', display: 'block' }}>Dirk Schlemermeyer</strong>
                  <p style={{ margin: '4px 0 0', color: '#475569' }}>
                    Tischlermeister (verliehen in der Bundesrepublik Deutschland)
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  Kontaktmöglichkeiten
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  <div style={{ padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C96A00', fontWeight: 700, marginBottom: '2px' }}>
                      <Phone size={15} /> Telefon
                    </div>
                    <a href={`tel:${COMPANY_INFO.contact.phoneCallable}`} style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}>
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C96A00', fontWeight: 700, marginBottom: '2px' }}>
                      <Mail size={15} /> E-Mail
                    </div>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}>
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C96A00', fontWeight: 700, marginBottom: '2px' }}>
                      <MapPin size={15} /> Internetpräsenz
                    </div>
                    <a href={COMPANY_INFO.contact.website} target="_blank" rel="noopener noreferrer" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}>
                      www.schlemermeyer.de
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Registereintrag &amp; Umsatzsteuer
                </h4>
                <p>
                  <strong>Registergericht:</strong> Amtsgericht Walsrode (Zuständiges Registergericht für Balge / Landkreis Nienburg/Weser)<br />
                  <strong>Registernummer:</strong> HRB wird nachgetragen / in Eintragung<br />
                  <strong>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</strong> Auf Anfrage / in Vergabe
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Zuständige Handwerkskammer &amp; Berufsrechtliche Regelungen
                </h4>
                <p>
                  <strong>Zuständige Kammer &amp; Aufsichtsbehörde:</strong><br />
                  Handwerkskammer Hannover<br />
                  Berliner Allee 17, 30175 Hannover<br />
                  Website: <a href="https://www.hwk-hannover.de" target="_blank" rel="noopener noreferrer" style={{ color: '#C96A00', fontWeight: 600 }}>www.hwk-hannover.de</a>
                </p>
                <p style={{ marginTop: '8px' }}>
                  <strong>Gesetzliche Berufsbezeichnung:</strong> Tischlermeister (verliehen in der Bundesrepublik Deutschland)<br />
                  <strong>Berufsrechtliche Regelungen:</strong> Handwerksordnung (HwO) in der jeweils gültigen Fassung. Gesetzestext abrufbar unter: <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" style={{ color: '#C96A00' }}>www.gesetze-im-internet.de/hwo/</a>
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Berufshaftpflichtversicherung
                </h4>
                <p>
                  Es besteht eine betriebliche Haftpflichtversicherung bei einem renommierten deutschen Versicherungsunternehmen mit räumlichem Geltungsbereich für das gesamte Gebiet der Bundesrepublik Deutschland sowie Tätigkeiten im europäischen Binnenmarkt.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Verantwortlich für redaktionelle Inhalte gemäß § 18 Abs. 2 MStV
                </h4>
                <p>
                  Dirk Schlemermeyer<br />
                  Blenhorster Str. 7, 31609 Balge – Blenhorst
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Verbraucherstreitbeilegung &amp; Online-Streitbeilegung (§ 36 VSBG)
                </h4>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: '#C96A00', fontWeight: 600 }}>https://ec.europa.eu/consumers/odr/</a> finden.<br />
                  Unsere E-Mail-Adresse lautet: info@schlemermeyer.de.<br />
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Haftungsausschluss &amp; Urheberrecht
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p style={{ marginBottom: '8px' }}>
                  <strong>Haftung für Verweise und Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p>
                  <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte, Fotografien, Texte und Werkgrafiken auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der Tischlerei Dirk Schlemermeyer GmbH.
                </p>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* 2. DATENSCHUTZERKLÄRUNG                                  */}
          {/* ======================================================== */}
          {activeTab === 'datenschutz' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>

              {/* Einleitung */}
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px 24px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  1. Datenschutz auf einen Blick &amp; Verantwortliche Stelle
                </h4>
                <p style={{ marginBottom: '12px' }}>
                  Die <strong>Tischlerei Dirk Schlemermeyer GmbH</strong> nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, TDDDG sowie BDSG) sowie dieser Datenschutzerklärung.
                </p>
                <div style={{ padding: '12px 16px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #CBD5E1' }}>
                  <strong>Verantwortliche Stelle im Sinne der DSGVO:</strong><br />
                  Tischlerei Dirk Schlemermeyer GmbH<br />
                  Geschäftsführer: Dirk Schlemermeyer (Tischlermeister)<br />
                  Blenhorster Str. 7, 31609 Balge – Blenhorst<br />
                  Telefon: 05022 / 633 | E-Mail: info@schlemermeyer.de
                </div>
              </div>

              {/* Rechtsgrundlagen */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  2. Rechtsgrundlagen der Datenverarbeitung
                </h4>
                <p>
                  Wir verarbeiten personenbezogene Daten stets auf Grundlage mindestens einer der folgenden Rechtsnormen:
                </p>
                <ul style={{ paddingLeft: '20px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG):</strong> Wenn Sie uns ausdrücklich Ihre Zustimmung zu Cookies, Marketing-Trackern oder Webanalyse erteilt haben.</li>
                  <li><strong>Vertragserfüllung &amp; vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO):</strong> Wenn die Verarbeitung zur Erstellung eines Angebots, Abwicklung eines Auftrags oder Beantwortung von Projektanfragen (Lead-Funnel, Kontaktformular) erforderlich ist.</li>
                  <li><strong>Bewerberdatenverarbeitung (§ 26 Abs. 1 BDSG, Art. 6 Abs. 1 lit. b DSGVO):</strong> Zur Durchführung des Bewerbungsverfahrens für offene Stellen.</li>
                  <li><strong>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO):</strong> Zur Gewährleistung der IT-Sicherheit, Abwehr von Spam und Bot-Angriffen (Cloudflare Turnstile) sowie zur stabilen Bereitstellung unseres Onlineangebots.</li>
                  <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):</strong> Bei gesetzlichen Aufbewahrungsfristen (z. B. Handels- und Steuerrecht).</li>
                </ul>
              </div>

              {/* Hosting, CDN & Cloudflare Pages */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  3. Hosting, Content Delivery Network (CDN) &amp; Cloudflare
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  Unsere Website wird über <strong>Cloudflare Pages</strong> gehostet und greift zur schnellen Auslieferung hochauflösender Projektbilder und Mediendateien auf den Objektspeicher <strong>Cloudflare R2</strong> zurück.
                </p>
                <p style={{ marginBottom: '8px' }}>
                  <strong>Dienstanbieter:</strong> Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA.<br />
                  Beim Aufruf unserer Seiten leitet Cloudflare den Datenverkehr über sein globales Content Delivery Network (CDN), um Ladezeiten zu minimieren und DDoS-Angriffe abzuwehren. Hierbei werden technische Protokolldaten (u. a. Ihre IP-Adresse, Datum/Uhrzeit der Anfrage, aufgerufene URL, Browser-Informationen) kurzzeitig verarbeitet.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer schnellen, ausfallsicheren und abhörsicheren Bereitstellung unserer Website).<br />
                  <strong>Drittstaatentransfer:</strong> Cloudflare ist nach dem <em>EU-U.S. Data Privacy Framework (DPF)</em> zertifiziert und hat Standardvertragsklauseln (SCCs) der EU-Kommission implementiert.
                </p>
              </div>

              {/* Cookies & Consent */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  4. Cookies &amp; Consent-Management (TDDDG &amp; DSGVO)
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  Unsere Website verwendet Cookies und ähnliche Speichertechnologien (z. B. LocalStorage). Man unterscheidet:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li><strong>Technisch notwendige Cookies / Speicherungen (§ 25 Abs. 2 Nr. 2 TDDDG):</strong> Ohne diese kann die Website nicht ordnungsgemäß funktionieren (z. B. Speicherung Ihrer Cookie-Präferenzen, Formularzwischenstände). Hierfür ist keine Einwilligung erforderlich.</li>
                  <li><strong>Zustimmungspflichtige Cookies &amp; Tracking-Dienste (§ 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO):</strong> Werden ausschließlich nach Ihrer aktiven, freiwilligen Einwilligung geladen (z. B. Google Analytics 4, Meta-Pixel). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft in den Cookie-Einstellungen im Footer widerrufen.</li>
                </ul>
              </div>

              {/* Kontaktformulare, Projekt-Funnel & Bewerbungen */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  5. Kontaktformulare, Projekt-Funnel &amp; Express-Bewerbung
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  Auf unserer Website stehen Ihnen mehrere spezialisierte Kontaktwege zur Verfügung:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A' }}>a) Interaktiver Projekt-Funnel (Lead-Konfigurator) &amp; Allgemeines Kontaktformular:</strong>
                    <p style={{ margin: '4px 0 0', color: '#475569' }}>
                      Zur gezielten Angebotserstellung für Innenausbau, Treppenbau, Parkett, Zimmerei oder Dacharbeiten erheben wir: Vor- und Nachname, Telefonnummer, E-Mail-Adresse, PLZ/Ort des Bauvorhabens sowie Details zum Gewerk, Zeitrahmen und Budget. Die Verarbeitung dient der Erfüllung vorvertraglicher Maßnahmen und Beantwortung Ihrer Anfrage (Art. 6 Abs. 1 lit. b &amp; lit. f DSGVO). Die Daten werden gelöscht, sobald der Sachverhalt abschließend geklärt ist und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
                    </p>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A' }}>b) Express-Bewerbungsformular (Karriereportal):</strong>
                    <p style={{ margin: '4px 0 0', color: '#475569' }}>
                      Bewerberdaten (Name, Kontaktdaten, Qualifikationen, gewünschte Position, Lebenslauf/Anhänge) verarbeiten wir gemäß § 26 Abs. 1 BDSG und Art. 6 Abs. 1 lit. b DSGVO ausschließlich zur Durchführung des Auswahlverfahrens. Bei einer Absage werden Ihre Unterlagen spätestens nach 6 Monaten unwiderruflich gelöscht, sofern Sie nicht in eine längere Speicherung im Talent-Pool eingewilligt haben.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cloudflare Turnstile */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  6. Bot- und Spamschutz: Cloudflare Turnstile
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  Wir verwenden auf unseren Formularen den Dienst <strong>Cloudflare Turnstile</strong> von Cloudflare Inc. (101 Townsend St, San Francisco, CA 94107, USA).
                </p>
                <p style={{ marginBottom: '8px' }}>
                  <strong>Zweck:</strong> Überprüfung, ob Formulareingaben durch einen Menschen oder missbräuchlich durch automatisierte Bots, Scraping oder Spam-Skripte vorgenommen werden. Turnstile ist eine datenschutzfreundliche Alternative zu herkömmlichen Captchas und analysiert technische Signale des Endgeräts (z. B. Browserumgebung, Zeitverhalten), ohne Nutzer mit unleserlichen Bilderrätseln zu belästigen.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Abwehr von Cyberangriffen, Spam und der Sicherung der Systemstabilität). Turnstile setzt keine Tracking-Cookies und verwendet die gesammelten Daten nicht für Marketing- oder Profilingzwecke.
                </p>
              </div>

              {/* Google Analytics 4 */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  7. Webanalyse: Google Analytics 4 (mit Google Consent Mode v2)
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  Diese Website nutzt Funktionen des Webanalysedienstes <strong>Google Analytics 4</strong>. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland (Mutterunternehmen: Google LLC, USA).
                </p>
                <p style={{ marginBottom: '8px' }}>
                  Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen. In Google Analytics 4 ist die <strong>IP-Anonymisierung standardmäßig aktiviert</strong>, sodass Ihre IP-Adresse von Google innerhalb der EU gekürzt wird. Wir setzen Google Analytics mit dem <strong>Google Consent Mode v2</strong> ein, sodass Analysedaten erst nach Ihrer ausdrücklichen Einwilligung im Cookie-Banner übertragen werden.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.<br />
                  <strong>Widerruf &amp; Opt-out:</strong> Sie können Ihre Zustimmung jederzeit über die Cookie-Einstellungen widerrufen oder das offizielle Browser-Add-on zur Deaktivierung von Google Analytics installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" style={{ color: '#C96A00', fontWeight: 600 }}>Google Analytics Opt-out</a>.
                </p>
              </div>

              {/* Meta-Pixel & Conversions API */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  8. Marketing &amp; Conversion-Tracking: Meta-Pixel (Facebook / Instagram)
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  Unsere Website nutzt zur Conversion-Messung und zielgerichteten Werbeausspielung das <strong>Meta-Pixel</strong> sowie die Meta Conversions API des Anbieters Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland (Muttergesellschaft: Meta Platforms Inc., USA).
                </p>
                <p style={{ marginBottom: '8px' }}>
                  Mithilfe des Meta-Pixels kann nachverfolgt werden, wie Nutzer agieren, nachdem sie eine Werbeanzeige auf Facebook oder Instagram gesehen oder angeklickt haben (z. B. Aufruf einer Leistungsseite oder Absenden einer Projektanfrage). Dadurch können wir den Erfolg unserer Kampagnen messen und Werbeanzeigen für interessierte Nutzer optimieren (Custom Audiences). Die erhobenen Daten sind für uns anonym; Meta verknüpft diese jedoch ggf. mit Ihrem jeweiligen Profil.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG (ausschließlich nach Ihrer freiwilligen Einwilligung).<br />
                  <strong>Widerruf:</strong> Sie können der Erfassung durch das Meta-Pixel jederzeit in unseren Cookie-Einstellungen widersprechen oder in Ihren Facebook-Werbeeinstellungen unter <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" style={{ color: '#C96A00', fontWeight: 600 }}>facebook.com/settings?tab=ads</a> anpassen.
                </p>
              </div>

              {/* Google Maps */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  9. Kartendienst: Google Maps
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  Diese Seite nutzt den Kartendienst <strong>Google Maps</strong> der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p style={{ marginBottom: '8px' }}>
                  <strong>Zweck:</strong> Ansprechende visuelle Darstellung unseres Standortes in Balge-Blenhorst, unseres regionalen Einzugsgebiets und Erleichterung der Anfahrtsplanung für Kunden. Zur Nutzung der Funktionen von Google Maps ist es technisch notwendig, Ihre IP-Adresse zu verarbeiten und an Server von Google zu übertragen.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG (Zwei-Klick-Lösung / Zustimmung im Cookie-Banner). Die Nutzungsbedingungen von Google Maps finden Sie unter <a href="https://www.google.com/intl/de_US/help/terms_maps.html" target="_blank" rel="noopener noreferrer" style={{ color: '#C96A00' }}>Google Maps Nutzungsbedingungen</a>.
                </p>
              </div>

              {/* Instagram-Präsenz */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  10. Social-Media-Präsenz: Instagram
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  Wir unterhalten ein Unternehmensprofil auf <strong>Instagram</strong> (Meta Platforms Ireland Limited). Auf unserer Website sind einfache Hyperlinks auf unser Profil hinterlegt (keine datenschutzbedenklichen Social Plugins, die ohne Klick Daten an Meta übertragen).
                </p>
                <p>
                  Für den Betrieb unserer Fanpage besteht eine gemeinsame Verantwortlichkeit nach Art. 26 DSGVO mit Meta für sogenannte „Page Insights“ (anonymisierte Nutzungsstatistiken). Die Vereinbarung hierzu finden Sie unter: <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" rel="noopener noreferrer" style={{ color: '#C96A00' }}>Meta Page Controller Addendum</a>.
                </p>
              </div>

              {/* Lokale Schriftarten */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  11. Lokale Schriftarten (Kein Google Fonts CDN)
                </h4>
                <p>
                  Diese Seite verwendet Schriftarten, die lokal auf unseren eigenen Servern bzw. unserem geschützten CDN-Speicher bereitgestellt werden. Es findet keine Verbindung zu den Servern von Google Fonts statt; Ihre IP-Adresse wird zu Schriftarten-Ladezwecken nicht an Dritte übermittelt.
                </p>
              </div>

              {/* Betroffenenrechte */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  12. Ihre Rechte als betroffene Person (Art. 15–21 DSGVO)
                </h4>
                <p style={{ marginBottom: '8px' }}>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                  <div style={{ padding: '12px 14px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A' }}>Auskunftsrecht (Art. 15):</strong> Sie können Auskunft über Ihre verarbeiteten Daten, deren Herkunft und Empfänger verlangen.
                  </div>
                  <div style={{ padding: '12px 14px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A' }}>Berichtigung (Art. 16):</strong> Sie haben das Recht auf unverzügliche Berichtigung unrichtiger Daten.
                  </div>
                  <div style={{ padding: '12px 14px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A' }}>Löschung (Art. 17):</strong> Sie können die unverzügliche Löschung Ihrer Daten („Recht auf Vergessenwerden“) verlangen.
                  </div>
                  <div style={{ padding: '12px 14px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A' }}>Einschränkung (Art. 18):</strong> Recht auf Einschränkung der Verarbeitung unter bestimmten Voraussetzungen.
                  </div>
                  <div style={{ padding: '12px 14px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A' }}>Datenübertragbarkeit (Art. 20):</strong> Recht auf Herausgabe Ihrer Daten in einem strukturierten, maschinenlesbaren Format.
                  </div>
                  <div style={{ padding: '12px 14px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A' }}>Widerspruchsrecht (Art. 21):</strong> Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO jederzeit möglich.
                  </div>
                </div>
              </div>

              {/* Beschwerderecht bei Aufsichtsbehörde */}
              <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '12px', padding: '18px 22px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#92400E', marginBottom: '6px' }}>
                  13. Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </h4>
                <p style={{ color: '#78350F', margin: 0 }}>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Die für unser Unternehmen zuständige Aufsichtsbehörde ist:<br />
                  <strong>Die Landesbeauftragte für den Datenschutz Niedersachsen (LfD Niedersachsen)</strong><br />
                  Prinzenstraße 5, 30159 Hannover<br />
                  Telefon: 0511 / 120-4500 | E-Mail: poststelle@lfd.niedersachsen.de | Web: <a href="https://lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" style={{ color: '#92400E', fontWeight: 700 }}>lfd.niedersachsen.de</a>
                </p>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* 3. ERKLÄRUNG ZUR BARRIEREFREIHEIT                       */}
          {/* ======================================================== */}
          {activeTab === 'barrierefreiheit' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>

              {/* Einleitung & Rechtsrahmen */}
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px 24px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Erklärung zur Barrierefreiheit gemäß BFSG, BGG &amp; BITV 2.0
                </h4>
                <p style={{ margin: 0, color: '#475569' }}>
                  Die <strong>Tischlerei Dirk Schlemermeyer GmbH</strong> ist bestrebt, ihren Webauftritt unter <code>www.schlemermeyer.de</code> für alle Menschen – einschließlich Menschen mit körperlichen, sensorischen oder kognitiven Einschränkungen – barrierefrei und gleichberechtigt zugänglich zu machen.
                </p>
                <p style={{ marginTop: '10px', color: '#475569', fontSize: '0.9rem' }}>
                  Diese Erklärung orientiert sich an den gesetzlichen Bestimmungen des <strong>Barrierefreiheitsstärkungsgesetzes (BFSG)</strong> zur Umsetzung der europäischen Richtlinie (EU) 2019/882 (European Accessibility Act - EAA), dem Behindertengleichstellungsgesetz (BGG) sowie der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) auf Basis der harmonisierten Norm <strong>EN 301 549</strong> und der <strong>Web Content Accessibility Guidelines (WCAG 2.1) Konformitätsstufe AA</strong>.
                </p>
              </div>

              {/* Status der Vereinbarkeit */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Stand der Vereinbarkeit mit den Anforderungen
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 18px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', color: '#065F46' }}>
                  <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Konformitätsstatus: Weitestgehend vereinbar.</strong> Die Website erfüllt die Kriterien der WCAG 2.1 Konformitätsstufe AA zu großen Teilen.
                  </div>
                </div>
              </div>

              {/* Konkrete Maßnahmen */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  Konkret umgesetzte barrierefreie Funktionen &amp; Designprinzipien
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                  
                  <div style={{ padding: '16px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>1. Wahrnehmbarkeit (Perceivable)</strong>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.88rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <li>Hohe Kontrastverhältnisse von mindestens 4,5:1 bei Fließtext und 3:1 bei UI-Komponenten auf hellem Hintergrund.</li>
                      <li>Verlustfreier Zoom: Die Website kann bis zu 200% vergrößert werden, ohne dass Text abbricht oder horizontales Scrollen erzwungen wird.</li>
                      <li>Sinnvolle Alternativtexte (<code>alt</code>) für alle informativen Fotografien von Werkstücken und Gewerken.</li>
                    </ul>
                  </div>

                  <div style={{ padding: '16px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>2. Bedienbarkeit (Operable)</strong>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.88rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <li>Vollständige Tastaturbedienbarkeit: Sämtliche Menüs, Formularfelder, Buttons und Modals sind per Tab-Navigation und Enter/Leertaste bedienbar.</li>
                      <li>Klar sichtbarer Tastatur-Fokusindikator bei allen interaktiven Steuerelementen.</li>
                      <li>Schließen von Dialogen und Modalfenstern jederzeit intuitiv über die Escape-Taste (ESC).</li>
                      <li>Keine zeitlichen Beschränkungen beim Ausfüllen von Formularen.</li>
                    </ul>
                  </div>

                  <div style={{ padding: '16px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>3. Verständlichkeit (Understandable)</strong>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.88rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <li>Logische und konsistente Navigationsstruktur auf allen Unterseiten.</li>
                      <li>Eindeutige Beschriftung von Eingabefeldern und klare deutsche Fehlermeldungen bei unvollständigen Angaben.</li>
                      <li>Verständliche Sprache ohne unangebrachte bürokratische oder englische Fachjargons.</li>
                    </ul>
                  </div>

                  <div style={{ padding: '16px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>4. Robustheit &amp; Screenreader (Robust)</strong>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.88rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <li>Semantisches HTML5 mit standardisierten Landmarken (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>).</li>
                      <li>Unterstützung assistiver Technologien durch WAI-ARIA Attribute (z. B. <code>aria-expanded</code>, <code>role="dialog"</code>).</li>
                      <li>Regelmäßige Tests mit gängigen Screenreadern (NVDA, VoiceOver).</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Nicht barrierefreie Inhalte */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Nicht barrierefreie Inhalte &amp; bekannte Einschränkungen
                </h4>
                <div style={{ padding: '14px 18px', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '8px', color: '#78350F' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px', color: '#D97706' }} />
                    <div style={{ fontSize: '0.9rem' }}>
                      <strong>Einschränkung bei externen Kartendiensten:</strong> Die optionale interaktive Karte von Google Maps ist für reine Screenreader- oder Tastaturnutzer herstellerbedingt nur eingeschränkt steuerbar. Aus diesem Grund stellen wir alle Adress-, Kontakt- und Anfahrtsdaten zusätzlich als gut lesbaren, unverschlüsselten Text bereit.
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback und Kontakt */}
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Feedback-Mechanismus &amp; Kontakt zur Barrierefreiheit
                </h4>
                <p style={{ marginBottom: '10px' }}>
                  Sind Ihnen Mängel beim barrierefreien Zugang zu Inhalten von <code>schlemermeyer.de</code> aufgefallen oder haben Sie Fragen zur Umsetzung? Bitte kontaktieren Sie uns direkt:
                </p>
                <div style={{ padding: '16px 20px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'inline-flex', flexDirection: 'column', gap: '6px' }}>
                  <strong>Tischlerei Dirk Schlemermeyer GmbH – Barrierefreiheit</strong>
                  <span>Ansprechpartner: Dirk Schlemermeyer</span>
                  <span>Blenhorster Str. 7, 31609 Balge – Blenhorst</span>
                  <span>Telefon: <a href="tel:+495022633" style={{ color: '#C96A00', fontWeight: 600 }}>05022 / 633</a></span>
                  <span>E-Mail: <a href="mailto:info@schlemermeyer.de" style={{ color: '#C96A00', fontWeight: 600 }}>info@schlemermeyer.de</a></span>
                </div>
              </div>

              {/* Schlichtungsverfahren */}
              <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '18px 22px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  Durchsetzungsverfahren &amp; Schlichtungsstelle
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#475569', margin: '0 0 10px' }}>
                  Sollten Sie auf Mitteilungen oder Anfragen zur Barrierefreiheit innerhalb von vier Wochen keine zufriedenstellende Antwort erhalten, können Sie sich an die Schlichtungsstelle wenden:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', fontSize: '0.86rem' }}>
                  <div style={{ padding: '10px 14px', background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                    <strong>Schlichtungsstelle BGG des Bundes:</strong><br />
                    Bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen<br />
                    Mauerstraße 53, 10117 Berlin<br />
                    Telefon: 030 18 527-2805 | <a href="https://www.schlichtungsstelle-bgg.de" target="_blank" rel="noopener noreferrer" style={{ color: '#C96A00' }}>www.schlichtungsstelle-bgg.de</a>
                  </div>
                  <div style={{ padding: '10px 14px', background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                    <strong>Landesbeauftragte für Menschen mit Behinderungen (Niedersachsen):</strong><br />
                    Hannah-Arendt-Platz 2, 30159 Hannover<br />
                    Telefon: 0511 120-4007 | E-Mail: behindertenbeauftragte@ms.niedersachsen.de
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* MODAL FOOTER */}
        <div style={{ 
          padding: '16px 32px', 
          background: '#F8FAFC', 
          borderTop: '1px solid #E2E8F0', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
            Tischlerei Dirk Schlemermeyer GmbH • Blenhorst / Balge (Niedersachsen)
          </div>
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ 
              padding: '8px 22px', 
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
