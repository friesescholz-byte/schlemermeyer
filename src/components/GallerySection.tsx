import React, { useState, useEffect } from 'react';
import { GalleryItem, getStoredGalleryItems } from '../data/galleryStore';
import { Image as ImageIcon, Eye, X, ArrowRight, Layers, Hammer, ShieldCheck } from 'lucide-react';

interface GalleryProps {
  onOpenLeadFunnel: (projectTitle?: string) => void;
}

export const GallerySection: React.FC<GalleryProps> = ({ onOpenLeadFunnel }) => {
  const [items, setItems] = useState<GalleryItem[]>(getStoredGalleryItems);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleUpdate = () => {
      setItems(getStoredGalleryItems());
    };
    window.addEventListener('schlemermeyer_gallery_updated', handleUpdate);
    return () => window.removeEventListener('schlemermeyer_gallery_updated', handleUpdate);
  }, []);

  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter(item => item.category === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const filterTabs = [
    { id: 'all', label: 'Alle Projekte' },
    { id: 'innenausbau', label: 'Innenausbau & Tischlerei' },
    { id: 'zimmerei', label: 'Zimmerei & Holzbau' },
    { id: 'dachdeckerei', label: 'Dachdeckerei & Dachsanierung' }
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleImageLoaded = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
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
            Entdecken Sie eine Auswahl unserer gefertigten Maßtreppen, Dachstühle, Holzrahmenbauten, Parkettböden und Dacheindeckungen. Jedes Projekt ein echtes Meister-Unikat.
          </p>
        </div>

        {/* FILTER BAR (EXAKT 3 KATEGORIEN + ALLE PROJEKTE) */}
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

        {/* GALLERY GRID (3 SPALTEN MIT SCHNELLER BILD-OPTIMIERUNG) */}
        <div className="gallery-grid">
          {displayedItems.map((item) => {
            const isLoaded = loadedImages[item.id];
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="gallery-card"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedItem(item);
                }}
              >
                <div className="gallery-img-wrap">
                  {/* SHIMMER PLACEHOLDER BACKGROUND */}
                  <div className={`gallery-img-placeholder ${isLoaded ? 'loaded' : ''}`} />
                  
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoaded(item.id)}
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transition: 'opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                  
                  <div className="gallery-badge-top">
                    <span>{item.categoryLabel || (
                      item.category === 'innenausbau' ? 'Innenausbau' :
                      item.category === 'zimmerei' ? 'Zimmerei' : 'Dachdeckerei'
                    )}</span>
                  </div>
                </div>

                <div className="gallery-card-body" style={{ padding: '24px 26px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.22rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px', lineHeight: 1.3 }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.6, marginBottom: '16px' }}>
                      {item.description}
                    </p>
                  </div>

                  <div style={{ 
                    paddingTop: '14px', 
                    borderTop: '1.5px solid #F1ECE1', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    fontSize: '0.88rem'
                  }}>
                    <span style={{ color: '#64748B', fontWeight: 600 }}>
                      {item.woodType || 'Meisterqualität'}
                    </span>
                    <span style={{ color: '#C96A00', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      Details ansehen &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
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
              <span>Weitere 3 Projekte laden ({filteredItems.length - visibleCount} übrig)</span>
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
            Haben Sie ein konkretes Projekt im Kopf?
          </h3>
          <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '20px', maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto' }}>
            Wir fertigen individuelle Treppen, Zimmereikonstruktionen, Parkettböden und Dächer exakt nach Ihren Vorstellungen.
          </p>
          <button
            onClick={() => onOpenLeadFunnel('Individuelles Projekt')}
            className="btn-primary"
            style={{ padding: '12px 28px' }}
          >
            <span>Projekt unverbindlich anfragen</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedItem && (
        <div className="gallery-modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="gallery-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Schließen"
            >
              <X size={22} />
            </button>

            <div className="gallery-modal-img-container">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>

            <div className="gallery-modal-info">
              <span className="gallery-modal-badge">
                {selectedItem.categoryLabel || selectedItem.category}
              </span>
              <h3 className="gallery-modal-title">{selectedItem.title}</h3>
              <p className="gallery-modal-desc">{selectedItem.description}</p>
              
              {selectedItem.woodType && (
                <div style={{ marginTop: '12px', fontSize: '0.92rem', color: '#475569' }}>
                  <strong>Material / Ausführung:</strong> {selectedItem.woodType}
                </div>
              )}

              <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onOpenLeadFunnel(title);
                  }}
                  className="btn-primary"
                  style={{ padding: '12px 24px' }}
                >
                  <span>Ähnliches Projekt anfragen</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="btn-secondary"
                  style={{ padding: '12px 20px' }}
                >
                  <span>Schließen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
