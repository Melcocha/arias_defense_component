import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('erp');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', desc: '' });
  const [selectedProducts, setSelectedProducts] = useState(['ERP ARIAS']);

  const tabData = {
    erp: {
      title: "ERP ARIAS: Gestión Financiera Multi-Empresa",
      desc: "Permite administrar múltiples razones sociales, facturación DTE El Salvador y flujos de caja en tiempo real.",
      bullets: [
        "Un solo contador podrá administrar hasta 40 empresas en vez de 15.",
        "Integración con planillas de empleados, bancos y conciliación contable.",
        "Facturación electrónica masiva DTE autorizada en El Salvador."
      ],
      btn: "Solicitar Demo de ERP ARIAS",
      img: "assets_redesign/arias_solution_showcase_1786402080627.png"
    },
    crm: {
      title: "CRM ARIAS: Pipeline de Ventas & Clientes",
      desc: "El producto de ticket más alto. Diseñado para que las empresas gestionen sus clientes, oportunidades de venta y cotizaciones.",
      bullets: [
        "Integrado 100% con facturación electrónica en 3 semanas.",
        "Control de prospectos comerciales y embudo de conversión.",
        "Generación instantánea de cotizaciones y alertas de seguimiento."
      ],
      btn: "Solicitar Demo de CRM ARIAS",
      img: "assets_redesign/arias_crm_showcase_tab_1786411127962.png"
    },
    siple: {
      title: "SIPLE: Sistema Especializado para Lotificadoras",
      desc: "Para administradores que llevan proyectos de terrenos, lotes y desarrollos inmobiliarios multi-empresa a la vez.",
      bullets: [
        "Mapeo de lotes disponibles, reservados y vendidos por proyecto.",
        "Cobro de cuotas periódicas a compradores y cronograma de pagos.",
        "En 2 meses incluirá contabilidad, planillas y módulos bancarios."
      ],
      btn: "Solicitar Demo de SIPLE Lotificadoras",
      img: "assets_redesign/arias_siple_showcase_tab_1786411141225.png"
    },
    gasolinera: {
      title: "Gasolinera: Sistema Integral para Estaciones de Servicio",
      desc: "Solución completa para control de dispensadores de combustible, arqueo de caja por turno en pista y facturación inmediata.",
      bullets: [
        "Monitoreo de tanques de combustible e inventarios en tiempo real.",
        "Control de cierres de caja por turno y manguera surtidora.",
        "Producto terminado en 2 meses con contabilidad, planilla y bancos."
      ],
      btn: "Solicitar Demo de Gasolinera",
      img: "assets_redesign/arias_gasolinera_showcase_tab_1786411155869.png"
    }
  };

  const openVideoModal = (title, desc) => {
    setModalData({ title: 'Video Demo: ' + title, desc });
    setModalOpen(true);
  };

  const toggleProduct = (prod) => {
    if (selectedProducts.includes(prod)) {
      setSelectedProducts(selectedProducts.filter(p => p !== prod));
    } else {
      setSelectedProducts([...selectedProducts, prod]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias! Un especialista de ARIAS en El Salvador te contactará a la brevedad para mostrarte los productos seleccionados.');
  };

  return (
    <div className="App">
      {/* TOP UTILITY HEADER */}
      <div className="top-header-bar">
        <div className="top-header-inner">
          <a href="#productos" className="header-brand-logo">
            <span className="logo-mark">ARIAS</span> DEFENSE
          </a>

          <div className="header-search-box">
            <input type="text" placeholder="Buscar soluciones ERP, CRM, SIPLE Lotificadoras, Gasolinera y módulos..." />
            <button title="Buscar"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

          <div className="top-header-right">
            <a href="#contacto"><i className="fa-solid fa-headset"></i> Soporte 24/7</a>
            <a href="#contacto"><i className="fa-solid fa-location-dot" style={{ color: 'var(--brand-crimson)' }}></i> 🇸🇻 El Salvador (ES)</a>
            <a href="#contacto"><i className="fa-solid fa-phone"></i> +503 2200-ARIAS</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION NAVBAR */}
      <nav className="main-navbar">
        <div className="nav-inner-container">
          <ul className="nav-links-left">
            <li className="nav-link-item">
              <a href="#productos">Productos & Módulos <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.75rem' }}></i></a>
              <div className="megamenu-box">
                <div className="megamenu-sidebar">
                  <ul>
                    <li><a href="#productos" className="active">Nuestros 4 Productos <span>›</span></a></li>
                    <li><a href="#soluciones">Especialidades <span>›</span></a></li>
                    <li><a href="#nosotros">Empresa <span>›</span></a></li>
                  </ul>
                  <a href="#productos" style={{ color: 'var(--brand-crimson)', fontSize: '0.85rem', marginTop: '30px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Ver todas las soluciones ➔</a>
                </div>

                <div className="megamenu-cols">
                  <div>
                    <h5>o ERP ARIAS</h5>
                    <p style={{ fontSize: '0.82rem' }}>Facturación electrónica masiva y gestión contable multi-empresa.</p>
                    <h5>o CRM ARIAS</h5>
                    <p style={{ fontSize: '0.82rem' }}>Pipeline comercial, gestión de clientes y cotizaciones automáticas.</p>
                  </div>
                  <div>
                    <h5>o SIPLE (Lotificadoras)</h5>
                    <p style={{ fontSize: '0.82rem' }}>Administración de terrenos, cuotas de lotes y desarrollo inmobiliario.</p>
                    <h5>o Gasolinera</h5>
                    <p style={{ fontSize: '0.82rem' }}>Control de pistas, surtidores de combustible y turnos.</p>
                  </div>
                  <div>
                    <h5>o Facturación DTE El Salvador</h5>
                    <p style={{ fontSize: '0.82rem' }}>Documentos tributarios electrónicos autorizados por Hacienda.</p>
                    <h5>o Módulo de Bancos & Planillas</h5>
                    <p style={{ fontSize: '0.82rem' }}>Conciliación contable automática y pago de nóminas.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-link-item"><a href="#soluciones">Soluciones por Sector ▾</a></li>
            <li className="nav-link-item"><a href="#socios">Socios Estratégicos</a></li>
            <li className="nav-link-item"><a href="#nosotros">Misión & Objetivos</a></li>
          </ul>

          <div>
            <a href="#contacto" className="ask-ai-pill"><i className="fa-solid fa-sparkles"></i> ✨ Preguntar a ARIAS AI</a>
          </div>
        </div>
      </nav>

      {/* HERO BANNER SECTION */}
      <section className="hero-banner-section">
        <div className="hero-container">
          <div className="hero-text-box">
            <h1>El Ecosistema Tecnológico Líder en El Salvador</h1>
            <p>Centraliza la gestión contable multi-empresa, ventas comerciales, desarrollos de lotificadoras y estaciones de servicio con la plataforma cloud más avanzada.</p>
            <div className="hero-pill-buttons">
              <a href="#soluciones" className="btn-pill-outline"><i className="fa-solid fa-layer-group"></i> Descubrir Soluciones Enterprise</a>
              <a href="#productos" className="btn-pill-solid"><i className="fa-solid fa-grid-2"></i> Ver Nuestros 4 Productos</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5 CAPABILITIES GRID */}
      <section className="capabilities-section">
        <div className="capabilities-grid-5">
          <div className="capability-card">
            <p>Construye una estructura contable escalable en la nube que administre hasta 40 empresas por contador en ERP ARIAS.</p>
            <div className="card-arrow-btn"><i className="fa-solid fa-arrow-right"></i></div>
          </div>
          <div className="capability-card">
            <p>Maximiza el rendimiento comercial canalizando prospectos, cotizaciones y clientes al 100% en CRM ARIAS.</p>
            <div className="card-arrow-btn"><i className="fa-solid fa-arrow-right"></i></div>
          </div>
          <div className="capability-card">
            <p>Administra desarrollos inmobiliarios, cuotas de lotes y proyectos de terrenos con la plataforma especializada SIPLE.</p>
            <div className="card-arrow-btn"><i className="fa-solid fa-arrow-right"></i></div>
          </div>
          <div className="capability-card">
            <p>Controla estaciones de servicio con arqueo de mangueras por turno, lectura de tanques y facturación en Gasolinera.</p>
            <div className="card-arrow-btn"><i className="fa-solid fa-arrow-right"></i></div>
          </div>
          <div className="capability-card">
            <p>Emite Facturación Electrónica DTE autorizada por el Ministerio de Hacienda de El Salvador de forma automatizada.</p>
            <div className="card-arrow-btn"><i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>

        <div className="highlight-banner-1">
          <div>La Inteligencia Artificial de ARIAS optimiza la gestión empresarial en El Salvador.</div>
          <a href="#contacto" className="btn-pill-outline" style={{ borderColor: 'var(--brand-crimson)', color: 'var(--brand-crimson)', padding: '10px 22px' }}><i className="fa-solid fa-sparkles"></i> Ver cómo ayudamos</a>
        </div>
        <div className="highlight-banner-2">
          <div>¿El 2026 requiere multiplicar x2.6 la capacidad contable de tu firma de contadores?</div>
          <a href="#contacto" className="btn-pill-outline" style={{ borderColor: 'var(--brand-crimson)', color: 'var(--brand-crimson)', padding: '10px 22px' }}><i className="fa-solid fa-calculator"></i> Conocer la solución ERP</a>
        </div>
      </section>

      {/* STRATEGIC PARTNERS */}
      <section id="socios" className="partners-section">
        <div className="partners-header">
          <h3>Nuestros Socios Estratégicos & Alianzas Tecnológicas</h3>
        </div>
        <div className="partners-grid">
          <div className="partner-tile"><i className="fa-brands fa-aws" style={{ color: '#FF9900', fontSize: '1.4rem' }}></i> AWS Cloud</div>
          <div className="partner-tile"><i className="fa-brands fa-microsoft" style={{ color: '#00A4EF', fontSize: '1.4rem' }}></i> MS Azure</div>
          <div className="partner-tile"><i className="fa-brands fa-google" style={{ color: '#4285F4', fontSize: '1.4rem' }}></i> Google Cloud</div>
          <div className="partner-tile"><i className="fa-solid fa-database" style={{ color: '#F80000', fontSize: '1.4rem' }}></i> Oracle Cloud</div>
          <div className="partner-tile"><i className="fa-solid fa-building-columns" style={{ color: '#10B981', fontSize: '1.4rem' }}></i> DTE El Salvador</div>
          <div className="partner-tile"><i className="fa-brands fa-stripe" style={{ color: '#635BFF', fontSize: '1.4rem' }}></i> Stripe Payments</div>
        </div>
      </section>

      {/* SPOTLIGHT SECTION */}
      <section className="spotlight-section">
        <div className="spotlight-grid">
          <div className="spotlight-text">
            <h2>Una mejor manera de gestionar tu software empresarial</h2>
            <p>Simplifica y optimiza tus procesos operativos. Hacemos que adquirir y administrar la tecnología que necesitas sea más fácil que nunca en El Salvador.</p>
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
              <a href="#contacto" className="btn-pill-solid" style={{ background: 'var(--brand-crimson)', color: 'white' }}><i className="fa-solid fa-rocket"></i> Comenzar ahora</a>
              <a href="#productos" style={{ color: 'var(--brand-crimson)', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Explorar soluciones ➔</a>
            </div>
          </div>
          <div>
            <div className="arch-image-frame">
              <img src="assets_redesign/insight_arch_team_mockup_1786411365493.png" alt="Arch Team Mockup ARIAS" />
            </div>
          </div>
        </div>
      </section>

      {/* NUESTROS 4 PRODUCTOS */}
      <section id="productos" class="products-section">
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span style={{ color: 'var(--brand-crimson)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>02 · LO QUE VENDEMOS</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--brand-charcoal)', marginTop: '4px' }}>Nuestros 4 Productos</h2>
          <p style={{ color: 'var(--brand-text-dark)', fontSize: '1.08rem', marginTop: '6px' }}>Tres ya se venden hoy. El cuarto sale en 2 meses.</p>
        </div>

        <div className="products-grid-4">
          {/* ERP */}
          <div className="product-card-4">
            <div className="card-top-header">
              <div className="product-icon-sq" style={{ background: 'rgba(174, 10, 70, 0.08)', color: 'var(--brand-crimson)' }}>
                <i className="fa-solid fa-calculator"></i>
              </div>
              <span className="status-badge badge-vende-ya">SE VENDE YA</span>
            </div>
            <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--brand-charcoal)' }}>ERP ARIAS</h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--brand-text-dark)' }}>Facturación electrónica DTE El Salvador y manejo de muchas empresas en un solo sistema.</p>
            <div className="video-demo-btn" onClick={() => openVideoModal('ERP ARIAS', 'Facturación masiva DTE El Salvador y control contable multi-empresa.')}>
              <i className="fa-solid fa-circle-play" style={{ color: 'var(--brand-crimson)' }}></i> Ver Video Demo / GIF 30s
            </div>
            <div className="roadmap-box">
              <strong>En 2 meses:</strong> incluirá contabilidad, planillas y bancos — el contador podrá llevar 40 empresas en vez de 15.
            </div>
          </div>

          {/* CRM */}
          <div className="product-card-4">
            <div className="card-top-header">
              <div className="product-icon-sq" style={{ background: 'rgba(56, 96, 190, 0.1)', color: 'var(--brand-tech-blue)' }}>
                <i className="fa-solid fa-address-book"></i>
              </div>
              <span className="status-badge badge-vende-ya">SE VENDE YA</span>
            </div>
            <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--brand-charcoal)' }}>CRM ARIAS</h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--brand-text-dark)' }}>Para que las empresas gestionen sus clientes y sus ventas comercialmente.</p>
            <div className="video-demo-btn" onClick={() => openVideoModal('CRM ARIAS', 'Pipeline de ventas y cotizaciones automatizadas.')}>
              <i className="fa-solid fa-circle-play" style={{ color: 'var(--brand-crimson)' }}></i> Ver Video Demo / GIF 30s
            </div>
            <div className="roadmap-box">
              <strong>El producto de ticket más alto:</strong> Al 100% en 3 semanas. (integrar con facturación electrónica)
            </div>
          </div>

          {/* SIPLE */}
          <div className="product-card-4">
            <div className="card-top-header">
              <div className="product-icon-sq" style={{ background: 'rgba(33, 107, 165, 0.1)', color: 'var(--brand-ui-blue)' }}>
                <i className="fa-solid fa-city"></i>
              </div>
              <span className="status-badge badge-vende-ya">SE VENDE YA</span>
            </div>
            <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--brand-charcoal)' }}>SIPLE (Lotificadoras)</h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--brand-text-dark)' }}>Sistema especializado para administradores de lotificadoras y desarrollos de terrenos.</p>
            <div className="video-demo-btn" onClick={() => openVideoModal('SIPLE Lotificadoras', 'Gestión de terrenos, cuotas de lotes y proyectos inmobiliarios.')}>
              <i className="fa-solid fa-circle-play" style={{ color: 'var(--brand-crimson)' }}></i> Ver Video Demo / GIF 30s
            </div>
            <div className="roadmap-box">
              <strong>En 2 meses:</strong> multi-empresa que ya está pero tendrá contabilidad, planillas y bancos
            </div>
          </div>

          {/* GASOLINERA */}
          <div className="product-card-4">
            <div className="card-top-header">
              <div className="product-icon-sq" style={{ background: '#FFF8E1', color: '#E67E22' }}>
                <i className="fa-solid fa-gas-pump"></i>
              </div>
              <span className="status-badge badge-en-2-meses">EN 2 MESES</span>
            </div>
            <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--brand-charcoal)' }}>Gasolinera</h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--brand-text-dark)' }}>Sistema completo para estaciones de servicio (pistas, mangueras y turnos).</p>
            <div className="video-demo-btn" onClick={() => openVideoModal('ARIAS Gasolinera', 'Control de surtidores de combustible y arqueo de turnos.')}>
              <i className="fa-solid fa-circle-play" style={{ color: 'var(--brand-crimson)' }}></i> Ver Video Demo / GIF 30s
            </div>
            <div className="roadmap-box">
              <strong>Producto terminado en 2 meses:</strong> con contabilidad, planilla y bancos
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE INTERACTIVO REACT TABS */}
      <section id="soluciones" className="showcase-interactive-section">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ color: 'var(--brand-crimson)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Demostrador Interactivo Dinámico</span>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: 'var(--brand-charcoal)', marginTop: '4px' }}>Elige un Producto para Ver su Interfaz</h2>
        </div>

        <div className="showcase-wrapper">
          <div className="showcase-tabs-bar">
            <button className={`tab-trigger ${activeTab === 'erp' ? 'active' : ''}`} onClick={() => setActiveTab('erp')}><i className="fa-solid fa-calculator"></i> ERP ARIAS</button>
            <button className={`tab-trigger ${activeTab === 'crm' ? 'active' : ''}`} onClick={() => setActiveTab('crm')}><i className="fa-solid fa-address-book"></i> CRM ARIAS</button>
            <button className={`tab-trigger ${activeTab === 'siple' ? 'active' : ''}`} onClick={() => setActiveTab('siple')}><i className="fa-solid fa-city"></i> SIPLE Lotificadoras</button>
            <button className={`tab-trigger ${activeTab === 'gasolinera' ? 'active' : ''}`} onClick={() => setActiveTab('gasolinera')}><i className="fa-solid fa-gas-pump"></i> Gasolinera</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--brand-charcoal)', marginBottom: '14px' }}>{tabData[activeTab].title}</h3>
              <p style={{ fontSize: '1.02rem', color: 'var(--brand-text-dark)', marginBottom: '22px', lineHeight: 1.6 }}>{tabData[activeTab].desc}</p>
              
              <ul style={{ listStyle: 'none', marginBottom: '26px' }}>
                {tabData[activeTab].bullets.map((b, i) => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--brand-crimson)', marginTop: '3px', fontSize: '1.1rem' }}></i>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className="btn-pill-solid" style={{ background: 'var(--brand-crimson)', color: 'white', display: 'inline-flex' }}>
                <i className="fa-solid fa-arrow-right"></i> {tabData[activeTab].btn}
              </a>
            </div>

            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--brand-border)', boxShadow: 'var(--card-shadow)' }}>
              <img src={tabData[activeTab].img} alt="Showcase Preview" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* VISION & GOALS */}
      <section id="nosotros" className="vision-section">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: 'var(--brand-crimson)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Filosofía Corporativa</span>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: 'var(--brand-charcoal)', marginTop: '4px' }}>Misión, Visión y Objetivos de ARIAS Enterprise</h2>
        </div>

        <div className="vision-grid">
          <div className="vision-card-box">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(174, 10, 70, 0.08)', color: 'var(--brand-crimson)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}><i className="fa-solid fa-bullseye"></i></div>
            <h4 style={{ fontWeight: 800, color: 'var(--brand-charcoal)', fontSize: '1.25rem' }}>Nuestra Misión</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--brand-text-dark)', lineHeight: 1.6 }}>Transformar y simplificar la gestión operativa y financiera en El Salvador con un ecosistema cloud integrado y automatizado.</p>
          </div>

          <div className="vision-card-box">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(174, 10, 70, 0.08)', color: 'var(--brand-crimson)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}><i className="fa-solid fa-eye"></i></div>
            <h4 style={{ fontWeight: 800, color: 'var(--brand-charcoal)', fontSize: '1.25rem' }}>Nuestra Visión</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--brand-text-dark)', lineHeight: 1.6 }}>Ser la plataforma SaaS de referencia para contadores multi-empresa, equipos comerciales, lotificadoras y estaciones de servicio.</p>
          </div>

          <div className="vision-card-box">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(174, 10, 70, 0.08)', color: 'var(--brand-crimson)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}><i className="fa-solid fa-chart-line"></i></div>
            <h4 style={{ fontWeight: 800, color: 'var(--brand-charcoal)', fontSize: '1.25rem' }}>Metas y Objetivos</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--brand-text-dark)', lineHeight: 1.6 }}>Multiplicar x2.6 la capacidad de los contadores y digitalizar el 100% de los procesos de ventas, facturación DTE y cuotas de terrenos.</p>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section id="contacto" className="lead-section">
        <div className="lead-box-container">
          <div>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 800, marginBottom: '16px' }}>Solicita tu Demostración Personalizada</h2>
            <p style={{ color: 'var(--brand-bg-neutral)', marginBottom: '26px', fontSize: '1.02rem' }}>Selecciona el producto de tu interés y un especialista técnico configurará una demo en vivo.</p>

            <div style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '12px', color: 'var(--brand-bg-neutral)' }}>Selecciona tus productos:</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {['ERP ARIAS', 'CRM ARIAS', 'SIPLE Lotificadoras', 'Gasolinera'].map(prod => (
                <div
                  key={prod}
                  onClick={() => toggleProduct(prod)}
                  style={{
                    background: selectedProducts.includes(prod) ? 'var(--brand-crimson)' : 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <i className="fa-solid fa-check"></i> {prod}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-md)', color: 'var(--brand-charcoal)' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px' }}>Contactar a Ventas</h4>
            <form onSubmit={handleFormSubmit}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>Nombre Completo</label>
                <input type="text" placeholder="Ej. Carlos Mendoza" required style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--brand-border)', borderRadius: 'var(--radius-sm)', fontFamily: 'inherit' }} />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>Correo Corporativo</label>
                <input type="email" placeholder="carlos@empresa.com.sv" required style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--brand-border)', borderRadius: 'var(--radius-sm)', fontFamily: 'inherit' }} />
              </div>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>Sector / Giro Comercial</label>
                <select required style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--brand-border)', borderRadius: 'var(--radius-sm)', fontFamily: 'inherit' }}>
                  <option value="ERP">Firma Contable / Contador Multi-Empresa</option>
                  <option value="CRM">Empresa Comercial / Ventas (CRM)</option>
                  <option value="SIPLE">Desarrolladora de Lotificadoras / Terrenos (SIPLE)</option>
                  <option value="Gasolinera">Estación de Servicio / Gasolinera</option>
                </select>
              </div>
              <button type="submit" className="btn-pill-solid" style={{ background: 'var(--brand-crimson)', color: 'white', width: '100%', textAlign: 'center', border: 'none', justifyContent: 'center' }}>
                <i className="fa-solid fa-paper-plane"></i> Solicitar Demo Personalizada
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FLOATING AI ASSISTANT */}
      <div className="floating-ai-widget" onClick={() => alert('ARIAS AI Assistant: ¿En qué puedo ayudarte hoy con ERP, CRM, SIPLE Lotificadoras o Gasolinera?')}>
        <i className="fa-solid fa-sparkles"></i> ✨ Preguntar a ARIAS AI
      </div>

      {/* VIDEO MODAL */}
      {modalOpen && (
        <div className="video-modal" style={{ display: 'flex' }}>
          <div className="video-modal-card">
            <span onClick={() => setModalOpen(false)} style={{ position: 'absolute', top: '12px', right: '16px', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--brand-charcoal)', marginBottom: '8px' }}>{modalData.title}</h3>
            <p style={{ color: 'var(--brand-text-dark)', marginBottom: '20px', fontSize: '0.9rem' }}>{modalData.desc}</p>
            <div style={{ background: 'var(--brand-charcoal)', height: '250px', borderRadius: 'var(--radius-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <i className="fa-solid fa-circle-play" style={{ fontSize: '3.5rem', color: 'var(--brand-crimson)', marginBottom: '10px' }}></i>
              <p style={{ fontWeight: 700 }}>[ Reproduciendo GIF / Video Demo de 30 Segundos ]</p>
            </div>
            <button onClick={() => setModalOpen(false)} className="btn-pill-solid" style={{ background: 'var(--brand-crimson)', color: 'white', width: '100%', marginTop: '18px', border: 'none', justifyContent: 'center' }}>Cerrar Vista Previa</button>
          </div>
        </div>
      )}

      {/* CLEAN & ELEGANT FOOTER */}
      <div className="footer-top-banner">
        Como el ecosistema de software líder en El Salvador, resolvemos los desafíos operacionales y financieros de tu empresa.
      </div>

      <footer className="main-footer-clean">
        <div className="footer-grid-4">
          <div className="footer-newsletter">
            <h4>Boletín Informativo ARIAS</h4>
            <p>Suscríbete para recibir actualizaciones sobre Facturación Electrónica DTE, gestión de lotificadoras y nuevas funciones de ARIAS.</p>
            <button className="btn-newsletter" onClick={() => alert('¡Gracias por suscribirte al boletín de ARIAS El Salvador!')}><i className="fa-solid fa-envelope"></i> Suscribirme al Boletín</button>
          </div>

          <div className="footer-col">
            <h5>Sobre ARIAS Defense</h5>
            <ul>
              <li><a href="#nosotros"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Visión General</a></li>
              <li><a href="#nosotros"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Certificación DTE Hacienda</a></li>
              <li><a href="#nosotros"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Misión y Objetivos</a></li>
              <li><a href="#nosotros"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Sostenibilidad Digital</a></li>
              <li><a href="#nosotros"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Equipo Directivo</a></li>
              <li><a href="#contacto"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Empleos en El Salvador</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Prensa y Alianzas</h5>
            <ul>
              <li><a href="#contacto"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Eventos & Webinars</a></li>
              <li><a href="#nosotros"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Noticias del Sector</a></li>
              <li><a href="#socios"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Alianzas Cloud (AWS/Azure)</a></li>
              <li><a href="#socios"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Relaciones Empresariales</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Ayuda y Soporte</h5>
            <ul>
              <li><a href="#contacto"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Contactar Soporte 24/7</a></li>
              <li><a href="#soluciones"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Documentación DTE El Salvador</a></li>
              <li><a href="#soluciones"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Base de Conocimientos</a></li>
              <li><a href="#contacto"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Asistencia Telefónica +503</a></li>
              <li><a href="#contacto"><i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--brand-crimson)' }}></i> Estado del Sistema</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-social-row">
          <a href="#contacto" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#contacto" title="Facebook"><i className="fa-brands fa-facebook"></i></a>
          <a href="#contacto" title="X (Twitter)"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#contacto" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
          <a href="#contacto" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
        </div>

        <div className="footer-bottom-bar">
          <div>© 2026 ARIAS Defense Component. Todos los derechos reservados. San Salvador, El Salvador.</div>
          <div className="footer-bottom-links">
            <a href="#contacto">Privacidad</a>
            <a href="#contacto">Términos y Condiciones</a>
            <a href="#contacto">Accesibilidad Web</a>
            <a href="#contacto">Glosario Técnico</a>
            <a href="#contacto">Configurar Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
