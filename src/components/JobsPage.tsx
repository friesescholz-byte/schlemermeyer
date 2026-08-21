import React, { useState } from 'react';
import { 
  Calendar, 
  Car, 
  Users, 
  HeartHandshake, 
  ShieldPlus, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Wrench, 
  Euro, 
  Award,
  Send,
  Coffee,
  Building2,
  ChevronDown,
  ChevronUp,
  FileText,
  Briefcase,
  Layers,
  GraduationCap,
  Paperclip,
  UploadCloud,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface JobsPageProps {
  onOpenJobModal: (jobId?: string) => void;
  onNavigateHome: () => void;
}

export const JobsPage: React.FC<JobsPageProps> = ({ onOpenJobModal, onNavigateHome }) => {
  // Accordion state for job openings
  const [expandedJob, setExpandedJob] = useState<string | null>('tischler');

  // Quick apply form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'Tischler / Schreiner',
    experience: 'Geselle',
    message: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setUploadedFiles((prev: File[]) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev: File[]) => prev.filter((_: File, i: number) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const detailedJobs = [
    {
      id: "tischler",
      roleTitle: "Tischler / Schreiner (m/w/d)",
      subtitle: "Helfer • Gesellen • Vorarbeiter • Meister",
      categoryBadge: "Handwerk & Treppenbau",
      type: "4-Tage-Woche (Mo–Do) • Unbefristet",
      salary: "Überdurchschnittliche Vergütung + Extras",
      location: "Balge-Blenhorst & regionale Montage",
      teaser: "Fertigung von anspruchsvollen Massivholztreppen, Faltwerkanlagen und maßgefertigten Holzelementen in eigener Meisterwerkstatt.",
      tasks: [
        "Handwerkliche Fertigung von Massivholztreppen & Wangen in Balge",
        "Bedienung moderner CNC- & Holzbearbeitungsmaschinen",
        "Saubere, millimetergenaue Montage im Team beim Kunden",
        "Restauration historischer Treppen & Sanierungsarbeiten"
      ],
      requirements: [
        "Ausbildung als Tischler/Schreiner (oder Praxiserfahrung mit Holz)",
        "Freude an echter Maßarbeit ohne industrielle Fließband-Hektik",
        "Zuverlässigkeit, Teamgeist und sorgfältiges Arbeiten",
        "Führerschein Klasse B von Vorteil (Fahrzeit = Arbeitszeit)"
      ],
      perks: [
        "4-Tage-Woche (Mo–Do): Jedes Wochenende 3 Tage frei",
        "100% bezahlte Fahrzeiten von und zur Baustelle",
        "Betriebliche Krankenversicherung (voll vom Betrieb finanziert)",
        "Ergonomische Vakuum-Hebehilfen & Engelbert-Strauss-Montur"
      ]
    },
    {
      id: "zimmerer",
      roleTitle: "Zimmerer / Holzbau-Fachkraft (m/w/d)",
      subtitle: "Gesellen • Vorarbeiter • Meister",
      categoryBadge: "Holzbau & Konstruktion",
      type: "4-Tage-Woche (Mo–Do) • Unbefristet",
      salary: "Attraktiver Stundenlohn + Sonderprämien",
      location: "Balge-Blenhorst & Umkreis",
      teaser: "Konstruktiver Holzbau, tragende Treppenunterbauten, Altholzaufbereitung und anspruchsvolle Montagen im Weserbergland.",
      tasks: [
        "Montage von tragenden Holzkonstruktionen für Treppenaufgänge",
        "Fachgerechter Abbund & traditionelle Holzverbindungen",
        "Aufbereitung historischer Eichenbalken für Sanierungen",
        "Eigenverantwortliche Baustellenkoordination im Zweier-Team"
      ],
      requirements: [
        "Ausbildung als Zimmerer oder vergleichbare Qualifikation",
        "Verständnis für Statik, Abbund & solide Holzverbindungen",
        "Sicherer Umgang mit Kettensäge und modernen Montagegeräten",
        "Führerschein Klasse B / BE wünschenswert"
      ],
      perks: [
        "4-Tage-Woche (Mo–Do): Freitags immer frei",
        "Voll bezahlte Fahrzeiten ab Werkstatt Balge",
        "Betriebliche Kranken-Zusatzversicherung inklusive",
        "Ganzjähriger krisensicherer Arbeitsplatz ohne Winterpause"
      ]
    },
    {
      id: "bodenleger",
      roleTitle: "Parkett- & Bodenleger / Monteur (m/w/d)",
      subtitle: "Facharbeiter • Quereinsteiger willkommen",
      categoryBadge: "Parkett & Fußbodenkultur",
      type: "4-Tage-Woche (Mo–Do) • Unbefristet",
      salary: "Faire, leistungsorientierte Bezahlung",
      location: "Balge-Blenhorst & Region",
      teaser: "Verlegung von edlen Landhausdielen, Schlossdielen und staubarmes Schleifen und Veredeln hochwertiger Holzböden.",
      tasks: [
        "Verlegung von Massivholzdielen, Fischgrät & Schlossdielen",
        "Staubarmes Schleifen & Versiegeln mit HEPA-Absaugung",
        "Oberflächenveredelung mit natürlichen Ölen & Hartwachs",
        "Perfekte Abstimmung von Böden und Treppenstufen"
      ],
      requirements: [
        "Erfahrung im Verlegen oder Schleifen von Parkettböden",
        "Sorgfältiges, sauberes Arbeiten in Kundenwohnräumen",
        "Lust auf moderne Maschinen und ökologische Naturöle",
        "Zuverlässigkeit und Freude an sichtbaren Erfolgen"
      ],
      perks: [
        "4-Tage-Woche (Jedes Wochenende 3 Tage frei)",
        "100% bezahlte Fahrzeiten & moderne Staubschutz-Technik",
        "Betriebliche Krankenversicherung inklusive",
        "Ruhiges Arbeiten ohne Akkorddruck im Meisterbetrieb"
      ]
    }
  ];

  const mainPerks = [
    {
      icon: Calendar,
      title: "4-Tage-Woche (Mo–Do)",
      highlight: "Jedes Wochenende 3 Tage frei!",
      desc: "Konzentriert von Montag bis Donnerstag arbeiten und jeden Freitag, Samstag und Sonntag voll und ganz fürs Privatleben, Familie und Hobbys genießen."
    },
    {
      icon: Car,
      title: "100% Bezahlte Fahrzeiten",
      highlight: "Fahrzeit = Arbeitszeit",
      desc: "Bei uns beginnt deine Vergütung nicht erst auf der Baustelle: Jede Minute An- und Abfahrt im Meisterfahrzeug wird fair und transparent bezahlt."
    },
    {
      icon: ShieldPlus,
      title: "Betriebliche Krankenversicherung",
      highlight: "Premium-Gesundheitsschutz inklusive",
      desc: "Umfassende Zusatzleistungen, Zahnvorsorge, Facharzt-Vorteile und Gesundheitsbudgets für dich – voll von Schlemermeyer übernommen."
    },
    {
      icon: Users,
      title: "Motivierte & hilfsbereite Kollegen",
      highlight: "Echtes Team ohne Einzelkämpfer",
      desc: "Ein familiäres Miteinander in 4. Generation. Hier hilft jeder jedem, niemand wird mit schweren Balken oder komplizierten Montagen allein gelassen."
    },
    {
      icon: Euro,
      title: "Überdurchschnittliches Gehalt",
      highlight: "Pünktlich & leistungsgerecht",
      desc: "Faire, attraktive Entlohnung über Tarif, Urlaubs- und Weihnachtsgeld sowie regelmäßige Gehaltsanpassungen und steuerfreie Extras."
    },
    {
      icon: Wrench,
      title: "Modernste Werkstatt & Hebehilfen",
      highlight: "Rückenschonendes Arbeiten",
      desc: "Moderne CNC-Technik, Vakuum-Hebehilfen, Festool-Montageausstattung und ergonomische Maschinen auf über 140 Jahren Meisterwerkstatt-Fläche."
    }
  ];

  return (
    <div className="career-onepager-root" style={{ backgroundColor: '#FAF8F5' }}>
      
      {/* 1. HELLER, FREUNDLICHER PRO-HERO (KEIN DARK MODE) */}
      <section className="career-light-hero-stage">
        <div className="career-light-hero-bg" />
        <div className="career-light-hero-frosted-overlay" />

        <div className="container-custom" style={{ position: 'relative', zIndex: 3 }}>
          
          {/* BREADCRUMB */}
          <div className="about-breadcrumb light" style={{ marginBottom: '20px' }}>
            <button onClick={onNavigateHome} className="breadcrumb-link">
              Startseite
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Karriere &amp; Jobangebote</span>
          </div>

          {/* HEADLINE & HOOK */}
          <div className="career-light-hero-header">
            <div className="badge-pill amber" style={{ background: '#FFFFFF', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
              <Sparkles size={14} color="#C96A00" />
              <span>Wir suchen Verstärkung • Meisterbetrieb seit 1883</span>
            </div>

            <h1 className="career-light-hero-title">
              Wir brauchen Verstärkung! <br />
              <span className="career-title-accent">
                Tischler / Zimmerer (m/w/d)
              </span>
            </h1>

            <p className="career-light-hero-sub">
              <strong>Helfer &bull; Gesellen &bull; Vorarbeiter &bull; Meister</strong> in Balge-Blenhorst
            </p>

            {/* 4 TOP-BENEFITS AUS INSTAGRAM */}
            <div className="career-light-hero-perks-row">
              <div className="light-perk-badge">
                <CheckCircle2 size={16} color="#C96A00" />
                <span><strong>4-Tage-Woche (Mo–Do)</strong></span>
              </div>
              <div className="light-perk-badge">
                <CheckCircle2 size={16} color="#C96A00" />
                <span><strong>100% Bezahlte Fahrzeiten</strong></span>
              </div>
              <div className="light-perk-badge">
                <CheckCircle2 size={16} color="#C96A00" />
                <span><strong>Betriebliche Krankenversicherung</strong></span>
              </div>
              <div className="light-perk-badge">
                <CheckCircle2 size={16} color="#C96A00" />
                <span><strong>Familiärer Meisterbetrieb</strong></span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="career-light-hero-cta">
              <a 
                href={`tel:${COMPANY_INFO.contact.phoneCallable}`}
                className="btn-primary"
                style={{ padding: '16px 32px', fontSize: '1.02rem' }}
              >
                <Phone size={18} />
                <span>Direkt anrufen: 05022 / 633</span>
              </a>

              <a 
                href="#schnellbewerbung" 
                className="btn-secondary"
                style={{ padding: '16px 28px', fontSize: '0.98rem' }}
              >
                <span>Express-Bewerbung (60 Sek.)</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* GROßES TEAM- & WERKSTATTFOTO UNTER DER ÜBERSCHRIFT */}
          <div className="career-large-team-photo-wrap">
            <img 
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0163-1-scaled_ergebnis.webp" 
              alt="Meisterwerkstatt Tischlerei Dirk Schlemermeyer Balge" 
              className="career-large-team-img"
            />
            
            <div className="career-photo-floating-banner">
              <div className="banner-left">
                <Building2 size={24} color="#C96A00" />
                <div>
                  <strong>Tischlerei Dirk Schlemermeyer GmbH</strong>
                  <span>Blenhorster Str. 7, 31609 Balge • 4. Generation seit 1883</span>
                </div>
              </div>
              <div className="banner-right">
                <span>Neugierig geworden? Melde dich ganz ungezwungen!</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. VALUE PROPOSITION: DIE 6 TOP-VORTEILE */}
      <section className="section-wrapper white">
        <div className="container-custom">
          
          <div className="section-header">
            <div className="badge-pill amber">
              <Award size={14} />
              <span>Echte Wertschätzung</span>
            </div>
            <h2>Warum Du bei Schlemermeyer anfangen solltest</h2>
            <p>
              Handwerk soll stolz machen und das Leben bereichern. Deshalb bieten wir dir Arbeitsbedingungen, die in unserer Region Maßstäbe setzen.
            </p>
          </div>

          <div className="career-benefits-deck">
            {mainPerks.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="perk-card">
                  <div className="perk-card-header">
                    <div className="perk-icon-wrap">
                      <Icon size={24} color="#C96A00" />
                    </div>
                    <span className="perk-badge">{p.highlight}</span>
                  </div>

                  <h3 className="perk-title">{p.title}</h3>
                  <p className="perk-desc">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. PROFESSIONELLE STELLENANZEIGEN MIT AUSKLAPP-FUNKTION */}
      <section className="section-wrapper alt">
        <div className="container-custom">
          
          <div className="section-header">
            <div className="badge-pill amber">
              <Briefcase size={14} />
              <span>Offene Positionen</span>
            </div>
            <h2>Gesuchte Fachkräfte im Detail</h2>
            <p>
              Klicke auf eine Stelle, um alle Aufgaben, Anforderungen und Vorteile im Detail auszuklappen.
            </p>
          </div>

          {/* AKKORDION-STELLENANZEIGEN */}
          <div className="accordion-job-deck">
            {detailedJobs.map((job) => {
              const isOpen = expandedJob === job.id;
              return (
                <div key={job.id} className={`accordion-job-card ${isOpen ? 'open' : ''}`}>
                  
                  {/* CARD HEADER (CLICK TO TOGGLE) */}
                  <div 
                    className="accordion-job-header"
                    onClick={() => setExpandedJob(isOpen ? null : job.id)}
                  >
                    <div className="job-header-left">
                      <div className="job-meta-badges">
                        <span className="job-badge-primary">{job.categoryBadge}</span>
                        <span className="job-badge-type">{job.type}</span>
                      </div>
                      <h3 className="job-header-title">{job.roleTitle}</h3>
                      <p className="job-header-sub">{job.subtitle}</p>
                    </div>

                    <div className="job-header-right">
                      <div className="job-toggle-icon">
                        {isOpen ? <ChevronUp size={22} color="#C96A00" /> : <ChevronDown size={22} color="#64748B" />}
                      </div>
                    </div>
                  </div>

                  {/* AUSKLAPPBARER DETAILBEREICH */}
                  {isOpen && (
                    <div className="accordion-job-body">
                      
                      <p className="job-body-teaser">{job.teaser}</p>

                      <div className="job-body-grid-3">
                        
                        {/* DEINE AUFGABEN */}
                        <div className="job-detail-box">
                          <h4>
                            <Wrench size={16} color="#C96A00" />
                            <span>Deine Aufgaben:</span>
                          </h4>
                          <ul>
                            {job.tasks.map((task, i) => (
                              <li key={i}>
                                <CheckCircle2 size={15} color="#C96A00" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* DAS BRINGST DU MIT */}
                        <div className="job-detail-box">
                          <h4>
                            <GraduationCap size={16} color="#C96A00" />
                            <span>Das bringst du mit:</span>
                          </h4>
                          <ul>
                            {job.requirements.map((req, i) => (
                              <li key={i}>
                                <CheckCircle2 size={15} color="#C96A00" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* DEINE VORTEILE */}
                        <div className="job-detail-box highlight">
                          <h4>
                            <Sparkles size={16} color="#C96A00" />
                            <span>Deine Schlemermeyer-Vorteile:</span>
                          </h4>
                          <ul>
                            {job.perks.map((prk, i) => (
                              <li key={i}>
                                <CheckCircle2 size={15} color="#C96A00" />
                                <span>{prk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* CARD FOOTER MIT DIREKT-BEWERBUNG */}
                      <div className="job-card-action-bar">
                        <div className="job-action-location">
                          <MapPin size={15} color="#C96A00" />
                          <span>Einsatzort: {job.location} &bull; {job.salary}</span>
                        </div>
                        <a 
                          href="#schnellbewerbung" 
                          className="btn-primary"
                          style={{ padding: '12px 26px' }}
                        >
                          <span>Für diese Stelle bewerben</span>
                          <ArrowRight size={16} />
                        </a>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. EINBLICKE IN DIE WERKSTATT (FOTO-SHOWCASE) */}
      <section className="section-wrapper white">
        <div className="container-custom">
          
          <div className="section-header">
            <div className="badge-pill amber">
              <Building2 size={14} />
              <span>Deine zukünftige Werkstatt</span>
            </div>
            <h2>Echte Handwerksqualität statt Massenfertigung</h2>
            <p>
              Hier entstehen aus massivem Holz individuelle Meisterstücke. Schau dir an, wo du bald arbeitest.
            </p>
          </div>

          <div className="career-gallery-triplet">
            <div className="triplet-item">
              <img src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0050_ergebnis.webp" alt="Hobelbank und Werkzeuge" />
              <div className="triplet-caption">
                <strong>Hobelbank &amp; Handarbeit</strong>
                <span>Traditionelles Handwerk mit Leidenschaft</span>
              </div>
            </div>

            <div className="triplet-item">
              <img src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0015_ergebnis.webp" alt="Formverleimung und Presse" />
              <div className="triplet-caption">
                <strong>Stufen- &amp; Formverpressung</strong>
                <span>Massivholztechnik für knarrfreie Treppen</span>
              </div>
            </div>

            <div className="triplet-item">
              <img src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/schlemermeyer/IMG_0017_ergebnis.webp" alt="Präziser Zuschnitt" />
              <div className="triplet-caption">
                <strong>Präziser Zuschnitt</strong>
                <span>Moderne Vorfertigung nach 3D-Maß</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. 60-SEKUNDEN-SCHNELLBEWERBUNG & KONTAKTMÖGLICHKEITEN */}
      <section className="section-wrapper alt" id="schnellbewerbung">
        <div className="container-custom">
          
          <div className="career-apply-split-grid">
            
            {/* LINKER KONTAKTBEREICH: DIREKT RUF AN / SCHREIB MAIL */}
            <div className="apply-direct-channel-card">
              <div className="badge-pill amber">
                <HeartHandshake size={14} />
                <span>Unkomplizierter Kontakt</span>
              </div>

              <h2>
                Ruf an, schreib eine Mail oder komm einfach vorbei!
              </h2>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.65, marginBottom: '28px' }}>
                Du brauchst keinen lückenlosen Lebenslauf und kein formelles Anschreiben. Melde dich einfach bei uns – wir trinken einen Kaffee und besprechen alles ganz entspannt auf Augenhöhe.
              </p>

              <div className="direct-contact-stack">
                <a href={`tel:${COMPANY_INFO.contact.phoneCallable}`} className="direct-contact-action-btn phone">
                  <div className="action-btn-icon">
                    <Phone size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <span className="action-lbl">Jetzt anrufen</span>
                    <strong className="action-val">{COMPANY_INFO.contact.phone}</strong>
                  </div>
                </a>

                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="direct-contact-action-btn mail">
                  <div className="action-btn-icon">
                    <Mail size={22} color="#C96A00" />
                  </div>
                  <div>
                    <span className="action-lbl">E-Mail schreiben</span>
                    <strong className="action-val">{COMPANY_INFO.contact.email}</strong>
                  </div>
                </a>

                <div className="direct-contact-action-btn address">
                  <div className="action-btn-icon">
                    <MapPin size={22} color="#C96A00" />
                  </div>
                  <div>
                    <span className="action-lbl">Vorbeikommen &amp; Werkstatt ansehen</span>
                    <strong className="action-val">Blenhorster Str. 7, 31609 Balge</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* RECHTES SCHNELLBEWERBUNGS-FORMULAR (60 SEKUNDEN) */}
            <div className="apply-form-container-card">
              
              {submitted ? (
                <div className="apply-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={48} color="#C96A00" />
                  </div>
                  <h3>Vielen Dank für deine Nachricht!</h3>
                  <p>
                    Wir haben deine Angaben erhalten und melden uns innerhalb von 24 Stunden bei dir für ein kurzes, lockeres Kennenlernen.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ marginTop: '16px' }}
                  >
                    Weiteres Anliegen senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quick-apply-form">
                  <div className="form-header">
                    <span className="form-eyebrow">Express-Bewerbung</span>
                    <h3>In 60 Sekunden bei uns melden</h3>
                    <p>Kein Anschreiben &bull; Kein Lebenslauf-Upload nötig</p>
                  </div>

                  <div className="form-group">
                    <label>Dein Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="z. B. Max Mustermann" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Telefonnummer für kurzen Rückruf *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="z. B. 0170 1234567" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Gesuchter Bereich</label>
                      <select 
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="form-input"
                      >
                        <option value="Tischler / Schreiner">Tischler / Schreiner</option>
                        <option value="Zimmerer / Holzbau">Zimmerer / Holzbau</option>
                        <option value="Parkettleger / Monteur">Parkett / Bodenmontage</option>
                        <option value="Quereinsteiger / Helfer">Quereinsteiger / Helfer</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Erfahrungslevel</label>
                      <select 
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="form-input"
                      >
                        <option value="Geselle">Geselle mit Erfahrung</option>
                        <option value="Meister">Meister / Vorarbeiter</option>
                        <option value="Berufseinsteiger">Berufseinsteiger</option>
                        <option value="Helfer / Quereinsteiger">Helfer / Quereinsteiger</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Kurze Nachricht oder Frage (optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="Wann erreichst du uns am besten? Oder hast du eine spezielle Frage?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  {/* FILE UPLOAD BOX (LEBENSLAUF / ZEUGNISSE / DOKUMENTE) */}
                  <div className="form-group">
                    <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>Bewerbungsunterlagen / Lebenslauf anhängen (optional)</span>
                      <span style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 500 }}>PDF, DOCX, JPG bis 15MB</span>
                    </label>
                    
                    <label className="file-upload-dropzone">
                      <input 
                        type="file" 
                        multiple 
                        accept=".pdf,.docx,.doc,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                      <div className="upload-dropzone-inner">
                        <UploadCloud size={24} color="#C96A00" />
                        <div>
                          <strong>Dateien hier ablegen oder anklicken</strong>
                          <span>Lebenslauf, Gesellenbrief oder Zertifikate hochladen</span>
                        </div>
                      </div>
                    </label>

                    {/* UPLOADED FILES LIST */}
                    {uploadedFiles.length > 0 && (
                      <div className="uploaded-files-list">
                        {uploadedFiles.map((file, idx) => (
                          <div key={idx} className="uploaded-file-item">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                              <Paperclip size={14} color="#C96A00" style={{ flexShrink: 0 }} />
                              <span className="file-name-txt">{file.name}</span>
                              <span className="file-size-txt">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                            </div>
                            <button 
                              type="button" 
                              onClick={() => removeFile(idx)} 
                              className="file-remove-btn"
                              aria-label="Datei entfernen"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.02rem', justifyContent: 'center' }}>
                    <Send size={18} />
                    <span>Bewerbung jetzt absenden</span>
                  </button>

                  <span className="form-privacy-note">
                    🔒 Deine Daten werden vertraulich behandelt und ausschließlich für deine Kontaktaufnahme genutzt.
                  </span>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
