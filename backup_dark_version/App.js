import React, { useState } from 'react';
import './App.css';
import logoCompleto from './images/logocompleto.png';

function App() {
  const [activeProjectTab, setActiveProjectTab] = useState('erp');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', desc: '', tech: '', stats: [] });
  const [selectedServices, setSelectedServices] = useState(['ERP ARIAS (DTE El Salvador)']);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const projects = {
    erp: {
      id: 'erp',
      title: 'ERP ARIAS',
      subtitle: 'Gestión Financiera Multi-Empresa & Facturación Electrónica DTE',
      category: 'Finanzas, Tributación & Contabilidad',
      badge: 'EN PRODUCCIÓN ACTIVA',
      badgeType: 'status-live',
      gradient: 'from-blue-to-cyan',
      tagline: 'Multiplica x2.6 la capacidad de los contadores y centraliza hasta 40 razones sociales en un solo panel.',
      highlights: [
        { label: 'Capacidad Contable', val: '40 Empresas', desc: 'Por contador sin sobrecarga' },
        { label: 'Transmisión MH', val: '< 0.8 seg', desc: 'Validación directa en Hacienda' },
        { label: 'Homologación DTE', val: '100% Oficial', desc: 'Factura, CCF, Retención, Exp.' },
        { label: 'Conciliación Bancaria', val: 'Automatizada', desc: 'Bancos de El Salvador' }
      ],
      description: 'El ERP insignia de Arias Defense diseñado específicamente para la legislación contable y tributaria de El Salvador. Integra en tiempo real facturación electrónica DTE, planillas laborales, cuentas por cobrar/pagar y control de múltiples empresas con un único inicio de sesión.',
      bullets: [
        'Un solo contador administra hasta 40 empresas en lugar de 15, automatizando cierres contables.',
        'Emisión masiva de Documentos Tributarios Electrónicos con firma y sello de recepción del Ministerio de Hacienda.',
        'Módulo de planillas con cálculo automático de ISSS, AFP y Renta según tabla oficial salvadoreña.',
        'Conciliación bancaria inteligente con importación de estados de cuenta de los principales bancos.'
      ],
      techStack: ['React', 'Laravel 11', 'PostgreSQL', 'API Ministerio de Hacienda', 'AWS Cloud (S3, EC2)'],
      img: 'assets_redesign/arias_solution_showcase_1786402080627.png'
    },
    crm: {
      id: 'crm',
      title: 'CRM ARIAS',
      subtitle: 'Pipeline de Ventas Comercial, Cotizaciones & Fidelización',
      category: 'Ventas, Prospección & Clientes',
      badge: 'EN PRODUCCIÓN ACTIVA',
      badgeType: 'status-live',
      gradient: 'from-purple-to-blue',
      tagline: 'El producto de ticket más alto: centraliza el embudo de ventas, prospectos y cotizaciones en PDF inmediatas.',
      highlights: [
        { label: 'Conversión de Leads', val: '+40% Cierres', desc: 'Optimización de embudos' },
        { label: 'Cotizaciones PDF', val: 'Instantáneas', desc: 'Conversión directa a DTE' },
        { label: 'Seguimiento', val: 'Omnicanal', desc: 'WhatsApp, Correo y Llamadas' },
        { label: 'Pronóstico de Ventas', val: 'Tiempo Real', desc: 'Métricas de productividad' }
      ],
      description: 'Plataforma para directores comerciales y ejecutivos de ventas. Canaliza oportunidades de negocio, registra cada interacción con el cliente y permite emitir cotizaciones comerciales en segundos vinculadas al catálogo de productos e inventario.',
      bullets: [
        'Embudo Kanban visual con etapas personalizables según el ciclo comercial de su empresa.',
        'Generador instantáneo de cotizaciones formales con cálculo de impuestos y botón para convertir en factura DTE.',
        'Métricas de desempeño por asesor de ventas, volumen negociado y tasa de conversión mensual.',
        'Registro histórico de llamadas, minutas de reunión y recordatorios automáticos de seguimiento.'
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'PDF Engine', 'WhatsApp Business API'],
      img: 'assets_redesign/arias_crm_showcase_tab_1786411127962.png'
    },
    siple: {
      id: 'siple',
      title: 'SIPLE (Lotificadoras)',
      subtitle: 'Sistema Especializado para Urbanizadoras & Terrenos',
      category: 'Desarrollo Inmobiliario & Cobranza',
      badge: 'EN PRODUCCIÓN ACTIVA',
      badgeType: 'status-live',
      gradient: 'from-emerald-to-teal',
      tagline: 'Control integral de lotificaciones: mapeo de parcelas, cobranza de cuotas mensuales y contratos de compraventa.',
      highlights: [
        { label: 'Gestión de Lotes', val: 'Multi-Proyecto', desc: 'Disponibles, reservados y vendidos' },
        { label: 'Mora Reducida', val: '-35% Atrasos', desc: 'Alertas automáticas de pago' },
        { label: 'Cronograma', val: 'Amortización', desc: 'Cálculo de capital e intereses' },
        { label: 'Emisión Recibos', val: 'DTE Vinculado', desc: 'Comprobantes oficiales' }
      ],
      description: 'Software vertical concebido para empresas lotificadoras, desarrolladores inmobiliarios y propietarios de parcelaciones en El Salvador. Resuelve el dolor de cabeza del cobro mensual de cuotas, el cálculo de intereses moratorios y el control de planos.',
      bullets: [
        'Mapeo digital de proyectos por polígonos, manzanas y lotes con estado en tiempo real (disponible, reservado, vendido).',
        'Cronogramas automáticos de pagos mensuales con desglose de abono a capital, intereses y cargos por mora.',
        'Generación de recibos de cobro y facturas electrónicas de cuota mensual avaladas por Hacienda.',
        'Próxima fase en 2 meses: integración nativa con contabilidad general, planillas de cobradores y bancos.'
      ],
      techStack: ['Vue.js / React', 'Laravel', 'PostgreSQL', 'GIS Mapping', 'Facturación DTE El Salvador'],
      img: 'assets_redesign/arias_siple_showcase_tab_1786411141225.png'
    },
    gasolinera: {
      id: 'gasolinera',
      title: 'ARIAS Gasolinera',
      subtitle: 'Sistema de Estaciones de Servicio, Dispensadores & Pistas',
      category: 'Sector Combustibles & Pistas de Carga',
      badge: 'LANZAMIENTO EN 2 MESES',
      badgeType: 'status-roadmap',
      gradient: 'from-amber-to-orange',
      tagline: 'Control de tanques de combustible, arqueos de turno por manguera y facturación inmediata al consumidor.',
      highlights: [
        { label: 'Arqueo de Turnos', val: 'Por Manguera', desc: 'Lecturas iniciales y finales' },
        { label: 'Control de Tanques', val: 'Monitoreo IoT', desc: 'Inventario físico y mermas' },
        { label: 'Facturación Pista', val: 'Instantánea', desc: 'DTE Consumidor y Crédito Fiscal' },
        { label: 'Cierre de Caja', val: 'Cuadre 100%', desc: 'Efectivo, tarjetas y vales' }
      ],
      description: 'Desarrollado para resolver el ritmo de alto tráfico de las estaciones de servicio. Monitorea los dispensadores, audita los litros despachados en cada turno de pistero, controla los inventarios en tanques subterráneos y emite facturas electrónicas al instante.',
      bullets: [
        'Cierre de turnos de pista con auditoría milimétrica entre la lectura del marcador mecánico/digital y el dinero en caja.',
        'Emisión de Factura de Consumidor Final y Crédito Fiscal para flotas corporativas en segundos.',
        'Monitoreo de tanques con control de mermas por temperatura y alertas de stock mínimo de combustible.',
        'Totalmente terminado en 2 meses con módulos integrados de contabilidad general, planillas de personal y bancos.'
      ],
      techStack: ['IoT Protocols', 'React High-Speed UI', 'Go / Node Microservices', 'DTE Hacienda', 'Offline Sync'],
      img: 'assets_redesign/arias_gasolinera_showcase_tab_1786411155869.png'
    },
    rtms: {
      id: 'rtms',
      title: 'RTMS (Real-Time Management)',
      subtitle: 'Monitoreo Operativo & Logística en Tiempo Real',
      category: 'Operaciones Críticas & Tracking',
      badge: 'ALTO RENDIMIENTO',
      badgeType: 'status-live',
      gradient: 'from-cyan-to-blue',
      tagline: 'Control y supervisión de operaciones distribuidas con telemetría en vivo y latencia cero.',
      highlights: [
        { label: 'Latencia de Datos', val: '< 50ms', desc: 'Comunicación en vivo WebSockets' },
        { label: 'Disponibilidad', val: '99.98% SLA', desc: 'Infraestructura redundante' },
        { label: 'Seguridad', val: 'TLS 1.3', desc: 'Cifrado perimetral de extremo a extremo' },
        { label: 'Monitoreo', val: '24/7', desc: 'Alertas automáticas de incidentes' }
      ],
      description: 'Sistema de telemetría y supervisión operativa en tiempo real. Permite a grandes operaciones y flotas logísticas monitorizar estados, despachos y eventos críticos con tableros reactivos y mapas dinámicos.',
      bullets: [
        'Tablero de control en tiempo real con actualización de eventos sin recargar el navegador.',
        'Registro de trazabilidad y auditoría inmutable de cada acción operativa ejecutada.',
        'Arquitectura distribuida en clústeres cloud de alta disponibilidad con failover automático.'
      ],
      techStack: ['React', 'Go / Rust', 'Redis', 'WebSockets', 'AWS Global Accelerator'],
      img: 'assets_redesign/arias_hero_3d_mockup_1786402018621.png'
    }
  };

  const openTechModal = (proj) => {
    setModalData({
      title: proj.title + ' — ' + proj.subtitle,
      desc: proj.description,
      tech: proj.techStack.join(' • '),
      stats: proj.highlights
    });
    setModalOpen(true);
  };

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="vibrant-app">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="ambient-mesh-glow ambient-glow-top"></div>
      <div className="ambient-mesh-glow ambient-glow-middle"></div>
      <div className="ambient-mesh-glow ambient-glow-bottom"></div>

      {/* SINGLE UNIFIED MODERN NAVBAR */}
      <header className="vibrant-navbar">
        <div className="navbar-container">
          <a href="#inicio" className="navbar-logo-link">
            <img src={logoCompleto} alt="Arias Defense" className="navbar-logo-img" />
          </a>

          <nav className="navbar-nav">
            <ul className="nav-menu">
              <li><a href="#inicio" className="nav-item">Inicio</a></li>
              <li><a href="#proyectos" className="nav-item">Proyectos & Software</a></li>
              <li><a href="#empresa" className="nav-item">Sobre la Empresa</a></li>
              <li><a href="#servicios" className="nav-item">Servicios</a></li>
              <li><a href="#testimonios" className="nav-item">Casos de Éxito</a></li>
              <li><a href="#contacto" className="nav-item">Contacto</a></li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <a 
              href="https://wa.me/50379718911?text=Hola%20Arias%20Defense,%20deseo%20informaci%C3%B3n" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-whatsapp-btn"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <a href="#contacto" className="btn-glow-primary">
              <span>Solicitar Demo</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section id="inicio" className="vibrant-hero">
        <div className="hero-grid-pattern"></div>
        <div className="hero-content-wrap">
          
          <div className="hero-badge-tag">
            <span className="badge-flair-icon"><i className="fa-solid fa-shield-halved"></i></span>
            <span className="badge-text">FIRMA SALVADOREÑA DE INGENIERÍA DE SOFTWARE & SOLUCIONES CLOUD</span>
          </div>

          <h1 className="hero-super-title">
            Potencia tu Empresa con <span className="gradient-text-electric">Tecnología de Alto Impacto</span> y Cumplimiento Total
          </h1>

          <p className="hero-lead-text">
            Con más de <strong>10 años de experiencia</strong> y más de <strong>500 empresas activas</strong>, construimos y operamos plataformas empresariales de alto rendimiento: 
            <strong> Facturación Electrónica DTE</strong> homologada con el Ministerio de Hacienda, <strong>ERP Multi-Empresa</strong>, <strong>CRM Comercial</strong>, 
            <strong> SIPLE Lotificadoras</strong> y <strong>Sistemas para Gasolineras</strong>.
          </p>

          <div className="hero-buttons-row">
            <a href="#proyectos" className="btn-action-glow">
              <i className="fa-solid fa-layer-group"></i> Ver Catálogo de Proyectos
            </a>
            <a href="#empresa" className="btn-action-glass">
              <i className="fa-solid fa-building-columns"></i> Conoce Nuestra Historia
            </a>
            <a 
              href="https://wa.me/50379718911?text=Hola,%20quisiera%20conversar%20con%20un%20ingeniero%20o%20asesor%20comercial%20de%20Arias%20Defense" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-action-whatsapp"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat en Vivo (+503)
            </a>
          </div>

          {/* VIBRANT STATS TICKER */}
          <div className="hero-stats-banner">
            <div className="stat-glass-card">
              <div className="stat-number-glow">10<span className="stat-plus">+</span></div>
              <div className="stat-text-label">Años de Trayectoria</div>
              <div className="stat-sub">Construyendo software robusto en Centroamérica</div>
            </div>

            <div className="stat-glass-card">
              <div className="stat-number-glow">500<span className="stat-plus">+</span></div>
              <div className="stat-text-label">Empresas en Producción</div>
              <div className="stat-sub">PyMEs y corporaciones gestionando su operación</div>
            </div>

            <div className="stat-glass-card">
              <div className="stat-number-glow">100<span className="stat-percent">%</span></div>
              <div className="stat-text-label">Autorizado DTE Hacienda</div>
              <div className="stat-sub">Cumplimiento tributario en El Salvador</div>
            </div>

            <div className="stat-glass-card">
              <div className="stat-number-glow">24<span className="stat-slash">/</span>7</div>
              <div className="stat-text-label">Soporte Técnico Local</div>
              <div className="stat-sub">Equipo de ingenieros en San Salvador</div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROYECTOS & SOFTWARE CORE (BENTO SHOWCASE INTERACTIVO) */}
      <section id="proyectos" className="vibrant-section section-projects">
        <div className="section-inner">
          
          <div className="section-title-block">
            <span className="tag-eyebrow"><i className="fa-solid fa-cubes"></i> ECOSISTEMA TECNOLÓGICO ARIAS</span>
            <h2 className="title-headline">Proyectos y Plataformas de Software Desarrolladas</h2>
            <p className="title-subheadline">
              Sistemas probados en campo diseñados para resolver problemas operativos reales. Haz clic en cada proyecto para explorar sus especificaciones y arquitectura.
            </p>
          </div>

          {/* PROJECT SELECTOR TABS */}
          <div className="project-tabs-strip">
            {Object.keys(projects).map(key => {
              const p = projects[key];
              const isActive = activeProjectTab === key;
              return (
                <button
                  key={key}
                  className={`tab-project-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveProjectTab(key)}
                >
                  <div className="btn-indicator-glow"></div>
                  <div className="btn-content">
                    <span className="btn-title">{p.title}</span>
                    <span className="btn-cat">{p.category.split(',')[0]}</span>
                  </div>
                  <span className={`btn-status-pill ${p.badgeType}`}>{p.badge}</span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE PROJECT HERO DISPLAY */}
          {(() => {
            const p = projects[activeProjectTab];
            return (
              <div className="project-feature-bento">
                <div className="bento-glow-border"></div>
                
                <div className="bento-content-grid">
                  
                  {/* Left Column: Data & Specs */}
                  <div className="bento-data-pane">
                    <div className="bento-header-badges">
                      <span className="badge-category">{p.category}</span>
                      <span className={`badge-live-tag ${p.badgeType}`}>
                        <span className="dot-pulse"></span> {p.badge}
                      </span>
                    </div>

                    <h3 className="bento-project-title">{p.title}</h3>
                    <h4 className="bento-project-subtitle">{p.subtitle}</h4>
                    <p className="bento-project-desc">{p.description}</p>

                    {/* VIBRANT HIGHLIGHT STATS */}
                    <div className="bento-metrics-quad">
                      {p.highlights.map((h, i) => (
                        <div key={i} className="quad-metric-box">
                          <span className="metric-primary-val">{h.val}</span>
                          <span className="metric-primary-label">{h.label}</span>
                          <span className="metric-primary-desc">{h.desc}</span>
                        </div>
                      ))}
                    </div>

                    {/* BULLET POINTS */}
                    <div className="bento-bullets-wrap">
                      <div className="bullets-title">Funcionalidades Principales:</div>
                      <ul className="bullets-list">
                        {p.bullets.map((b, i) => (
                          <li key={i}>
                            <i className="fa-solid fa-check text-cyan"></i>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* TECH STACK BADGES */}
                    <div className="bento-stack-box">
                      <span className="stack-label">Stack Tecnológico:</span>
                      <div className="stack-badges">
                        {p.techStack.map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="bento-actions-row">
                      <a href="#contacto" className="btn-bento-cta">
                        <i className="fa-solid fa-calendar-check"></i> Agendar Demostración de {p.title}
                      </a>
                      <button onClick={() => openTechModal(p)} className="btn-bento-secondary">
                        <i className="fa-solid fa-code"></i> Ficha Técnica Completa
                      </button>
                    </div>

                  </div>

                  {/* Right Column: Visual UI Preview with Interactive Glow */}
                  <div className="bento-visual-pane">
                    <div className="visual-card-frame">
                      <div className="frame-top-controls">
                        <div className="control-dots">
                          <span className="dot dot-crimson"></span>
                          <span className="dot dot-amber"></span>
                          <span className="dot dot-green"></span>
                        </div>
                        <div className="frame-path-bar">
                          <i className="fa-solid fa-shield-check"></i> ariasdefense.com/enterprise/{p.id}
                        </div>
                        <div className="frame-live-tag">
                          <span className="pulse-beacon"></span> En Línea
                        </div>
                      </div>

                      <div className="frame-image-wrapper">
                        <img src={p.img} alt={p.title} className="showcase-software-image" />
                        <div className="image-overlay-gradient"></div>
                        <div className="image-footer-meta">
                          <div className="meta-left">
                            <i className="fa-solid fa-laptop-code text-cyan"></i>
                            <strong>Entorno de Producción Oficial</strong>
                          </div>
                          <span className="meta-right">v4.2.8 Enterprise</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 5. SOBRE LA EMPRESA (TRAYECTORIA, PRESENCIA & CREDIBILIDAD) */}
      <section id="empresa" className="vibrant-section section-company">
        <div className="section-inner">
          
          <div className="section-title-block">
            <span className="tag-eyebrow"><i className="fa-solid fa-building"></i> NUESTRA EMPRESA</span>
            <h2 className="title-headline">Más de una Década Transformando la Tecnología en El Salvador</h2>
            <p className="title-subheadline">
              Arias Defense nació para democratizar el software empresarial de alta gama: sin intermediarios, con tecnología propia y total apego a las regulaciones tributarias de la región.
            </p>
          </div>

          <div className="company-dual-grid">
            
            {/* Story Card */}
            <div className="company-story-panel">
              <div className="story-badge-flag">
                <span>🇸🇻</span> Sede Principal: San Salvador, El Salvador
              </div>

              <h3>Ingeniería de Software Propia, No Reventa</h3>
              <p>
                A diferencia de agencias que revenden sistemas extranjeros rígidos o plantillas genéricas, en <strong>Arias Defense desarrollamos nuestras plataformas desde el código fuente</strong>. Esto nos permite garantizar actualizaciones instantáneas cada vez que el Ministerio de Hacienda emite nuevas normativas tributarias.
              </p>
              <p>
                Durante más de 10 años, hemos acompañado a contadores públicos, corporaciones comerciales, desarrolladoras inmobiliarias y estaciones de servicio, diseñando sistemas que se adaptan a su operación y no al revés.
              </p>

              <div className="company-facts-grid">
                <div className="fact-item">
                  <div className="fact-icon-sq text-purple"><i className="fa-solid fa-brain"></i></div>
                  <div>
                    <strong>Soluciones Adaptativas</strong>
                    <p>Flujos de trabajo personalizados para cada industria.</p>
                  </div>
                </div>

                <div className="fact-item">
                  <div className="fact-icon-sq text-emerald"><i className="fa-solid fa-file-invoice-dollar"></i></div>
                  <div>
                    <strong>Pioneros en DTE El Salvador</strong>
                    <p>Integración y homologación con Hacienda garantizada.</p>
                  </div>
                </div>

                <div className="fact-item">
                  <div className="fact-icon-sq text-cyan"><i className="fa-solid fa-headset"></i></div>
                  <div>
                    <strong>Soporte en Sitio y Remoto</strong>
                    <p>Ingenieros en San Salvador con línea directa de atención.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Address & Verified Credentials Card */}
            <div className="company-credentials-panel">
              <div className="credentials-inner">
                <div className="credentials-header">
                  <i className="fa-solid fa-award text-amber"></i>
                  <h4>Respaldo y Credenciales Oficiales</h4>
                </div>

                <div className="credentials-checklist">
                  <div className="cred-item">
                    <i className="fa-solid fa-circle-check text-emerald"></i>
                    <div>
                      <strong>Certificación Ministerio de Hacienda</strong>
                      <p>Emisor oficial de Facturación Electrónica DTE en El Salvador.</p>
                    </div>
                  </div>

                  <div className="cred-item">
                    <i className="fa-solid fa-circle-check text-emerald"></i>
                    <div>
                      <strong>Infraestructura Cloud de Alta Disponibilidad</strong>
                      <p>Despliegues en AWS y Google Cloud con respaldo inmutable de datos.</p>
                    </div>
                  </div>

                  <div className="cred-item">
                    <i className="fa-solid fa-circle-check text-emerald"></i>
                    <div>
                      <strong>Seguridad y Encriptación TLS 1.3</strong>
                      <p>Toda la información financiera viaja cifrada con estándares bancarios.</p>
                    </div>
                  </div>

                  <div className="cred-item">
                    <i className="fa-solid fa-circle-check text-emerald"></i>
                    <div>
                      <strong>Presencia Física en San Salvador</strong>
                      <p>Oficinas en Colonia San Benito para atención personalizada y capacitaciones.</p>
                    </div>
                  </div>
                </div>

                <div className="office-location-box">
                  <div className="loc-label"><i className="fa-solid fa-map-pin text-crimson"></i> Ubicación Corporativa:</div>
                  <div className="loc-address">Calle la Mascota, Edif. 533, Col. San Benito, San Salvador, El Salvador.</div>
                  <div className="loc-contact-strip">
                    <a href="tel:+50379718911"><i className="fa-solid fa-phone"></i> (503) 7971-8911</a>
                    <a href="mailto:info@ariasdefense.com"><i className="fa-solid fa-envelope"></i> info@ariasdefense.com</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SERVICIOS DE INGENIERÍA DE SOFTWARE A MEDIDA */}
      <section id="servicios" className="vibrant-section section-services">
        <div className="section-inner">
          
          <div className="section-title-block">
            <span className="tag-eyebrow"><i className="fa-solid fa-microchip"></i> INGENIERÍA & DESARROLLO</span>
            <h2 className="title-headline">Servicios de Desarrollo de Software a la Medida</h2>
            <p className="title-subheadline">
              ¿Tu empresa tiene requerimientos que ningún software empaquetado resuelve? Diseñamos y construimos sistemas a medida desde cero.
            </p>
          </div>

          <div className="services-vibrant-grid">
            <div className="service-vibrant-card">
              <div className="service-card-icon icon-cyan"><i className="fa-solid fa-code"></i></div>
              <h3>Desarrollo Web & Móvil Full-Stack</h3>
              <p>Construimos plataformas SaaS, portales B2B e interfaces reactivas en React, Node.js y Laravel para altos volúmenes de usuarios.</p>
              <ul className="service-checks">
                <li><i className="fa-solid fa-check"></i> Aplicaciones web progresivas (PWA)</li>
                <li><i className="fa-solid fa-check"></i> Paneles de administración a medida</li>
                <li><i className="fa-solid fa-check"></i> Arquitecturas modulares y escalables</li>
              </ul>
            </div>

            <div className="service-vibrant-card">
              <div className="service-card-icon icon-purple"><i className="fa-solid fa-network-wired"></i></div>
              <h3>Integración de APIs & DTE Hacienda</h3>
              <p>Conectamos tu ERP legado (SAP, Oracle, sistemas propios) con la API de facturación electrónica del Ministerio de Hacienda de El Salvador.</p>
              <ul className="service-checks">
                <li><i className="fa-solid fa-check"></i> Generación y firma electrónica JSON DTE</li>
                <li><i className="fa-solid fa-check"></i> Manejo automático de contingencias</li>
                <li><i className="fa-solid fa-check"></i> Envío automático a clientes y receptores</li>
              </ul>
            </div>

            <div className="service-vibrant-card">
              <div className="service-card-icon icon-emerald"><i className="fa-solid fa-cloud-arrow-up"></i></div>
              <h3>Cloud & DevOps en AWS / GCP</h3>
              <p>Diseño de infraestructura en la nube con balanceo de carga, monitoreo de latencia y copias de seguridad continuas.</p>
              <ul className="service-checks">
                <li><i className="fa-solid fa-check"></i> Migración segura de bases de datos</li>
                <li><i className="fa-solid fa-check"></i> Pipelines de CI/CD automatizados</li>
                <li><i className="fa-solid fa-check"></i> Monitoreo de disponibilidad 24/7</li>
              </ul>
            </div>

            <div className="service-vibrant-card">
              <div className="service-card-icon icon-crimson"><i className="fa-solid fa-shield-halved"></i></div>
              <h3>Ciberseguridad & Auditorías</h3>
              <p>Protección perimetral para salvaguardar la información financiera, contable y tributaria de tu empresa contra filtraciones.</p>
              <ul className="service-checks">
                <li><i className="fa-solid fa-check"></i> Análisis de vulnerabilidades web</li>
                <li><i className="fa-solid fa-check"></i> Respaldos inmutables anti-ransomware</li>
                <li><i className="fa-solid fa-check"></i> Control estricto de roles y permisos</li>
              </ul>
            </div>

            <div className="service-vibrant-card">
              <div className="service-card-icon icon-amber"><i className="fa-solid fa-chart-pie"></i></div>
              <h3>Consultoría para Firmas Contables</h3>
              <p>Asesoramos a auditores y contadores públicos para transformar su despacho contable y multiplicar su cartera de clientes sin estrés.</p>
              <ul className="service-checks">
                <li><i className="fa-solid fa-check"></i> Migración de libros físicos a digital</li>
                <li><i className="fa-solid fa-check"></i> Capacitación presencial del personal</li>
                <li><i className="fa-solid fa-check"></i> Estandarización de catálogos de cuentas</li>
              </ul>
            </div>

            <div className="service-vibrant-card service-card-cta">
              <div className="service-cta-glow"></div>
              <div className="cta-inner-text">
                <i className="fa-solid fa-comments text-cyan"></i>
                <h3>¿Tienes un proyecto en mente?</h3>
                <p>Nuestros ingenieros evalúan tu caso y te entregan una propuesta técnica y económica formal sin costo.</p>
                <a href="#contacto" className="btn-service-action">
                  <i className="fa-solid fa-paper-plane"></i> Contactar a un Ingeniero
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIOS Y CASOS DE ÉXITO */}
      <section id="testimonios" className="vibrant-section section-testimonials">
        <div className="section-inner">
          
          <div className="section-title-block">
            <span className="tag-eyebrow"><i className="fa-solid fa-star text-amber"></i> CASOS DE ÉXITO REALES</span>
            <h2 className="title-headline">Empresas que Confían en Arias Defense</h2>
            <p className="title-subheadline">
              Resultados medibles y opiniones de directores financieros y gerentes de operaciones en El Salvador.
            </p>
          </div>

          <div className="testimonials-vibrant-grid">
            <div className="testimonial-glass-card">
              <div className="card-quote-glyph">“</div>
              <p className="quote-text">
                Arias Defense revolucionó por completo nuestra facturación. Pasamos de procesar 50 facturas manuales al día con múltiples errores a emitir más de 500 DTEs diarios con validación instantánea en Hacienda.
              </p>
              <div className="author-row">
                <div className="author-avatar avatar-purple">MG</div>
                <div>
                  <strong>María González</strong>
                  <span>Directora Financiera · Sector Distribución</span>
                </div>
              </div>
            </div>

            <div className="testimonial-glass-card">
              <div className="card-quote-glyph">“</div>
              <p className="quote-text">
                En nuestra firma contable era impensable que un solo contador llevara más de 15 empresas. Con ERP ARIAS y la gestión multi-empresa, hoy cada contador atiende hasta 35 razones sociales con total fluidez.
              </p>
              <div className="author-row">
                <div className="author-avatar avatar-cyan">CR</div>
                <div>
                  <strong>Lic. Carlos Rodríguez</strong>
                  <span>Socio Fundador · Firma de Auditoría & Contabilidad</span>
                </div>
              </div>
            </div>

            <div className="testimonial-glass-card">
              <div className="card-quote-glyph">“</div>
              <p className="quote-text">
                Gestionamos más de 600 lotes en varios proyectos. SIPLE nos resolvió el control de pagos atrasados, emisión de recibos y cobro de cuotas. El soporte local en San Salvador responde de inmediato.
              </p>
              <div className="author-row">
                <div className="author-avatar avatar-emerald">AM</div>
                <div>
                  <strong>Ing. Ana Martínez</strong>
                  <span>Gerente de Operaciones · Empresa Desarrolladora</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FORMULARIO DE CONTACTO & CONVERSIÓN */}
      <section id="contacto" className="vibrant-section section-contact">
        <div className="section-inner">
          
          <div className="contact-super-grid">
            
            {/* Info Side */}
            <div className="contact-info-panel">
              <span className="tag-eyebrow"><i className="fa-solid fa-headset"></i> ATENCIÓN DIRECTA</span>
              <h2>Hablemos sobre tu Próximo Proyecto de Software</h2>
              <p>
                Agenda una demostración personalizada con un ingeniero especialista de Arias Defense o visítanos en nuestras oficinas en San Salvador.
              </p>

              <div className="direct-channels-list">
                <div className="channel-tile">
                  <div className="channel-icon-circle icon-phone"><i className="fa-solid fa-phone"></i></div>
                  <div>
                    <span className="channel-title">Teléfono Directo:</span>
                    <a href="tel:+50379718911" className="channel-link">(503) 7971-8911</a>
                    <span className="channel-meta">Lunes a Viernes de 8:00 AM a 6:00 PM</span>
                  </div>
                </div>

                <div className="channel-tile">
                  <div className="channel-icon-circle icon-whatsapp"><i className="fa-brands fa-whatsapp"></i></div>
                  <div>
                    <span className="channel-title">WhatsApp Corporativo:</span>
                    <a 
                      href="https://wa.me/50379718911?text=Hola%20Arias%20Defense,%20deseo%20agendar%20una%20demostraci%C3%B3n" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="channel-link text-whatsapp"
                    >
                      (503) 7971-8911 (Chat en Vivo)
                    </a>
                    <span className="channel-meta">Respuesta rápida por ejecutivos técnicos</span>
                  </div>
                </div>

                <div className="channel-tile">
                  <div className="channel-icon-circle icon-email"><i className="fa-solid fa-envelope"></i></div>
                  <div>
                    <span className="channel-title">Correo Oficial:</span>
                    <a href="mailto:info@ariasdefense.com" className="channel-link">info@ariasdefense.com</a>
                    <span className="channel-meta">Para solicitudes formales y licitaciones</span>
                  </div>
                </div>

                <div className="channel-tile">
                  <div className="channel-icon-circle icon-location"><i className="fa-solid fa-location-dot"></i></div>
                  <div>
                    <span className="channel-title">Oficinas Principales:</span>
                    <span className="channel-text">Calle la Mascota, Edif. 533, Col. San Benito, San Salvador.</span>
                    <span className="channel-meta">Atención presencial previa cita</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Side */}
            <div className="contact-form-panel">
              <div className="form-glass-card">
                <h3>Solicitar Demostración o Cotización</h3>
                <p>Selecciona los proyectos o servicios de tu interés:</p>

                {formSubmitted ? (
                  <div className="form-success-box">
                    <i className="fa-solid fa-circle-check text-emerald"></i>
                    <h4>¡Solicitud Recibida con Éxito!</h4>
                    <p>Un ingeniero o especialista de Arias Defense en San Salvador se comunicará contigo en menos de 24 horas.</p>
                    <button onClick={() => setFormSubmitted(false)} className="btn-resend-form">
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit}>
                    
                    {/* Multi-chip selector */}
                    <div className="chips-selector-grid">
                      {[
                        'ERP ARIAS (DTE El Salvador)',
                        'CRM ARIAS (Pipeline)',
                        'SIPLE (Lotificadoras)',
                        'Gasolinera (Estaciones)',
                        'Desarrollo a Medida',
                        'Integración API Hacienda'
                      ].map(srv => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <div
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`chip-button ${isSelected ? 'active' : ''}`}
                          >
                            <i className={`fa-solid ${isSelected ? 'fa-circle-check text-cyan' : 'fa-circle'}`}></i>
                            <span>{srv}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="form-two-cols">
                      <div className="input-field-group">
                        <label>Nombre y Apellido *</label>
                        <input type="text" placeholder="Ej. Lic. Fernando Silva" required />
                      </div>
                      <div className="input-field-group">
                        <label>Empresa o Razón Social *</label>
                        <input type="text" placeholder="Ej. Distribuidora Cuscatlán S.A." required />
                      </div>
                    </div>

                    <div className="form-two-cols">
                      <div className="input-field-group">
                        <label>Correo Electrónico *</label>
                        <input type="email" placeholder="fernando@empresa.com.sv" required />
                      </div>
                      <div className="input-field-group">
                        <label>Teléfono o WhatsApp *</label>
                        <input type="tel" placeholder="(503) 7000-0000" required />
                      </div>
                    </div>

                    <div className="input-field-group">
                      <label>Giro o Sector de tu Negocio *</label>
                      <select required defaultValue="contable">
                        <option value="contable">Firma Contable / Despacho de Auditoría</option>
                        <option value="comercial">Empresa Comercial / Distribución</option>
                        <option value="inmobiliaria">Desarrolladora Inmobiliaria / Lotificadora</option>
                        <option value="gasolinera">Estación de Servicio / Gasolinera</option>
                        <option value="salud">Sector Salud / Clínicas</option>
                        <option value="otro">Otro Giro Comercial</option>
                      </select>
                    </div>

                    <div className="input-field-group">
                      <label>Detalle de tu Requerimiento</label>
                      <textarea rows="3" placeholder="Indica el número de empresas a administrar, volumen mensual de DTEs o requerimiento específico..."></textarea>
                    </div>

                    <button type="submit" className="btn-glow-submit">
                      <i className="fa-solid fa-paper-plane"></i> Enviar Solicitud a Arias Defense
                    </button>

                    <div className="form-secure-note">
                      <i className="fa-solid fa-lock text-cyan"></i> Tratamiento de datos bajo estricta confidencialidad profesional.
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. MODAL DETALLE TÉCNICO */}
      {modalOpen && (
        <div className="modal-dark-overlay">
          <div className="modal-dark-card">
            <button className="modal-close-icon" onClick={() => setModalOpen(false)}>&times;</button>
            
            <div className="modal-header-block">
              <span className="tag-eyebrow"><i className="fa-solid fa-microchip"></i> FICHA TÉCNICA</span>
              <h3>{modalData.title}</h3>
            </div>

            <div className="modal-body-block">
              <p className="modal-body-desc">{modalData.desc}</p>

              <div className="modal-stats-grid">
                {modalData.stats && modalData.stats.map((s, i) => (
                  <div key={i} className="modal-stat-pill">
                    <strong>{s.val}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="modal-tech-panel">
                <strong><i className="fa-solid fa-server text-cyan"></i> Arquitectura & Tecnologías:</strong>
                <p>{modalData.tech}</p>
              </div>

              <div className="modal-assurance">
                <i className="fa-solid fa-shield-halved text-emerald"></i>
                <span>Garantía de homologación oficial con el Ministerio de Hacienda, respaldos automáticos y soporte local permanente.</span>
              </div>
            </div>

            <div className="modal-footer-block">
              <a href="#contacto" onClick={() => setModalOpen(false)} className="btn-glow-primary">
                <i className="fa-solid fa-calendar-check"></i> Agendar Demostración
              </a>
              <button onClick={() => setModalOpen(false)} className="btn-modal-dismiss">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10. REAL ENTERPRISE DARK FOOTER */}
      <footer className="vibrant-footer">
        <div className="footer-inner-wrap">
          <div className="footer-top-row">
            
            <div className="footer-brand-info">
              <img src={logoCompleto} alt="Arias Defense" className="footer-logo-img" />
              <p className="footer-about-text">
                Firma salvadoreña de ingeniería de software e infraestructura tecnológica empresarial. Facturación Electrónica DTE autorizada, ERP Multi-Empresa, CRM comercial y desarrollo por industria.
              </p>
              <div className="footer-address-pill">
                <i className="fa-solid fa-location-dot text-cyan"></i>
                <span>Calle la Mascota, Edif. 533, Col. San Benito, San Salvador, El Salvador.</span>
              </div>
            </div>

            <div className="footer-links-group">
              <h5>Proyectos & Ecosistema</h5>
              <ul>
                <li><a href="#proyectos" onClick={() => setActiveProjectTab('erp')}>ERP ARIAS (Multi-Empresa & DTE)</a></li>
                <li><a href="#proyectos" onClick={() => setActiveProjectTab('crm')}>CRM ARIAS (Pipeline de Ventas)</a></li>
                <li><a href="#proyectos" onClick={() => setActiveProjectTab('siple')}>SIPLE (Lotificadoras & Lotes)</a></li>
                <li><a href="#proyectos" onClick={() => setActiveProjectTab('gasolinera')}>Gasolinera (Estaciones & Pistas)</a></li>
                <li><a href="#proyectos" onClick={() => setActiveProjectTab('rtms')}>RTMS (Monitoreo en Tiempo Real)</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h5>Servicios de Ingeniería</h5>
              <ul>
                <li><a href="#servicios">Facturación Electrónica DTE Hacienda</a></li>
                <li><a href="#servicios">Desarrollo Web & Móvil a Medida</a></li>
                <li><a href="#servicios">Arquitectura Cloud en AWS / GCP</a></li>
                <li><a href="#servicios">Ciberseguridad & Auditorías</a></li>
                <li><a href="#servicios">Consultoría para Firmas Contables</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h5>Contacto & Soporte</h5>
              <ul>
                <li><a href="#empresa">Sobre Arias Defense</a></li>
                <li><a href="tel:+50379718911"><i className="fa-solid fa-phone"></i> (503) 7971-8911</a></li>
                <li><a href="https://wa.me/50379718911" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i> WhatsApp Directo</a></li>
                <li><a href="mailto:info@ariasdefense.com"><i className="fa-solid fa-envelope"></i> info@ariasdefense.com</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom-row">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Arias Defense Component. Todos los derechos reservados. San Salvador, El Salvador.
            </div>
            <div className="footer-legal">
              <a href="#inicio">Privacidad</a>
              <span className="sep">•</span>
              <a href="#inicio">Términos de Servicio</a>
              <span className="sep">•</span>
              <a href="#inicio">Cumplimiento Tributario MH</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 11. FLOATING GLOWING WHATSAPP WIDGET */}
      <a 
        href="https://wa.me/50379718911?text=Hola,%20deseo%20conversar%20con%20un%20asesor%20de%20Arias%20Defense" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-btn"
        title="Contactar por WhatsApp"
      >
        <span className="whatsapp-ping-ring"></span>
        <i className="fa-brands fa-whatsapp"></i>
      </a>

    </div>
  );
}

export default App;
