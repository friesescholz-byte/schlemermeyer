import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight, Wrench, ArrowRight } from 'lucide-react';

interface BeforeAfterProps {
  onOpenLeadFunnel: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ onOpenLeadFunnel }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="section-wrapper alt" id="vorher-nachher">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="badge-pill amber">
            <Sparkles size={14} />
            <span>Vorher &amp; Nachher Beweis</span>
          </div>
          <h2>Meisterhafte Restauration statt teurem Abriss.</h2>
          <p>
            Ziehen Sie den Schieberegler und erleben Sie, wie wir abgetretene, knarrende Altbautreppen und Dielenböden in neuem Glanz erstrahlen lassen.
          </p>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="ba-slider-container">
          <div
            ref={containerRef}
            className="ba-slider-stage"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER IMAGE (BACKGROUND FULL) */}
            <img
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0008_ergebnis.webp"
              alt="Nach der Restauration: Meisterhaft sanierte Treppe Schlemermeyer"
              className="ba-img-after"
            />
            <div className="ba-pill-tag after">
              ✓ NACHHER: Meisterhaft restauriert
            </div>

            {/* BEFORE IMAGE (CLIPPED ON TOP) */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                pointerEvents: 'none'
              }}
            >
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0086_ergebnis.webp"
                alt="Vor der Restauration: Abgetretene Treppe"
                className="ba-img-before"
                style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
              />
              <div className="ba-pill-tag before">
                VORHER: Abgetreten &amp; unansehnlich
              </div>
            </div>

            {/* SLIDER DIVIDER */}
            <div
              className="ba-slider-divider"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="ba-slider-handle">
                <ArrowLeftRight size={20} />
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', padding: '0 8px', fontSize: '0.82rem', color: '#64748B' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#1E2530' }}>
              <Wrench size={14} color="#C96A00" />
              Staubarme Schleiftechnik &amp; Bio-Öle
            </span>
            <span style={{ fontStyle: 'italic' }}>◄ Regler ziehen ►</span>
            <span style={{ fontWeight: 700, color: '#047857' }}>100% Werterhalt</span>
          </div>
        </div>

        {/* 3 RESTAURATION HIGHLIGHTS */}
        <div className="ba-features-grid">
          <div className="ba-feature-box">
            <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(201,106,0,0.12)', color: '#C96A00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '10px' }}>
              1
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Knarrgeräusche beseitigen</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
              Präzise Nachkeilung und elastische Stabilisierung der Stufen für dauerhafte Ruhe bei jedem Schritt.
            </p>
          </div>

          <div className="ba-feature-box">
            <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(201,106,0,0.12)', color: '#C96A00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '10px' }}>
              2
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Staubarmes Schleifen</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
              Industrie-Absauganlagen der Staubklasse M halten Ihren Wohnbereich während der Arbeiten sauber.
            </p>
          </div>

          <div className="ba-feature-box">
            <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(201,106,0,0.12)', color: '#C96A00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '10px' }}>
              3
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Ökologischer Schutz</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
              Biologische Hartöle und Hartwachse betonen die Holzmaserung und schützen vor Flecken und Abrieb.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={onOpenLeadFunnel}
            className="btn-primary"
          >
            <span>Alte Treppe oder Parkett sanieren lassen</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
