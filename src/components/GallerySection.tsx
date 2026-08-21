import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/content';
import { Image as ImageIcon, Eye, X, ArrowRight } from 'lucide-react';

interface GalleryProps {
  onOpenLeadFunnel: (projectTitle?: string) => void;
}

export const GallerySection: React.FC<GalleryProps> = ({ onOpenLeadFunnel }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const filterTabs = [
    { id: 'all', label: 'Alle Projekte' },
    { id: 'treppen', label: 'Treppenbau' },
    { id: 'holzbau', label: 'Zimmerei & Holzbau' },
    { id: 'boeden', label: 'Parkett & Böden' },
    { id: 'restauration', label: 'Restauration & Altholz' }
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

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
            Entdecken Sie eine Auswahl unserer gefertigten Maßtreppen, Holzrahmenbauten, Parkettböden und restaurierten Holzobjekte. Jedes Projekt ein echtes Meister-Unikat.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="gallery-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`gallery-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GALLERY GRID (3 SPALTEN) */}
        <div className="gallery-grid">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="gallery-card"
            >
              <div className="gallery-img-wrap">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="gallery-card-body" style={{ padding: '24px 26px' }}>
                <div>
                  <h4 style={{ fontSize: '1.24rem', fontWeight: 900, color: '#0F172A', marginBottom: '10px', lineHeight: 1.3 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.6, marginBottom: '16px' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ 
                  paddingTop: '14px', 
                  borderTop: '1.5px solid #F1F5F9', 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  alignItems: 'center',
                  fontSize: '0.94rem'
                }}>
                  <span style={{ color: '#C96A00', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Projekt ansehen &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE BUTTON (+3 PROJEKTE) */}
        {hasMore && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button
              onClick={handleLoadMore}
              className="btn-secondary"
              style={{ 
                padding: '14px 36px', 
                fontSize: '1rem', 
                fontWeight: 800,
                background: '#FFFFFF',
                borderColor: '#C96A00',
                color: '#C96A00',
                boxShadow: '0 6px 20px rgba(201, 106, 0, 0.12)'
              }}
            >
              <span>Weitere 3 Projekte laden</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

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

      {/* LIGHTBOX MODAL (VOLLSTÄNDIGE, NICHT ABGESCHNITTENE BILDER) */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '860px', width: '92vw', maxHeight: '92vh', overflowY: 'auto' }}>
            <div style={{ 
              position: 'relative', 
              background: '#0B1017', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              minHeight: '360px',
              maxHeight: '62vh'
            }}>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  maxHeight: '62vh', 
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(11, 16, 23, 0.85)',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Schließen"
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '32px 36px', background: '#FFFFFF' }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 900, marginBottom: '10px', color: '#0F172A', lineHeight: 1.25 }}>
                  {selectedItem.title}
                </h3>
                <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.65 }}>
                  {selectedItem.description}
                </p>
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '20px',
                borderTop: '1.5px solid #F1F5F9',
                flexWrap: 'wrap',
                gap: '14px'
              }}>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="btn-secondary"
                  style={{ padding: '12px 24px', fontSize: '0.94rem' }}
                >
                  Zurück zur Übersicht
                </button>
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onOpenLeadFunnel(title);
                  }}
                  className="btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.96rem' }}
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
