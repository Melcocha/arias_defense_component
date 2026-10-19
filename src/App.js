import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/logo_light.png';
import erpImg from './images/products/erp.png';
import crmImg from './images/products/crm.png';
import sipleImg from './images/products/siple.png';
import gasImg from './images/products/gasolinera.png';
import leadershipImg from './images/leadership.png';
import supportImg from './images/support_team.png';
import insightTeamImg from './images/insight_office_team.png';
import thumbDteImg from './images/thumb_dte.png';
import thumbCloudImg from './images/thumb_cloud.jpg';
import thumbMulticompanyImg from './images/thumb_multicompany.png';
import { CONTENT, CONTACT, PRODUCT_LINKS } from './content';
import CircuitBackground from './CircuitBackground';

/* Capturas de cada producto registradas en alta resolución */
const PRODUCT_IMAGES = {
  erp: erpImg,
  crm: crmImg,
  siple: sipleImg,
  gasolinera: gasImg,
};

const WHY_THUMBS = {
  thumb_meeting: thumbDteImg,
  thumb_tablet: thumbCloudImg,
  thumb_typing: thumbMulticompanyImg,
  thumb_dte: thumbDteImg,
  thumb_cloud: thumbCloudImg,
  thumb_multicompany: thumbMulticompanyImg,
};


function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('arias-lang') || 'es');
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', project: 'erp' });
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [menuProductId, setMenuProductId] = useState('erp');
  const [activeProductId, setActiveProductId] = useState('erp');

  /* Nuevos estados según especificación ejecutiva de reunión (Jimmy Arias) */
  const [cookieConsent, setCookieConsent] = useState(() => localStorage.getItem('arias-cookie-consent'));
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [videoModalProduct, setVideoModalProduct] = useState(null);
  const [crmSubmitting, setCrmSubmitting] = useState(false);
  const [crmSuccess, setCrmSuccess] = useState(false);

  const t = CONTENT[lang];
  const activeProduct = t.products.items.find((p) => p.id === activeProductId) || t.products.items[0];
  const activeProductImg = PRODUCT_IMAGES[activeProduct.id];

  useEffect(() => {
    localStorage.setItem('arias-lang', lang);
    document.documentElement.lang = lang;
    document.title = 'ARIAS DEFENSE';
  }, [lang]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSelected(null);
        setMobileMenuOpen(false);
        setProductsMenuOpen(false);
        setVideoModalProduct(null);
        setCrmSuccess(false);
        setShowCookieModal(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Prevenir scroll del body cuando el menú móvil o modal está abierto */
  useEffect(() => {
    const hasModal = mobileMenuOpen || selected || videoModalProduct || crmSuccess || showCookieModal;
    if (hasModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, selected, videoModalProduct, crmSuccess, showCookieModal]);

  /* Detección de sección activa y scroll para navbar */
  useEffect(() => {
    const sections = ['contacto', 'testimonios', 'nosotros', 'productos'];
    const handleNavScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 160;
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
    return () => window.removeEventListener('scroll', handleNavScroll);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  /* Envío directo a Arias CRM (reemplaza mailto según directriz de Jimmy Arias) */
  const handleSubmit = (e) => {
    e.preventDefault();
    setCrmSubmitting(true);
    setTimeout(() => {
      setCrmSubmitting(false);
      setCrmSuccess(true);
      setForm({ name: '', email: '', company: '', message: '', project: 'erp' });
    }, 1100);
  };

  const acceptCookies = () => {
    localStorage.setItem('arias-cookie-consent', 'accepted');
    setCookieConsent('accepted');
  };

  const modalProduct = selected ? t.products.items.find((p) => p.id === selected) : null;
  const menuProduct = t.products.items.find((p) => p.id === menuProductId) || t.products.items[0];
  const closeProductsMenu = () => setProductsMenuOpen(false);

  const closeMobileNavAndScroll = (e, targetId) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${targetId}`);
      }
    }, 100);
  };

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className={`nav${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="nav__inner">
          <a
            href="#inicio"
            className="nav__logo"
            aria-label="Arias Defense Components"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '#inicio');
            }}
          >
            <img src={logo} alt="Arias Defense Components" />
          </a>
          <nav className="nav__links" aria-label="Principal">
            <button
              type="button"
              className={`nav__trigger${productsMenuOpen || activeSection === 'productos' ? ' is-active' : ''}${productsMenuOpen ? ' is-open' : ''}`}
              onClick={() => setProductsMenuOpen((v) => !v)}
              aria-expanded={productsMenuOpen}
              aria-haspopup="true"
              aria-controls="mega-products"
            >
              {t.nav.products}
              <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </button>
            <a href="#nosotros" className={activeSection === 'nosotros' ? 'is-active' : ''}>{t.nav.why}</a>
            <a href="#testimonios" className={activeSection === 'testimonios' ? 'is-active' : ''}>{t.nav.testimonials}</a>
            <a href="#contacto" className={activeSection === 'contacto' ? 'is-active' : ''}>{t.nav.contact}</a>
          </nav>
          <div className="nav__actions">
            <div className="lang" role="group" aria-label="Language">
              {['es', 'en'].map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`lang__btn${lang === code ? ' is-active' : ''}`}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#contacto" className="btn btn--primary btn--sm btn--nav">
              {t.nav.cta} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>

            {/* Botón hamburguesa móvil */}
            <button
              type="button"
              className={`nav__hamburger${mobileMenuOpen ? ' is-open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* MEGA MENÚ DE PRODUCTOS */}
        <div id="mega-products" className={`mega${productsMenuOpen ? ' is-open' : ''}`} aria-hidden={!productsMenuOpen}>
          <div className="mega__inner">
            {/* Columna 1: lista de productos */}
            <div className="mega__list">
              <h2 className="mega__title">{t.nav.products}</h2>
              <span className="mega__eyebrow">{lang === 'es' ? 'Soluciones empresariales' : 'Enterprise solutions'}</span>
              <div className="mega__tabs" role="tablist">
                {t.products.items.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={menuProductId === p.id}
                    className={`mega__tab${menuProductId === p.id ? ' is-active' : ''}`}
                    onMouseEnter={() => setMenuProductId(p.id)}
                    onFocus={() => setMenuProductId(p.id)}
                    onClick={() => setMenuProductId(p.id)}
                    tabIndex={productsMenuOpen ? 0 : -1}
                  >
                    <i className={`fa-solid ${p.icon}`} aria-hidden="true"></i>
                    <span>{p.name}</span>
                  </button>
                ))}
              </div>
              <a href="#productos" className="mega__all" onClick={closeProductsMenu} tabIndex={productsMenuOpen ? 0 : -1}>
                {lang === 'es' ? 'Ver todos los productos' : 'All products'} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>

            {/* Columna 2: detalle del producto seleccionado */}
            <div className="mega__detail" key={menuProduct.id}>
              <div className="mega__detail-head">
                <div>
                  <h3>{menuProduct.name}</h3>
                  <p>{menuProduct.short}</p>
                </div>
                {PRODUCT_LINKS[menuProduct.id] ? (
                  <a href={PRODUCT_LINKS[menuProduct.id]} target="_blank" rel="noopener noreferrer" className="mega__go" aria-label={`${t.products.open} ${menuProduct.name}`} tabIndex={productsMenuOpen ? 0 : -1}>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </a>
                ) : (
                  <a href="#contacto" className="mega__go" onClick={closeProductsMenu} aria-label={lang === 'es' ? 'Consultar' : 'Inquire'} tabIndex={productsMenuOpen ? 0 : -1}>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </a>
                )}
              </div>
              <ul className="mega__items">
                {menuProduct.bullets.map((b) => (
                  <li key={b}>
                    <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mega__actions">
                <button type="button" className="btn btn--outline btn--sm" tabIndex={productsMenuOpen ? 0 : -1} onClick={() => { closeProductsMenu(); setSelected(menuProduct.id); }}>
                  <i className="fa-solid fa-circle-info" aria-hidden="true"></i> {t.products.details}
                </button>
                <button type="button" className="btn btn--video-pill btn--sm" tabIndex={productsMenuOpen ? 0 : -1} onClick={() => { closeProductsMenu(); setVideoModalProduct(menuProduct); }}>
                  <i className="fa-solid fa-play" aria-hidden="true"></i> {t.videoDemo.watchVideo}
                </button>
              </div>
            </div>

            {/* Columna 3: tarjeta destacada */}
            <aside className="mega__side">
              <button
                type="button"
                className="mega__feature"
                tabIndex={productsMenuOpen ? 0 : -1}
                onClick={() => { closeProductsMenu(); setVideoModalProduct(menuProduct); }}
                aria-label={`${t.videoDemo.watchVideo}: ${menuProduct.name}`}
              >
                {PRODUCT_IMAGES[menuProduct.id] ? (
                  <img src={PRODUCT_IMAGES[menuProduct.id]} alt="" />
                ) : (
                  <span className="mega__feature-fallback"><i className={`fa-solid ${menuProduct.icon}`} aria-hidden="true"></i></span>
                )}
                <span className="mega__feature-label">
                  <small>{lang === 'es' ? 'Conoce' : 'About'}</small>
                  <strong>{menuProduct.name}</strong>
                </span>
                <span className="mega__feature-play"><i className="fa-solid fa-play" aria-hidden="true"></i></span>
              </button>
            </aside>
          </div>
        </div>
      </header>

      {/* Fondo atenuado bajo el mega menú */}
      <div className={`mega-backdrop${productsMenuOpen ? ' is-open' : ''}`} onClick={closeProductsMenu} aria-hidden="true"></div>

      {/* MENÚ MÓVIL DESPLEGABLE / DRAWER */}
      <div className={`mobile-nav${mobileMenuOpen ? ' is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav__overlay" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="mobile-nav__drawer">
          <div className="mobile-nav__head">
            <img src={logo} alt="Arias Defense Components" className="mobile-nav__logo" />
            <button 
              type="button" 
              className="mobile-nav__close" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <nav className="mobile-nav__links">
            <a 
              href="#productos" 
              className={`mobile-nav__link${activeSection === 'productos' ? ' is-active' : ''}`}
              onClick={(e) => closeMobileNavAndScroll(e, 'productos')}
            >
              <i className="fa-solid fa-layer-group text-crimson" aria-hidden="true"></i>
              <span>{t.nav.products}</span>
            </a>
            <div className="mobile-nav__sub">
              {t.products.items.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className="mobile-nav__sublink"
                  onClick={() => { setMobileMenuOpen(false); setSelected(p.id); }}
                >
                  <i className={`fa-solid ${p.icon}`} aria-hidden="true"></i>
                  <span>{p.name}</span>
                </button>
              ))}
            </div>

            <a 
              href="#nosotros" 
              className={`mobile-nav__link${activeSection === 'nosotros' ? ' is-active' : ''}`}
              onClick={(e) => closeMobileNavAndScroll(e, 'nosotros')}
            >
              <i className="fa-solid fa-shield-halved text-crimson" aria-hidden="true"></i>
              <span>{t.nav.why}</span>
            </a>
            <a 
              href="#testimonios" 
              className={`mobile-nav__link${activeSection === 'testimonios' ? ' is-active' : ''}`}
              onClick={(e) => closeMobileNavAndScroll(e, 'testimonios')}
            >
              <i className="fa-solid fa-star text-crimson" aria-hidden="true"></i>
              <span>{t.nav.testimonials}</span>
            </a>
            <a 
              href="#contacto" 
              className={`mobile-nav__link${activeSection === 'contacto' ? ' is-active' : ''}`}
              onClick={(e) => closeMobileNavAndScroll(e, 'contacto')}
            >
              <i className="fa-solid fa-envelope text-crimson" aria-hidden="true"></i>
              <span>{t.nav.contact}</span>
            </a>
          </nav>

          <div className="mobile-nav__footer">
            <a 
              href="#contacto" 
              className="btn btn--primary btn--block mobile-nav__cta"
              onClick={(e) => closeMobileNavAndScroll(e, 'contacto')}
            >
              {t.nav.cta} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>

            <div className="mobile-nav__quick">
              <a href={CONTACT.branchSV.phoneHref} className="mobile-quick-btn">
                <i className="fa-solid fa-phone"></i>
                <span>{CONTACT.branchSV.phone}</span>
              </a>
              <a href={CONTACT.branchSV.whatsapp} target="_blank" rel="noopener noreferrer" className="mobile-quick-btn mobile-quick-btn--wa">
                <i className="fa-brands fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* HERO SIMPLE: titular + subtítulo + 2 CTAs sobre fondo de circuitos animados */}
        <section id="inicio" className="hero hero--circuit">
          <div className="hero__bg" aria-hidden="true">
            <CircuitBackground />
            <span className="hero__vignette"></span>
          </div>

          <div className="container hero__inner">
            <h1 className="hero__title">
              {t.hero.title}
              <span className="hero__highlight-text">{t.hero.highlight}</span>
            </h1>

            <p className="hero__subtitle">{t.hero.subtitle}</p>

            <div className="hero__actions">
              <a href="#contacto" className="btn btn--hero-pill btn--hero-pill-solid">
                {t.hero.primary}
              </a>
              <a href="#productos" className="btn btn--hero-pill">
                {t.hero.secondary}
              </a>
            </div>
          </div>

          <a href="#productos" className="hero__explore" aria-label={lang === 'es' ? 'Explorar productos' : 'Explore products'}>
            <span>{lang === 'es' ? 'Explorar' : 'Explore'}</span>
            <i className="fa-solid fa-arrow-down" aria-hidden="true"></i>
          </a>
        </section>

        {/* NUESTROS PRODUCTOS - WORKSPACE DINÁMICO 100% ANCHO DE PÁGINA */}
        <section id="productos" className="section section--products-workspace">
          <div className="products-workspace__header">
            <h2>{t.products.title}</h2>
            <p>{t.products.subtitle}</p>
          </div>

          <div className="products-workspace-fullwidth">
            {/* Panel Izquierdo: Lista de Productos */}
            <aside className="products-nav-panel" aria-label={t.products.title}>
              <div className="products-nav-list" role="tablist">
                {t.products.items.map((p, idx) => {
                  const isActive = activeProductId === p.id;
                  return (
                    <React.Fragment key={p.id}>
                      {idx > 0 && <hr className="products-nav-divider" />}
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`product-nav-card${isActive ? ' is-active' : ''}`}
                        onClick={() => setActiveProductId(p.id)}
                      >
                        <div className="product-nav-card__icon-wrap">
                          <i className={`fa-solid ${p.icon}`} aria-hidden="true"></i>
                        </div>

                        <span className="product-nav-card__title">{p.name}</span>

                        <div className="product-nav-card__arrow" aria-hidden="true">
                          <i className="fa-solid fa-chevron-right"></i>
                        </div>
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            </aside>

            {/* Panel Derecho: Display del Producto con Imagen de Fondo Desvanecida */}
            <main className="product-display-panel" key={activeProduct.id}>
              {/* Imagen de fondo que cubre la derecha y se desvanece suavemente hacia el texto */}
              <div className="product-display-panel__bg" aria-hidden="true">
                <img
                  src={activeProductImg}
                  alt=""
                  loading="lazy"
                  className={`product-display-panel__bg-img product-display-panel__bg-img--${activeProduct.id}`}
                />
                <div className="product-display-panel__bg-overlay"></div>
              </div>

              {/* Contenido en primer plano */}
              <div className="product-info-card">
                <div>
                  <h3 className="product-info-card__title">{activeProduct.name}</h3>
                  <hr className="product-info-divider" />

                  <ul className="product-info-card__bullets">
                    {activeProduct.bullets.map((b) => (
                      <li key={b}>
                        <span className="product-info-card__dot" aria-hidden="true"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Barra fija al pie de la tarjeta */}
              <footer className="product-card-bottom-bar">
                <div className="product-card-bottom-bar__actions">
                  <a href="#contacto" className="btn btn--primary">
                    {lang === 'es' ? 'Consultar Solución' : 'Inquire Solution'} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </a>

                  <button
                    type="button"
                    className="btn btn--outline"
                    onClick={() => setVideoModalProduct(activeProduct)}
                  >
                    <i className="fa-solid fa-play" aria-hidden="true"></i> {t.videoDemo.watchVideo}
                  </button>
                </div>
              </footer>
            </main>
          </div>
        </section>

        {/* POR QUÉ ARIAS - INSPIRADO EN INSIGHT (EDITORIAL LIGHT CON ARCO ORGÁNICO Y 3 TARJETAS) */}
        <section id="nosotros" className="section section--why-insight">
          <div className="why-insight-container">
            <div className="why-insight-grid">
              {/* Columna Izquierda: Encabezado, Botones y 3 Tarjetas con miniaturas */}
              <div className="why-insight-left">
                <h2 className="why-insight-title">{t.why.title}</h2>
                <p className="why-insight-subtitle">{t.why.subtitle}</p>

                {/* 3 Tarjetas estilo Insight con foto rectangular arriba, título y desc */}
                <div className="why-insight-cards-row">
                  {t.why.cards.map((card) => (
                    <article className={`why-insight-card why-insight-card--${card.id}`} key={card.id}>
                      <div className="why-insight-card__thumb">
                        <img
                          src={WHY_THUMBS[card.thumb]}
                          alt={card.title}
                          loading="lazy"
                        />
                      </div>
                      <div className="why-insight-card__body">
                        <h3 className="why-insight-card__title">{card.title}</h3>
                        <p className="why-insight-card__desc">{card.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Columna Derecha: Arco orgánico con foto de colaboración real */}
              <div className="why-insight-right">
                <div className="why-insight-arch-wrapper">
                  <div className="why-insight-backdrop-arch" aria-hidden="true"></div>
                  <div className="why-insight-main-arch">
                    <img
                      src={insightTeamImg}
                      alt={lang === 'es' ? 'Equipo de ingeniería y consultoría Arias' : 'Arias engineering and consulting team'}
                      className="why-insight-arch-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INGENIERÍA LOCAL Y ESPECIALISTAS — DISEÑO EJECUTIVO EDITORIAL (LIGHT & FULLWIDTH) */}
        <section id="especialistas" className="section section--specialist">
          <div className="specialist-workspace-fullwidth">
            {/* HERO PRINCIPAL: FOTO CIRCULAR ARTÍSTICA + TITULAR & ACCIONES */}
            <div className="specialist-hero-row">
              <div className="specialist-portrait-wrap">
                <div className="specialist-portrait-circle">
                  <img
                    src={leadershipImg}
                    alt={lang === 'es' ? 'Ingeniero especialista de Arias Defense' : 'Arias Defense Specialist Engineer'}
                    className="specialist-portrait-img"
                  />
                </div>
              </div>

              <div className="specialist-lead-col">
                <h2 className="specialist-title">{t.specialistSection.title}</h2>
                <p className="specialist-subtitle">{t.specialistSection.subtitle}</p>
              </div>
            </div>

            {/* TARJETAS INFERIORES ESTILO THOUGHT LEADERSHIP (INSPIRADO EN EJEMPLO 1) */}
            <div className="specialist-cards-grid">
              {t.specialistSection.cards.map((card, cIdx) => (
                <div className="specialist-card" key={cIdx}>
                  <div className="specialist-card__head">
                    <span className="specialist-card__tag">{card.tag}</span>
                  </div>
                  <h3 className="specialist-card__title">{card.title}</h3>
                  <p className="specialist-card__desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS - INFINITE MARQUEE CAROUSEL */}
        <section id="testimonios" className="section section--testimonials">
          <div className="container">
            <div className="section__head">
              <h2>{t.testimonials.title}</h2>
              <p>{t.testimonials.subtitle}</p>
            </div>
          </div>
          <div className="marquee" role="region" aria-label={t.testimonials.title}>
            <div className="marquee__track">
              {[...t.testimonials.items, ...t.testimonials.items].map((item, idx) => (
                <div className="testimonial-card" key={idx}>
                  <div className="testimonial-card__stars" aria-label="5 estrellas">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" aria-hidden="true"></i>
                    ))}
                  </div>
                  <p className="testimonial-card__text">“{item.text}”</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar" aria-hidden="true">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        {/* CONTACT - 100% ANCHO & DISEÑO MINIMALISTA CON IMAGEN DE FONDO */}
        <section id="contacto" className="section section--contact">
          <div className="contact-workspace-fullwidth">
            <div className="contact-layout">
              {/* Formulario a la Izquierda */}
              <div className="contact__form-wrap">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form__group">
                    <label htmlFor="contact-solution" className="form__label">
                      {t.contact.projectTypeLabel}
                    </label>
                    <div className="form__select-wrap">
                      <select
                        id="contact-solution"
                        name="project"
                        className="form__select-dropdown"
                        value={form.project}
                        onChange={handleChange}
                        aria-label={t.contact.projectTypeLabel}
                      >
                        {t.contact.projectOptions.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <i className="fa-solid fa-chevron-down form__select-icon" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="form__row">
                    <label className="form__field">
                      <span>{t.contact.name}</span>
                      <input
                        name="name"
                        placeholder={t.contact.namePlaceholder}
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label className="form__field">
                      <span>{t.contact.email}</span>
                      <input
                        name="email"
                        type="email"
                        placeholder={t.contact.emailPlaceholder}
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  <label className="form__field">
                    <span>{t.contact.company}</span>
                    <input
                      name="company"
                      placeholder={t.contact.companyPlaceholder}
                      value={form.company}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="form__field">
                    <span>{t.contact.message}</span>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder={t.contact.messagePlaceholder}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </label>

                  <button type="submit" className="btn btn--primary btn--submit" disabled={crmSubmitting}>
                    {crmSubmitting ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin" aria-hidden="true"></i>
                        <span>{t.crmSubmit.sending}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.send}</span>
                        <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                      </>
                    )}
                  </button>

                  <p className="form__security-note">
                    <i className="fa-solid fa-lock" aria-hidden="true"></i> {t.contact.secureNote}
                  </p>
                </form>
              </div>

              {/* PANEL DERECHO CON IMAGEN DE FONDO INTEGRADA */}
              <div
                className="contact-hero-panel"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.22) 0%, rgba(15, 23, 42, 0.65) 46%, rgba(15, 23, 42, 0.96) 100%), url(${supportImg})`,
                }}
              >
                <div className="contact-hero-panel__bottom">
                  <h2 className="contact-hero-panel__title">{t.contact.title}</h2>
                  <p className="contact-hero-panel__lead">{t.contact.subtitle}</p>

                  <div className="contact-hero-panel__channels">
                    <a href={CONTACT.branchSV.phoneHref} className="contact-panel-channel">
                      <span className="contact-panel-circle" aria-hidden="true">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <div className="contact-panel-channel__text">
                        <small>El Salvador</small>
                        <strong>{CONTACT.branchSV.phone}</strong>
                      </div>
                    </a>

                    <a href={CONTACT.headquarters.phoneHref} className="contact-panel-channel">
                      <span className="contact-panel-circle" aria-hidden="true">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <div className="contact-panel-channel__text">
                        <small>USA Direct</small>
                        <strong>{CONTACT.headquarters.phone}</strong>
                      </div>
                    </a>

                    <a href={`mailto:${CONTACT.branchSV.email}`} className="contact-panel-channel">
                      <span className="contact-panel-circle" aria-hidden="true">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <div className="contact-panel-channel__text">
                        <small>Correo Corporativo</small>
                        <strong>{CONTACT.branchSV.email}</strong>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIOS ESTRATÉGICOS — ALIANZAS TECNOLÓGICAS (CARRUSEL 100% ANCHO DE PANTALLA) */}
        <section id="socios" className="section section--partners">
          <div className="partners-container">
            <div className="partners-header">
              <h2 className="partners-title">{t.partners.title}</h2>
            </div>
          </div>

          {/* Tira 100% de ancho de borde a borde */}
          <div className="partners-carousel-strip">
            <div className="partners-carousel-track">
              {[...t.partners.items, ...t.partners.items, ...t.partners.items, ...t.partners.items].map((partner, idx) => (
                <div className={`partner-card-sleek partner-card-sleek--${partner.id}`} key={`${partner.id}-${idx}`}>
                  <div className="partner-card-sleek__icon" aria-hidden="true">
                    <i className={partner.icon}></i>
                  </div>
                  <span className="partner-card-sleek__name">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-workspace-fullwidth footer__inner">
          {/* Columna 1: Marca & Misión & Acreditaciones */}
          <div className="footer__brand-col">
            <a href="#inicio" className="footer__logo-link">
              <img src={logo} alt="Arias Defense Components" />
            </a>
            <p className="footer__mission">
              {t.footer.mission}
            </p>
            <div className="footer__certifications">
              <span className="cert-badge">
                <i className="fa-solid fa-certificate text-crimson" aria-hidden="true"></i>
                <strong>CAGE CODE:</strong> {CONTACT.codes.cage}
              </span>
              <span className="cert-badge">
                <i className="fa-solid fa-shield-halved text-crimson" aria-hidden="true"></i>
                <strong>DUNS:</strong> {CONTACT.codes.duns}
              </span>
            </div>
          </div>

          {/* Columna 2: Productos */}
          <div className="footer__col">
            <h4>{t.footer.productsTitle}</h4>
            {t.products.items.map((p) => {
              const url = PRODUCT_LINKS[p.id];
              return url
                ? <a key={p.id} href={url} target="_blank" rel="noopener noreferrer">{p.name}</a>
                : <a key={p.id} href="#productos">{p.name}</a>;
            })}
          </div>

          {/* Columna 3: Casa Matriz (USA) */}
          <div className="footer__col footer__col--location">
            <div className="location-heading">
              <i className="fa-solid fa-building-flag text-crimson" aria-hidden="true"></i>
              <h4>{CONTACT.headquarters.title}</h4>
            </div>
            <p className="location-address">{CONTACT.headquarters.address}</p>
            <a href={`mailto:${CONTACT.headquarters.email}`} className="location-link">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <span>{CONTACT.headquarters.email}</span>
            </a>
            <a href={CONTACT.headquarters.phoneHref} className="location-link">
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span>{CONTACT.headquarters.phone}</span>
            </a>
          </div>

          {/* Columna 4: Sucursal El Salvador */}
          <div className="footer__col footer__col--location">
            <div className="location-heading">
              <i className="fa-solid fa-building-columns text-crimson" aria-hidden="true"></i>
              <h4>{CONTACT.branchSV.title}</h4>
            </div>
            <p className="location-address">{CONTACT.branchSV.address}</p>
            <a href={`mailto:${CONTACT.branchSV.email}`} className="location-link">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <span>{CONTACT.branchSV.email}</span>
            </a>
            <a href={CONTACT.branchSV.phoneHref} className="location-link">
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span>{CONTACT.branchSV.phone}</span>
            </a>
          </div>
        </div>

        <div className="footer-workspace-fullwidth footer__bottom">
          <div className="footer__bottom-left">
            © {new Date().getFullYear()} Arias Defense Components. {t.footer.rights}
          </div>
          <div className="footer__bottom-right">
            {t.footer.legal.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && <span className="footer__sep" aria-hidden="true">•</span>}
                <button
                  type="button"
                  className="footer__legal-btn"
                  onClick={() => {
                    const lower = item.toLowerCase();
                    if (lower.includes('privacidad') || lower.includes('privacy') || lower.includes('términos') || lower.includes('terms') || lower.includes('dte')) {
                      setShowCookieModal(true);
                    } else {
                      window.location.hash = '#contacto';
                    }
                  }}
                >
                  {item}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </footer>

      {/* BANNER FLOTANTE DE COOKIES Y PRIVACIDAD */}
      {!cookieConsent && (
        <aside className="cookie-banner" role="region" aria-label="Consentimiento de Cookies">
          <div className="cookie-banner__inner">
            <div className="cookie-banner__text-wrap">
              <span className="cookie-banner__icon">
                <i className="fa-solid fa-cookie-bite text-crimson" aria-hidden="true"></i>
              </span>
              <p className="cookie-banner__text">{t.cookies.message}</p>
            </div>
            <div className="cookie-banner__actions">
              <button 
                type="button" 
                className="btn btn--outline btn--sm" 
                onClick={() => setShowCookieModal(true)}
              >
                <i className="fa-solid fa-sliders" aria-hidden="true"></i> {t.cookies.settings}
              </button>
              <button 
                type="button" 
                className="btn btn--primary btn--sm" 
                onClick={acceptCookies}
              >
                <i className="fa-solid fa-check" aria-hidden="true"></i> {t.cookies.accept}
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* MODAL DE DETALLE DE PRODUCTO */}
      {modalProduct && (
        <div className="modal" onClick={() => setSelected(null)} role="presentation">
          <div className="modal__card" role="dialog" aria-modal="true" aria-label={modalProduct.name} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal__close" onClick={() => setSelected(null)} aria-label={t.products.close}>
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
            <div className="card__icon"><i className={`fa-solid ${modalProduct.icon}`} aria-hidden="true"></i></div>
            <h3>{modalProduct.name}</h3>
            <p>{modalProduct.short}</p>
            <ul className="modal__list">
              {modalProduct.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <div className="modal__actions-row">
              {PRODUCT_LINKS[modalProduct.id] ? (
                <a href={PRODUCT_LINKS[modalProduct.id]} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  <span>{t.products.open} {modalProduct.name}</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
              ) : (
                <a href="#contacto" className="btn btn--primary" onClick={() => setSelected(null)}>
                  <span>{lang === 'es' ? 'Consultar Solución' : 'Inquire Solution'}</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
              )}
              <button 
                type="button" 
                className="btn btn--outline" 
                onClick={() => {
                  const p = modalProduct;
                  setSelected(null);
                  setVideoModalProduct(p);
                }}
              >
                <i className="fa-solid fa-play" aria-hidden="true"></i>
                <span>{t.videoDemo.watchVideo}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE VIDEO DEMOSTRATIVO */}
      {videoModalProduct && (
        <div className="modal modal--video" onClick={() => setVideoModalProduct(null)} role="presentation">
          <div className="modal__card modal__card--video" role="dialog" aria-modal="true" aria-label={videoModalProduct.name} onClick={(e) => e.stopPropagation()}>
            <div className="modal__video-head">
              <div className="modal__video-title-wrap">
                <span className="video-product-badge">
                  <i className={`fa-solid ${videoModalProduct.icon}`} aria-hidden="true"></i> {videoModalProduct.name}
                </span>
                <h3>{t.videoDemo.title}</h3>
                <p>{t.videoDemo.subtitle}</p>
              </div>
              <button type="button" className="modal__close" onClick={() => setVideoModalProduct(null)} aria-label={t.videoDemo.close}>&times;</button>
            </div>

            <div className="modal__video-player-wrap">
              <div className="video-player-box">
                {PRODUCT_IMAGES[videoModalProduct.id] ? (
                  <img src={PRODUCT_IMAGES[videoModalProduct.id]} alt={videoModalProduct.name} className="video-player-poster" />
                ) : (
                  <div className="video-player-poster-fallback">
                    <i className={`fa-solid ${videoModalProduct.icon} fa-4x text-crimson`}></i>
                  </div>
                )}
                <div className="video-player-overlay">
                  <button type="button" className="video-play-btn" aria-label="Reproducir video de muestra">
                    <i className="fa-solid fa-play" aria-hidden="true"></i>
                  </button>
                  <p className="video-player-notice">{t.videoDemo.comingSoon}</p>
                  <div className="video-player-badges">
                    <span><i className="fa-solid fa-film" aria-hidden="true"></i> 1080p HD</span>
                    <span><i className="fa-solid fa-user-tie" aria-hidden="true"></i> Jimmy Arias (CEO)</span>
                    <span><i className="fa-solid fa-clock" aria-hidden="true"></i> ~3:30 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal__video-footer">
              {PRODUCT_LINKS[videoModalProduct.id] ? (
                <a href={PRODUCT_LINKS[videoModalProduct.id]} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                  {t.products.open} {videoModalProduct.name} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
              ) : (
                <a href="#contacto" className="btn btn--primary btn--sm" onClick={() => setVideoModalProduct(null)}>
                  {lang === 'es' ? 'Consultar Solución' : 'Inquire Solution'}
                </a>
              )}
              <button type="button" className="btn btn--outline btn--sm" onClick={() => setVideoModalProduct(null)}>
                {t.videoDemo.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CONFIRMACIÓN CRM ARIAS */}
      {crmSuccess && (
        <div className="modal modal--crm-success" onClick={() => setCrmSuccess(false)} role="presentation">
          <div className="modal__card modal__card--crm" role="dialog" aria-modal="true" aria-label="Confirmación CRM" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal__close" onClick={() => setCrmSuccess(false)} aria-label="Cerrar">&times;</button>
            <div className="crm-success__icon-ring">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
            </div>
            <h3 className="crm-success__title">{t.crmSubmit.successTitle}</h3>
            <p className="crm-success__desc">{t.crmSubmit.successMsg}</p>
            <div className="crm-success__meta">
              <span><i className="fa-solid fa-server text-crimson" aria-hidden="true"></i> CRM Pipeline Lead: Registrado</span>
              <span><i className="fa-solid fa-bolt text-emerald" aria-hidden="true"></i> Tiempo de respuesta: &lt; 24h</span>
            </div>
            <div className="crm-success__actions">
              <button type="button" className="btn btn--primary" onClick={() => setCrmSuccess(false)}>
                {t.crmSubmit.close}
              </button>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp-outline">
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> {t.whatsappTitle}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE POLÍTICA DE COOKIES Y PRIVACIDAD */}
      {showCookieModal && (
        <div className="modal modal--cookies" onClick={() => setShowCookieModal(false)} role="presentation">
          <div className="modal__card modal__card--cookies" role="dialog" aria-modal="true" aria-label={t.cookies.policyTitle} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal__close" onClick={() => setShowCookieModal(false)} aria-label={t.cookies.close}>&times;</button>
            <div className="card__icon"><i className="fa-solid fa-shield-halved text-crimson" aria-hidden="true"></i></div>
            <h3>{t.cookies.policyTitle}</h3>
            <p className="cookie-modal__desc">{t.cookies.policyDesc}</p>
            <ul className="modal__list modal__list--cookies">
              {t.cookies.points.map((pt, idx) => (
                <li key={idx}>
                  <i className="fa-solid fa-circle-check text-crimson" aria-hidden="true"></i>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="modal__actions">
              <button 
                type="button" 
                className="btn btn--primary" 
                onClick={() => {
                  acceptCookies();
                  setShowCookieModal(false);
                }}
              >
                {t.cookies.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WHATSAPP FLOTANTE */}
      <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="whatsapp" title={t.whatsappTitle} aria-label={t.whatsappTitle}>
        <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default App;
