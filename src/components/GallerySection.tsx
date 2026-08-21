import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/content';
import { Image as ImageIcon, Eye, X, ArrowRight } from 'lucide-react';

interface GalleryProps {
  onOpenLeadFunnel: (projectTitle?: string) => void;
}

export const GallerySection: React.FC<GalleryProps> = ({ onOpenLeadFunnel }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'Alle Projekte' },
    { id: 'treppen', label: 'Treppenbau' },
    { id: 'boeden', label: 'Parkett & Böden' },
    { id: 'restauration', label: 'Restauration' },
    { id: 'tueren', label: 'Innentüren' }
  ];

  return (
    <section className="section-wrapper" id="galerie">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="badge-pill amber">
            <ImageIcon size={14} />
            <span>Referenzen &amp; Inspiration</span>
          </div>
          <h2>Eindrücke unserer Handwerkskunst.</h2>
          <p>
            Entdecken Sie eine Auswahl unserer gefertigten Maßtreppen, verlegten Parkettböden und restaurierten Holzobjekte. Jedes Projekt ein echtes Meister-Unikat.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="gallery-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`gallery-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="gallery-card"
            >
              <div className="gallery-img-wrap">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="gallery-card-body" style={{ padding: '22px 24px' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px', lineHeight: 1.3 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.6, marginBottom: '16px' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ 
                  paddingTop: '12px', 
                  borderTop: '1.5px solid #F1F5F9', 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  alignItems: 'center',
                  fontSize: '0.92rem'
                }}>
                  <span style={{ color: '#C96A00', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Projekt ansehen &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALLOUT */}
        <div style={{ 
          marginTop: '48px', 
          background: '#FFFFFF', 
          border: '1.5px solid #E8E2D5', 
          borderRadius: '16px', 
          padding: '32px', 
          textAlign: 'center',
          maxWidth: '780px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
            Haben Sie ein konkretes Treppen- oder Bodenprojekt vor Augen?
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#64748B', marginBottom: '20px' }}>
            Gerne planen wir mit Ihnen die millimetergenaue Umsetzung nach architektonischen Plänen oder eigenen Skizzen.
          </p>
          <button
            onClick={() => onOpenLeadFunnel()}
            className="btn-primary"
          >
            <span>Eigenes Wunschprojekt anfragen</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ position: 'relative', height: '380px', background: '#000' }}>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.7)',
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

            <div style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 900, marginBottom: '10px', color: '#0F172A' }}>
                {selectedItem.title}
              </h3>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '24px' }}>
                {selectedItem.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="btn-secondary"
                  style={{ padding: '12px 20px', fontSize: '0.94rem' }}
                >
                  Zurück
                </button>
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onOpenLeadFunnel(title);
                  }}
                  className="btn-primary"
                  style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  <span>Ähnliches Projekt anfragen</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
