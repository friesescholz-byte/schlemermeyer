import React, { useState, useEffect } from 'react';
import { GalleryItem, getStoredGalleryItems } from '../data/galleryStore';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, X } from 'lucide-react';

interface SubpageGallerySliderProps {
  category: 'innenausbau' | 'zimmerei' | 'dachdeckerei';
  badgeTitle: string;
  heading: string;
  description: string;
  onOpenLeadFunnel: (projectTitle?: string) => void;
}

export const SubpageGallerySlider: React.FC<SubpageGallerySliderProps> = ({
  category,
  badgeTitle,
  heading,
  description,
  onOpenLeadFunnel
}) => {
  const [items, setItems] = useState<GalleryItem[]>(() => {
    return getStoredGalleryItems().filter(item => item.category === category);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedModalItem, setSelectedModalItem] = useState<GalleryItem | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleUpdate = () => {
      const all = getStoredGalleryItems();
      const filtered = all.filter(it => it.category === category);
      setItems(filtered);
      setCurrentIndex(0);
    };

    window.addEventListener('schlemermeyer_gallery_updated', handleUpdate);
    return () => window.removeEventListener('schlemermeyer_gallery_updated', handleUpdate);
  }, [category]);

  const itemsPerPage = 3;
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex(prev => {
      const nextIndex = prev - itemsPerPage;
      return nextIndex < 0 ? Math.max(0, (totalPages - 1) * itemsPerPage) : nextIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex(prev => {
      const nextIndex = prev + itemsPerPage;
      return nextIndex >= items.length ? 0 : nextIndex;
    });
  };

  const handleImageLoaded = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="section-wrapper" style={{ backgroundColor: '#FAF8F5', borderBottom: '1px solid #E8E2D5', padding: '75px 0' }}>
      <div className="container-custom">
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '680px' }}>
            <div className="badge-pill amber" style={{ marginBottom: '10px' }}>
              <Sparkles size={14} />
              <span>{badgeTitle}</span>
            </div>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 10px 0' }}>
              {heading}
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65, margin: 0 }}>
              {description}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748B' }}>
              Seite <strong style={{ color: '#C96A00' }}>{currentPage + 1}</strong> von {totalPages} ({items.length} Projekte)
            </span>
          </div>
        </div>

        {/* SLIDER WITH LEFT & RIGHT SIDE ARROWS */}
        <div className="subpage-slider-outer-wrap">
          
          {/* LEFT SIDE ARROW */}
          <button
            onClick={handlePrev}
            className="subpage-slider-side-btn left"
            aria-label="Vorherige 3 Projekte"
            title="Vorherige 3 Projekte"
          >
            <ChevronLeft size={24} />
          </button>

          {/* 3 PROJECTS GRID */}
          <div className="gallery-grid" style={{ flex: 1, margin: 0 }}>
            {visibleItems.map((item) => {
              const isLoaded = loadedImages[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedModalItem(item)}
                  className="gallery-card"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSelectedModalItem(item);
                  }}
                >
                  <div className="gallery-img-wrap">
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
                  </div>

                  <div className="gallery-card-body" style={{ padding: '24px 26px' }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px', lineHeight: 1.3 }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.55, marginBottom: '16px' }}>
                        {item.description}
                      </p>
                    </div>

                    <div style={{ 
                      paddingTop: '14px', 
                      borderTop: '1.5px solid #F1ECE1', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      fontSize: '0.86rem'
                    }}>
                      <span style={{ color: '#64748B', fontWeight: 600 }}>
                        {item.woodType || 'Meisterhandwerk'}
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

          {/* RIGHT SIDE ARROW */}
          <button
            onClick={handleNext}
            className="subpage-slider-side-btn right"
            aria-label="Nächste 3 Projekte"
            title="Nächste 3 Projekte"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* BOTTOM PAGINATION DOTS */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '30px' }}>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
                style={{
                  width: currentPage === i ? '28px' : '9px',
                  height: '9px',
                  borderRadius: '9999px',
                  background: currentPage === i ? '#C96A00' : '#CBD5E1',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.25s ease'
                }}
                aria-label={`Gehe zu Seite ${i + 1}`}
              />
            ))}
          </div>
        )}

      </div>

      {/* FIXED LIGHTBOX MODAL WINDOW */}
      {selectedModalItem && (
        <div className="gallery-modal-backdrop" onClick={() => setSelectedModalItem(null)}>
          <div className="gallery-modal-box" onClick={(e) => e.stopPropagation()}>
            
            <button
              className="gallery-modal-close"
              onClick={() => setSelectedModalItem(null)}
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            <div className="gallery-modal-img-container">
              <img src={selectedModalItem.image} alt={selectedModalItem.title} />
            </div>

            <div className="gallery-modal-info">
              <div>
                <span className="gallery-modal-badge">
                  {selectedModalItem.categoryLabel || (
                    selectedModalItem.category === 'innenausbau' ? 'Innenausbau & Tischlerei' :
                    selectedModalItem.category === 'zimmerei' ? 'Zimmerei & Holzbau' : 'Dachdeckerei & Dachsanierung'
                  )}
                </span>
                <h3 className="gallery-modal-title">{selectedModalItem.title}</h3>
                <p className="gallery-modal-desc">{selectedModalItem.description}</p>
                
                {selectedModalItem.woodType && (
                  <div style={{ marginTop: '16px', fontSize: '0.92rem', color: '#475569', background: '#F8FAFC', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <strong>Material / Ausführung:</strong> {selectedModalItem.woodType}
                  </div>
                )}
              </div>

              <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    const title = selectedModalItem.title;
                    setSelectedModalItem(null);
                    onOpenLeadFunnel(title);
                  }}
                  className="btn-primary"
                  style={{ padding: '12px 22px' }}
                >
                  <span>Projekt jetzt anfragen</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setSelectedModalItem(null)}
                  className="btn-secondary"
                  style={{ padding: '12px 18px' }}
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
