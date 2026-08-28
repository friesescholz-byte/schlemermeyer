import React, { useState, useEffect, useRef } from 'react';
import { 
  GalleryItem, 
  getStoredGalleryItems, 
  saveStoredGalleryItems, 
  resetStoredGalleryItems 
} from '../data/galleryStore';
import { 
  ArrowLeft, 
  Plus, 
  Edit3, 
  Trash2, 
  MoveUp, 
  MoveDown, 
  Upload, 
  Image as ImageIcon, 
  Search, 
  Filter, 
  Check, 
  X, 
  Sparkles, 
  Layers, 
  Hammer, 
  ShieldCheck, 
  RotateCcw,
  ExternalLink,
  Save
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AdminDashboardProps {
  onNavigateHome: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigateHome }) => {
  const [items, setItems] = useState<GalleryItem[]>(getStoredGalleryItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'innenausbau' | 'zimmerei' | 'dachdeckerei'>('all');
  
  // Modal State for Add / Edit
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);

  // Form State
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<'innenausbau' | 'zimmerei' | 'dachdeckerei'>('innenausbau');
  const [formCategoryLabel, setFormCategoryLabel] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formWoodType, setFormWoodType] = useState('');
  const [formImage, setFormImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const openCreateModal = () => {
    setEditingItem(null);
    setFormTitle('');
    setFormCategory('innenausbau');
    setFormCategoryLabel('Innenausbau & Tischlerei');
    setFormDescription('');
    setFormWoodType('Massive Eiche geölt');
    setFormImage('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0086_ergebnis.webp');
    setImagePreview('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0086_ergebnis.webp');
    setModalOpen(true);
  };

  const openEditModal = (item: GalleryItem) => {
    setEditingItem(item);
    setFormTitle(item.title);
    setFormCategory(item.category);
    setFormCategoryLabel(item.categoryLabel || '');
    setFormDescription(item.description);
    setFormWoodType(item.woodType || '');
    setFormImage(item.image);
    setImagePreview(item.image);
    setModalOpen(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setFormImage(result);
        setImagePreview(result);
        showToast('Bild erfolgreich geladen!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      alert('Bitte geben Sie einen Projekt-Titel ein.');
      return;
    }
    if (!formImage.trim()) {
      alert('Bitte hinterlegen Sie ein Bild oder wählen Sie eine Datei aus.');
      return;
    }

    if (editingItem) {
      // Update existing
      const updated = items.map((it) => {
        if (it.id === editingItem.id) {
          return {
            ...it,
            title: formTitle.trim(),
            category: formCategory,
            categoryLabel: formCategoryLabel.trim() || (
              formCategory === 'innenausbau' ? 'Innenausbau & Tischlerei' :
              formCategory === 'zimmerei' ? 'Zimmerei & Holzbau' : 'Dachdeckerei & Dachsanierung'
            ),
            description: formDescription.trim(),
            woodType: formWoodType.trim(),
            image: formImage.trim()
          };
        }
        return it;
      });
      setItems(updated);
      saveStoredGalleryItems(updated);
      showToast('Projekt erfolgreich aktualisiert!');
    } else {
      // Create new
      const newItem: GalleryItem = {
        id: `g-custom-${Date.now()}`,
        title: formTitle.trim(),
        category: formCategory,
        categoryLabel: formCategoryLabel.trim() || (
          formCategory === 'innenausbau' ? 'Innenausbau & Tischlerei' :
          formCategory === 'zimmerei' ? 'Zimmerei & Holzbau' : 'Dachdeckerei & Dachsanierung'
        ),
        description: formDescription.trim(),
        woodType: formWoodType.trim(),
        image: formImage.trim()
      };
      // Put new item at the top
      const updated = [newItem, ...items];
      setItems(updated);
      saveStoredGalleryItems(updated);
      showToast('Neues Projekt erfolgreich hinzugefügt!');
    }

    setModalOpen(false);
  };

  const handleDeleteItem = (id: string, title: string) => {
    if (window.confirm(`Möchten Sie das Projekt "${title}" wirklich aus der Galerie entfernen?`)) {
      const updated = items.filter((it) => it.id !== id);
      setItems(updated);
      saveStoredGalleryItems(updated);
      showToast('Projekt wurde gelöscht.');
    }
  };

  const handleMoveItem = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= items.length) return;

    const newItems = [...items];
    const [moved] = newItems.splice(index, 1);
    newItems.splice(targetIndex, 0, moved);

    setItems(newItems);
    saveStoredGalleryItems(newItems);
    showToast('Reihenfolge aktualisiert!');
  };

  const handleResetDefaults = () => {
    if (window.confirm('Möchten Sie die Galerie wirklich auf den Standardzustand mit allen Meisterbildern zurücksetzen? Eigene Änderungen werden dabei überschrieben.')) {
      const reset = resetStoredGalleryItems();
      setItems(reset);
      showToast('Galerie auf Standard zurückgesetzt!');
    }
  };

  // Filtered List
  const filteredList = items.filter((item) => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesQuery = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.woodType && item.woodType.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const countInnenausbau = items.filter(i => i.category === 'innenausbau').length;
  const countZimmerei = items.filter(i => i.category === 'zimmerei').length;
  const countDach = items.filter(i => i.category === 'dachdeckerei').length;

  return (
    <div className="admin-page-wrapper">
      
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="admin-toast">
          <Check size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ADMIN TOP NAVBAR */}
      <header className="admin-header-bar">
        <div className="container-custom admin-header-inner">
          
          <div className="admin-brand-left">
            <button 
              onClick={onNavigateHome}
              className="admin-back-btn"
              title="Zurück zur Website"
            >
              <ArrowLeft size={18} />
              <span>Zurück zur Website</span>
            </button>
            <div className="admin-brand-divider" />
            <div className="admin-title-wrap">
              <h1 className="admin-main-heading">Galerie &amp; Projekte verwalten</h1>
              <span className="admin-live-badge">
                <span className="admin-pulse-dot" /> Live mit Website synchronisiert
              </span>
            </div>
          </div>

          <div className="admin-header-actions">
            <button
              onClick={handleResetDefaults}
              className="btn-secondary admin-reset-btn"
              title="Auf Standard zurücksetzen"
            >
              <RotateCcw size={16} />
              <span>Zurücksetzen</span>
            </button>

            <button
              onClick={openCreateModal}
              className="btn-primary admin-add-btn"
            >
              <Plus size={18} />
              <span>Neues Projekt anlegen</span>
            </button>
          </div>

        </div>
      </header>

      {/* STATS & CONTROL BAR */}
      <main className="container-custom admin-content-stage">
        
        {/* STATS TILES */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card" onClick={() => setCategoryFilter('all')}>
            <span className="admin-stat-number">{items.length}</span>
            <span className="admin-stat-label">Gesamt-Projekte in Galerie</span>
          </div>

          <div 
            className={`admin-stat-card ${categoryFilter === 'innenausbau' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('innenausbau')}
          >
            <div className="admin-stat-icon-wrap innenausbau">
              <Layers size={18} />
            </div>
            <span className="admin-stat-number">{countInnenausbau}</span>
            <span className="admin-stat-label">Innenausbau &amp; Tischlerei</span>
          </div>

          <div 
            className={`admin-stat-card ${categoryFilter === 'zimmerei' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('zimmerei')}
          >
            <div className="admin-stat-icon-wrap zimmerei">
              <Hammer size={18} />
            </div>
            <span className="admin-stat-number">{countZimmerei}</span>
            <span className="admin-stat-label">Zimmerei &amp; Holzbau</span>
          </div>

          <div 
            className={`admin-stat-card ${categoryFilter === 'dachdeckerei' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('dachdeckerei')}
          >
            <div className="admin-stat-icon-wrap dachdeckerei">
              <ShieldCheck size={18} />
            </div>
            <span className="admin-stat-number">{countDach}</span>
            <span className="admin-stat-label">Dachdeckerei &amp; Dachsanierung</span>
          </div>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="admin-filter-bar-card">
          <div className="admin-search-wrap">
            <Search size={18} className="admin-search-icon" />
            <input
              type="text"
              placeholder="Projekte durchsuchen (z. B. Faltwerktreppe, Eiche, Dachstuhl)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="admin-search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="admin-search-clear">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="admin-category-pills">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`admin-filter-pill ${categoryFilter === 'all' ? 'active' : ''}`}
            >
              Alle ({items.length})
            </button>
            <button
              onClick={() => setCategoryFilter('innenausbau')}
              className={`admin-filter-pill ${categoryFilter === 'innenausbau' ? 'active' : ''}`}
            >
              Innenausbau ({countInnenausbau})
            </button>
            <button
              onClick={() => setCategoryFilter('zimmerei')}
              className={`admin-filter-pill ${categoryFilter === 'zimmerei' ? 'active' : ''}`}
            >
              Zimmerei ({countZimmerei})
            </button>
            <button
              onClick={() => setCategoryFilter('dachdeckerei')}
              className={`admin-filter-pill ${categoryFilter === 'dachdeckerei' ? 'active' : ''}`}
            >
              Dachdeckerei ({countDach})
            </button>
          </div>
        </div>

        {/* PROJECT LIST */}
        <div className="admin-projects-list-wrap">
          
          <div className="admin-list-header">
            <h2 className="admin-list-title">
              Projektliste ({filteredList.length} Projekt{filteredList.length !== 1 ? 'e' : ''})
            </h2>
            <span className="admin-list-hint">
              Nutzen Sie die Pfeile ▲ ▼, um die Anzeige-Reihenfolge auf der Startseite direkt festzulegen.
            </span>
          </div>

          {filteredList.length === 0 ? (
            <div className="admin-empty-state">
              <ImageIcon size={48} color="#94A3B8" />
              <h3>Keine Projekte gefunden</h3>
              <p>Passen Sie Ihre Suchbegriffe oder Filter an, oder erstellen Sie ein neues Projekt.</p>
              <button onClick={openCreateModal} className="btn-primary" style={{ marginTop: '16px' }}>
                <Plus size={16} />
                <span>Neues Projekt anlegen</span>
              </button>
            </div>
          ) : (
            <div className="admin-items-table">
              {filteredList.map((item) => {
                // Real index in the original items array
                const realIndex = items.findIndex((it) => it.id === item.id);
                return (
                  <div key={item.id} className="admin-item-row">
                    
                    {/* POSITION & MOVE BUTTONS */}
                    <div className="admin-order-controls">
                      <button
                        onClick={() => handleMoveItem(realIndex, 'up')}
                        disabled={realIndex === 0}
                        className="admin-move-btn"
                        title="Nach oben verschieben (höhere Priorität in Galerie)"
                      >
                        <MoveUp size={16} />
                      </button>
                      <span className="admin-pos-number">#{realIndex + 1}</span>
                      <button
                        onClick={() => handleMoveItem(realIndex, 'down')}
                        disabled={realIndex === items.length - 1}
                        className="admin-move-btn"
                        title="Nach unten verschieben"
                      >
                        <MoveDown size={16} />
                      </button>
                    </div>

                    {/* THUMBNAIL */}
                    <div className="admin-thumb-wrap">
                      <img src={item.image} alt={item.title} className="admin-thumb-img" />
                    </div>

                    {/* DETAILS */}
                    <div className="admin-item-info">
                      <div className="admin-item-top-meta">
                        <span className={`admin-category-tag ${item.category}`}>
                          {item.categoryLabel || (
                            item.category === 'innenausbau' ? 'Innenausbau & Tischlerei' :
                            item.category === 'zimmerei' ? 'Zimmerei & Holzbau' : 'Dachdeckerei & Dachsanierung'
                          )}
                        </span>
                        {item.woodType && (
                          <span className="admin-material-tag">
                            {item.woodType}
                          </span>
                        )}
                      </div>
                      <h3 className="admin-item-title">{item.title}</h3>
                      <p className="admin-item-desc">{item.description}</p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="admin-item-actions">
                      <button
                        onClick={() => openEditModal(item)}
                        className="admin-edit-btn"
                        title="Projekt bearbeiten"
                      >
                        <Edit3 size={16} />
                        <span>Bearbeiten</span>
                      </button>

                      <button
                        onClick={() => handleDeleteItem(item.id, item.title)}
                        className="admin-delete-btn"
                        title="Projekt löschen"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>

      </main>

      {/* CREATE / EDIT MODAL */}
      {modalOpen && (
        <div className="admin-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="admin-modal-window" onClick={(e) => e.stopPropagation()}>
            
            <div className="admin-modal-header">
              <div>
                <span className="admin-modal-eyebrow">
                  {editingItem ? 'Projekt bearbeiten' : 'Neues Galerie-Projekt erfassen'}
                </span>
                <h3 className="admin-modal-title">
                  {editingItem ? editingItem.title : 'Projektinformationen & Bild'}
                </h3>
              </div>
              <button onClick={() => setModalOpen(false)} className="admin-modal-close-btn">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="admin-modal-form">
              
              <div className="admin-form-group">
                <label className="admin-form-label">
                  Projekttitel *
                </label>
                <input
                  type="text"
                  required
                  placeholder="z. B. Schwebende Kragarmtreppe in Eiche Natur mit Glas"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group" style={{ flex: 1 }}>
                  <label className="admin-form-label">
                    Haupt-Kategorie *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => {
                      const cat = e.target.value as 'innenausbau' | 'zimmerei' | 'dachdeckerei';
                      setFormCategory(cat);
                      if (cat === 'innenausbau') setFormCategoryLabel('Innenausbau & Tischlerei');
                      if (cat === 'zimmerei') setFormCategoryLabel('Zimmerei & Holzbau');
                      if (cat === 'dachdeckerei') setFormCategoryLabel('Dachdeckerei & Dachsanierung');
                    }}
                    className="admin-form-select"
                  >
                    <option value="innenausbau">Innenausbau &amp; Tischlerei (Treppen, Böden, Türen, Möbel)</option>
                    <option value="zimmerei">Zimmerei &amp; Holzbau (Dachstühle, Holzrahmenbau, Carports)</option>
                    <option value="dachdeckerei">Dachdeckerei &amp; Dachsanierung (Steildach, Flachdach, Dämmung)</option>
                  </select>
                </div>

                <div className="admin-form-group" style={{ flex: 1 }}>
                  <label className="admin-form-label">
                    Badge-Beschriftung / Gewerk
                  </label>
                  <input
                    type="text"
                    placeholder="z. B. Exklusiver Treppenbau oder Holzrahmenbau"
                    value={formCategoryLabel}
                    onChange={(e) => setFormCategoryLabel(e.target.value)}
                    className="admin-form-input"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  Holzart / Material / Ausführung
                </label>
                <input
                  type="text"
                  placeholder="z. B. Wildeiche geölt &amp; Edelstahlgeländer oder Tonziegel &amp; GEG-Dämmung"
                  value={formWoodType}
                  onChange={(e) => setFormWoodType(e.target.value)}
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  Kurzbeschreibung des Projekts
                </label>
                <textarea
                  rows={3}
                  placeholder="Beschreiben Sie die Besonderheiten, handwerklichen Details oder Wünsche des Kunden..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="admin-form-textarea"
                />
              </div>

              {/* BILD-INTEGRATION: FILE UPLOAD OR R2 URL */}
              <div className="admin-form-group">
                <label className="admin-form-label">
                  Projekt-Foto (Datei hochladen oder R2-URL eintragen) *
                </label>
                
                <div className="admin-image-picker-zone">
                  
                  {/* UPLOAD BUTTON */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />

                  <div className="admin-upload-actions-row">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="btn-secondary admin-file-select-btn"
                    >
                      <Upload size={16} />
                      <span>Foto vom Computer auswählen</span>
                    </button>
                    <span className="admin-or-sep">oder direkte R2-Link URL eintragen:</span>
                  </div>

                  <input
                    type="text"
                    placeholder="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/..."
                    value={formImage}
                    onChange={(e) => {
                      setFormImage(e.target.value);
                      setImagePreview(e.target.value);
                    }}
                    className="admin-form-input"
                    style={{ marginTop: '8px' }}
                  />

                  {/* LIVE PREVIEW BOX */}
                  {imagePreview && (
                    <div className="admin-preview-box">
                      <span className="admin-preview-label">Live-Vorschau:</span>
                      <div className="admin-preview-frame">
                        <img 
                          src={imagePreview} 
                          alt="Vorschau" 
                          className="admin-preview-img"
                          onError={() => {
                            // If invalid URL
                          }}
                        />
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* FORM FOOTER BUTTONS */}
              <div className="admin-modal-footer">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="btn-secondary"
                  style={{ padding: '12px 24px' }}
                >
                  <span>Abbrechen</span>
                </button>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '12px 30px' }}
                >
                  <Save size={16} />
                  <span>{editingItem ? 'Änderungen speichern' : 'Projekt veröffentlichen'}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
