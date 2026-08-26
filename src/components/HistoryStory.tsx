import React from 'react';
import { Award } from 'lucide-react';

export const HistoryStory: React.FC = () => {
  const timeline = [
    {
      year: "1883",
      title: "Gründung durch Dietrich Schlemermeyer",
      desc: "Grundsteinlegung in Balge-Blenhorst als traditionelle Bau- und Möbeltischlerei."
    },
    {
      year: "1979",
      title: "Übergabe an Dieter Schlemermeyer",
      desc: "Spezialisierung auf exklusiven Treppenbau und moderne Werkstattfertigung für die Region."
    },
    {
      year: "2020",
      title: "Übernahme durch Dirk Schlemermeyer",
      desc: "Fortführung in 4. Generation durch Tischlermeister Dirk Schlemermeyer mit Fokus auf nachhaltige Maßarbeit."
    },
    {
      year: "Heute",
      title: "140+ Jahre gelebte Handwerkskultur",
      desc: "Meister und Gesellen verbinden moderne CAD-Konstruktion mit echtem Werkstattstolz."
    }
  ];

  return (
    <section className="section-wrapper dark" id="ueber-uns">
      <div className="container-custom">
        
        {/* TOP GRID */}
        <div className="history-top-grid">
          
          {/* TEXT */}
          <div className="history-text-col">
            <div className="badge-pill dark">
              <Award size={14} color="#F59E0B" />
              <span>Tradition &amp; Meisterstolz seit 1883</span>
            </div>

            <h2>
              Holz verzeiht keine halben Sachen. <br />
              <span className="wood-highlight-text">
                4 Generationen Familienbetrieb.
              </span>
            </h2>

            <p>
              Was 1883 mit Dietrich Schlemermeyer begann, führen wir heute in vierter Generation mit unverminderter Leidenschaft fort. Während Großkonzerne auf Stangenware setzen, glauben wir an die unvergleichliche Qualität echter Maßfertigung.
            </p>
            <p>
              In unserer modernen Werkstatt in Balge-Blenhorst bei Nienburg/Weser vereinen wir traditionelle Holzverbindungen mit modernster CAD-Konstruktion. Jede Treppe, jeder Parkettboden und jede Tür wird von ausgebildeten Meistern und Gesellen gefertigt.
            </p>

            <div className="history-quote-box">
              <p style={{ fontStyle: 'italic', color: '#FCD34D', fontSize: '0.95rem', marginBottom: '4px' }}>
                „Bei uns verlässt kein Bauteil die Werkstatt, hinter dem ich nicht persönlich mit meinem Namen stehe.“
              </p>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>
                – Dirk Schlemermeyer, Inhaber &amp; Tischlermeister
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              position: 'relative'
            }}>
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0163-1-scaled_ergebnis.webp"
                alt="Werkstatt der Tischlerei Schlemermeyer in Balge"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(18,21,27,0.85)',
                backdropFilter: 'blur(8px)',
                padding: '12px 18px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#FFFFFF'
              }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FCD34D' }}>
                  Eigene Fertigungsstätte in Balge-Blenhorst
                </p>
                <p style={{ fontSize: '0.75rem', color: '#CBD5E1', marginTop: '2px' }}>
                  Moderne Maschinenpräzision trifft traditionelle Meisterhand
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* TIMELINE */}
        <div className="timeline-grid">
          {timeline.map((m, i) => (
            <div key={i} className="timeline-card">
              <div className="timeline-year">{m.year}</div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.02rem', marginBottom: '8px' }}>
                {m.title}
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.55 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
