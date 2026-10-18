import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import logo from './images/logo_light.png';
import erpImg from './images/products/erp.png';
import crmImg from './images/products/crm.png';
import gasImg from './images/products/gasolinera.png';
import { CONTENT, CONTACT, PRODUCT_LINKS } from './content';

/* Capturas de cada producto. SIPLE: agregar su imagen en src/images/products/ y registrarla aquí. */
const PRODUCT_IMAGES = {
  erp: erpImg,
  crm: crmImg,
  siple: null,
  gasolinera: gasImg,
};

/* Número que se anima de 0 al valor final al entrar en pantalla y se repite cada cierto tiempo. */
function CountUp({ end, suffix = '', duration = 1600, cycle = 8000 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    let raf;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    run();
    const timer = setInterval(run, cycle);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(timer);
    };
  }, [visible, end, duration, cycle]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function ProductRow({ p, idx, isEven, url, img, onSelect, lang, t }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slideDir = idx % 2 === 0 ? 'slide-from-right' : 'slide-from-left';

  return (
    <article 
      ref={ref}
      className={`product-row ${isEven ? 'product-row--reverse' : ''} ${slideDir} ${isInView ? 'is-in-view' : ''}`}
    >
      {/* Columna de Información con texto ligero y directo */}
      <div className="product-row__info">
        {/* Encabezado Único: Ícono + Título + Métrica */}
        <div className="product-row__header">
          <div className="product-row__title-group">
            <div className="product-row__icon-badge">
              <i className={`fa-solid ${p.icon}`} aria-hidden="true"></i>
            </div>
            <h3 className="product-row__title">{p.name}</h3>
          </div>
          <span className="product-row__metric">
            <i className="fa-solid fa-circle-check text-crimson" aria-hidden="true"></i> {p.metric}
          </span>
        </div>

        <p className="product-row__desc">{p.short}</p>

        <ul className="product-row__features">
          {p.bullets.slice(0, 3).map((b) => (
            <li key={b}>
              <i className="fa-solid fa-check text-crimson" aria-hidden="true"></i>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="product-row__actions">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
              {t.products.open} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          ) : (
            <a href="#contacto" className="btn btn--primary btn--sm">
              {lang === 'es' ? 'Consultar Solución' : 'Inquire Solution'} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          )}
          <button type="button" className="btn btn--outline btn--sm" onClick={() => onSelect(p.id)}>
            <i className="fa-solid fa-circle-info" aria-hidden="true"></i> {t.products.details}
          </button>
        </div>
      </div>

      {/* Columna Visual: Mockup de Software con Captura Real */}
      <div className="product-row__visual">
        <div className="product-mockup">
          <div className="product-mockup__bar">
            <div className="product-mockup__dots">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
            </div>
            <span className="product-mockup__url">
              <i className="fa-solid fa-lock text-crimson" aria-hidden="true"></i>
              {p.id === 'erp' ? 'ariasfintech.com // contable' :
               p.id === 'crm' ? 'crm-app-v2.vercel.app // pipeline' :
               p.id === 'siple' ? '3.17.174.137 // lotificaciones' :
               'ariasgas.com // pista-turnos'}
            </span>
            <span className="product-mockup__status">
              <span className="pulse-dot"></span> {lang === 'es' ? 'Online' : 'Live'}
            </span>
          </div>

          <div className="product-mockup__screen">
            {img ? (
              <img src={img} alt={p.name} loading="lazy" className="product-mockup__img" />
            ) : (
              <div className="product-blueprint-sim">
                <div className="blueprint-grid-sim">
                  <div className="blueprint-cell"><i className="fa-solid fa-map-pin text-crimson"></i> Mz 14 / Lote 08 <span>✓ Vendido</span></div>
                  <div className="blueprint-cell"><i className="fa-solid fa-map-pin text-emerald"></i> Mz 14 / Lote 09 <span>Disponible</span></div>
                  <div className="blueprint-cell"><i className="fa-solid fa-map-pin text-crimson"></i> Mz 14 / Lote 10 <span>✓ Vendido</span></div>
                  <div className="blueprint-cell"><i className="fa-solid fa-map-pin text-emerald"></i> Mz 14 / Lote 11 <span>Disponible</span></div>
                </div>
                <span className="blueprint-badge">{lang === 'es' ? 'Plano Interactivo & Recibos DTE' : 'Interactive Mapping & DTE'}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('arias-lang') || 'es');
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', project: 'erp' });
  const [bentoCluster, setBentoCluster] = useState('gathered');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bentoRef = useRef(null);
  const t = CONTENT[lang];

  useEffect(() => {
    localStorage.setItem('arias-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSelected(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Prevenir scroll del body cuando el menú móvil está abierto */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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

  /* Animación de unión y dispersión al hacer scroll / pasar sobre ellos */
  useEffect(() => {
    const handleScroll = () => {
      if (!bentoRef.current) return;
      const rect = bentoRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Al aproximarse antes de llegar (ligeramente separados)
      if (rect.top > vh * 0.75) {
        setBentoCluster('spread-in');
      } 
      // Cuando pasas sobre ellos / en foco en pantalla (se juntan todos)
      else if (rect.top <= vh * 0.75 && rect.bottom >= vh * 0.22) {
        setBentoCluster('gathered');
      } 
      // Cuando se va bajando la página (se separan hacia afuera)
      else {
        setBentoCluster('spread-out');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const projLabel = t.contact.projectOptions.find((p) => p.id === form.project)?.label || form.project;
    const body = `${t.contact.projectTypeLabel}: ${projLabel}\n${t.contact.name}: ${form.name}\n${t.contact.email}: ${form.email}\n${t.contact.company}: ${form.company}\n\n${t.contact.message}:\n${form.message}`;
    window.location.href = `mailto:${CONTACT.branchSV.email}?subject=${encodeURIComponent(t.contact.mailSubject)}&body=${encodeURIComponent(body)}`;
  };

  const modalProduct = selected ? t.products.items.find((p) => p.id === selected) : null;

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className={`nav${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="nav__inner">
          <a href="#inicio" className="nav__logo" aria-label="Arias Defense Components">
            <img src={logo} alt="Arias Defense Components" />
          </a>
          <nav className="nav__links" aria-label="Principal">
            <a href="#productos" className={activeSection === 'productos' ? 'is-active' : ''}>{t.nav.products}</a>
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
      </header>

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
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-layer-group text-crimson" aria-hidden="true"></i>
              <span>{t.nav.products}</span>
            </a>
            <a 
              href="#nosotros" 
              className={`mobile-nav__link${activeSection === 'nosotros' ? ' is-active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-shield-halved text-crimson" aria-hidden="true"></i>
              <span>{t.nav.why}</span>
            </a>
            <a 
              href="#testimonios" 
              className={`mobile-nav__link${activeSection === 'testimonios' ? ' is-active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-star text-crimson" aria-hidden="true"></i>
              <span>{t.nav.testimonials}</span>
            </a>
            <a 
              href="#contacto" 
              className={`mobile-nav__link${activeSection === 'contacto' ? ' is-active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-envelope text-crimson" aria-hidden="true"></i>
              <span>{t.nav.contact}</span>
            </a>
          </nav>

          <div className="mobile-nav__footer">
            <a 
              href="#contacto" 
              className="btn btn--primary btn--block mobile-nav__cta"
              onClick={() => setMobileMenuOpen(false)}
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
        {/* HERO AUDACIOSO DE ALTO IMPACTO (COMMAND CENTER & 3D STAGE) */}
        <section id="inicio" className="hero">
          <div className="hero__bg" aria-hidden="true">
            <span className="hero__grid"></span>
            <span className="hero__spotlight"></span>
            <span className="hero__blob hero__blob--red"></span>
            <span className="hero__blob hero__blob--gray"></span>
            <span className="hero__blob hero__blob--rose"></span>
          </div>
          
          <div className="container hero__inner">
            {/* Top Eyebrow Badge */}
            <div className="hero__badge">
              <span className="pulse-dot"></span>
              <span className="hero__badge-text">
                {lang === 'es' ? 'Homologación DTE v4 Oficial • Ministerio de Hacienda El Salvador' : 'Official DTE v4 Compliance • Ministry of Finance El Salvador'}
              </span>
              <span className="hero__badge-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right"></i></span>
            </div>

            {/* Main Headline */}
            <h1 className="hero__title">
              {t.hero.title}
              <span className="hero__highlight-wrapper">
                <span className="hero__highlight-text">{t.hero.highlight}</span>
                <span className="hero__highlight-glow"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero__subtitle">{t.hero.subtitle}</p>

            {/* CTA Buttons */}
            <div className="hero__actions">
              <a href="#contacto" className="btn btn--primary btn--hero">
                {t.hero.primary} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#productos" className="btn btn--outline btn--hero-sec">
                <i className="fa-solid fa-layer-group" aria-hidden="true"></i> {t.hero.secondary}
              </a>
            </div>

            {/* Trust Assurances */}
            <div className="hero__assurances">
              <span><i className="fa-solid fa-circle-check text-crimson" aria-hidden="true"></i> {lang === 'es' ? 'Puesta en marcha en 48h' : 'Live in 48 hours'}</span>
              <span><i className="fa-solid fa-circle-check text-crimson" aria-hidden="true"></i> {lang === 'es' ? 'Soporte local en San Salvador' : 'Local support in San Salvador'}</span>
              <span><i className="fa-solid fa-circle-check text-crimson" aria-hidden="true"></i> {lang === 'es' ? 'Sin contratos forzosos' : 'No lock-in contracts'}</span>
            </div>

            {/* 3D PERSPECTIVE COMMAND CENTER STAGE WITH FLOATING SATELLITES */}
            <div className="hero-stage">
              {/* Satellite 1: DTE Homologado */}
              <div className="hero-satellite hero-satellite--dte" aria-hidden="true">
                <div className="hero-satellite__icon hero-satellite__icon--green">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <strong>{lang === 'es' ? 'DTE 100% Homologado' : '100% Homologated DTE'}</strong>
                  <span>{lang === 'es' ? 'Sello oficial sub-segundo' : 'Sub-second official seal'}</span>
                </div>
              </div>

              {/* Satellite 2: Latencia & Firma */}
              <div className="hero-satellite hero-satellite--latency" aria-hidden="true">
                <div className="hero-satellite__icon hero-satellite__icon--amber">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div>
                  <strong>{lang === 'es' ? '< 800ms Latencia MH' : '< 800ms Tax Latency'}</strong>
                  <span>{lang === 'es' ? 'Firma Digital X.509' : 'X.509 Cryptographic Sign'}</span>
                </div>
              </div>

              {/* Satellite 3: Multi-Empresa */}
              <div className="hero-satellite hero-satellite--multi" aria-hidden="true">
                <div className="hero-satellite__icon hero-satellite__icon--red">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <div>
                  <strong>{lang === 'es' ? 'Multi-Empresa Centralizada' : 'Multi-Company Scale'}</strong>
                  <span>{lang === 'es' ? 'Hasta 40 razones sociales' : 'Up to 40 entities'}</span>
                </div>
              </div>

              {/* Central Mockup Window Frame */}
              <div className="hero-stage__window">
                <div className="hero-stage__bar">
                  <div className="hero-stage__dots">
                    <span className="dot dot--red"></span>
                    <span className="dot dot--yellow"></span>
                    <span className="dot dot--green"></span>
                  </div>
                  <div className="hero-stage__url">
                    <i className="fa-solid fa-lock text-crimson" aria-hidden="true"></i>
                    <span>app.ariasdefense.com // enterprise-suite-matrix</span>
                  </div>
                  <div className="hero-stage__status">
                    <span className="pulse-dot"></span>
                    <span>{lang === 'es' ? 'MH DTE: En Línea' : 'MH DTE: Online'}</span>
                  </div>
                </div>

                {/* Live Transmission Ticker */}
                <div className="hero-stage__ticker">
                  <span className="ticker-badge"><i className="fa-solid fa-arrows-rotate fa-spin" style={{ animationDuration: '3s' }} aria-hidden="true"></i> {lang === 'es' ? 'TRANSMISIÓN EN VIVO' : 'LIVE TRANSMISSION'}</span>
                  <span className="ticker-text">{lang === 'es' ? 'Último comprobante: CCF-03 • Firma X.509 validada • Sello de Recepción recibido en 0.42s' : 'Latest document: CCF-03 • X.509 verified • Reception seal confirmed in 0.42s'}</span>
                </div>

                {/* Dashboard Screenshot Preview */}
                <div className="hero-stage__screen">
                  <img src={erpImg} alt="Arias Enterprise Software Suite" className="hero-stage__img" />
                  <div className="hero-stage__screen-glare"></div>
                </div>
              </div>

              {/* Integrated Glass Stats Ribbon */}
              <div className="hero-stats-ribbon" role="region" aria-label="Estadísticas de impacto">
                {t.stats.map((s) => (
                  <div className="hero-stat-item" key={s.label}>
                    <div className="hero-stat-item__value">
                      <CountUp end={s.end} suffix={s.suffix} />
                    </div>
                    <div className="hero-stat-item__label">{s.label}</div>
                  </div>
                ))}
                <div className="hero-stat-item">
                  <div className="hero-stat-item__value">&lt; 800ms</div>
                  <div className="hero-stat-item__label">{lang === 'es' ? 'Respuesta Hacienda' : 'Tax API Response'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUESTROS PRODUCTOS - SHOWCASE EDITORIAL EN FILAS ALTERNADAS */}
        <section id="productos" className="section section--products">
          <div className="container">
            <div className="section__head">
              <span className="section__eyebrow">
                <i className="fa-solid fa-layer-group text-crimson" aria-hidden="true"></i> {lang === 'es' ? 'Suite de Software Empresarial' : 'Enterprise Software Suite'}
              </span>
              <h2>{t.products.title}</h2>
              <p>{t.products.subtitle}</p>
            </div>

            <div className="products-showcase">
              {t.products.items.map((p, idx) => (
                <ProductRow
                  key={p.id}
                  p={p}
                  idx={idx}
                  isEven={idx % 2 === 1}
                  url={PRODUCT_LINKS[p.id]}
                  img={PRODUCT_IMAGES[p.id]}
                  onSelect={setSelected}
                  lang={lang}
                  t={t}
                />
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ ARIAS - DISEÑO ARRIESGADO, ASIMÉTRICO Y DINÁMICO */}
        <section id="nosotros" className="section section--why">
          <div className="why__bg" aria-hidden="true">
            <span className="why__glow"></span>
          </div>
          <div className="container">
            <div className="section__head">
              <span className="section__eyebrow">
                <i className="fa-solid fa-shield-halved" aria-hidden="true"></i> {t.why.badge}
              </span>
              <h2>{t.why.title}</h2>
              <p>{t.why.subtitle}</p>
            </div>

            <div ref={bentoRef} className={`bento-why bento-why--${bentoCluster}`}>
              {t.why.items.map((item) => (
                <article className={`bento-card bento-card--${item.id}`} key={item.id}>
                  <div className="bento-card__header">
                    <div className="bento-card__badge-row">
                      <span className="bento-card__tag">{item.tag}</span>
                      <span className="bento-card__metric">{item.metric}</span>
                    </div>
                    <div className="bento-card__icon-halo">
                      <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="bento-card__body">
                    <h3 className="bento-card__title">{item.title}</h3>
                    <p className="bento-card__text">{item.text}</p>
                    
                    {/* Elementos interactivos/visuales distintivos por cada tarjeta */}
                    {item.id === 'dte' && (
                      <div className="bento-mini-terminal" aria-label="Simulación validación DTE">
                        <div className="bento-mini-terminal__bar">
                          <span className="dot dot--red"></span>
                          <span className="dot dot--yellow"></span>
                          <span className="dot dot--green"></span>
                          <span className="bento-mini-terminal__title">MH_DTE_ENGINE // v4.0</span>
                        </div>
                        <div className="bento-mini-terminal__code">
                          <code><span className="tok-kwd">TRANSMIT</span> DTE-03 (CCF) ➔ <span className="tok-fn">SignX509()</span></code>
                          <code><span className="tok-str">SELLO_MH:</span> 2026DTE-SV-89A42F0 <span className="tok-ok">✓ 420ms</span></code>
                        </div>
                      </div>
                    )}

                    {item.id === 'support' && (
                      <div className="bento-support-pill">
                        <div className="bento-support-pill__avatars">
                          <span className="avatar avatar--sv">SV</span>
                          <span className="avatar avatar--eng"><i className="fa-solid fa-code"></i></span>
                        </div>
                        <div className="bento-support-pill__text">
                          <strong>{lang === 'es' ? 'Ingenieros Reales en Directo' : 'Direct Dedicated Engineers'}</strong>
                          <span>{lang === 'es' ? 'WhatsApp & Llamada • Sin tickets' : 'WhatsApp & Phone • No ticketing queues'}</span>
                        </div>
                      </div>
                    )}

                    {item.id === 'cloud' && (
                      <div className="bento-cloud-widget">
                        <div className="bento-uptime-bar">
                          <div className="bento-uptime-bar__header">
                            <span><i className="fa-brands fa-aws text-crimson" aria-hidden="true"></i> {lang === 'es' ? 'Clúster Cloud AWS' : 'AWS Cloud Cluster'}</span>
                            <span className="text-emerald font-bold">100% OPERATIVO</span>
                          </div>
                          <div className="bento-uptime-bar__track">
                            <div className="bento-uptime-bar__fill"></div>
                          </div>
                          <span className="bento-uptime-bar__note">{lang === 'es' ? '99.98% SLA garantizado • Respaldos continuos' : '99.98% SLA guaranteed • Continuous backups'}</span>
                        </div>
                      </div>
                    )}

                    {item.id === 'multicompany' && (
                      <div className="bento-multicompany-preview">
                        <div className="bento-screen-frame">
                          <div className="bento-screen-bar">
                            <div className="bento-screen-dots">
                              <span className="dot dot--red"></span>
                              <span className="dot dot--yellow"></span>
                              <span className="dot dot--green"></span>
                            </div>
                            <span className="bento-screen-title">
                              <i className="fa-solid fa-lock" aria-hidden="true"></i> ariasfintech.com // panel-multi-empresa
                            </span>
                            <span className="bento-screen-badge">40 Razones Conectadas</span>
                          </div>
                          <div className="bento-screen-img-wrap">
                            <img src={erpImg} alt="Multi-Empresa Centralizada ERP Arias" className="bento-screen-img" />
                            <div className="bento-screen-overlay">
                              <span className="bento-screen-pill">
                                <i className="fa-solid fa-arrows-rotate fa-spin" style={{ animationDuration: '4s' }} aria-hidden="true"></i> Conmutación instantánea
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bento-switcher-preview">
                          <span className="switcher-chip switcher-chip--active">
                            <i className="fa-solid fa-building-circle-check" aria-hidden="true"></i> Holding Central S.A.
                          </span>
                          <span className="switcher-chip">Distribuidora SV</span>
                          <span className="switcher-chip">+38 más</span>
                        </div>
                      </div>
                    )}

                    <ul className="bento-card__chips">
                      {item.detailItems.map((chip, cIdx) => (
                        <li key={cIdx}>{chip}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS - INFINITE MARQUEE CAROUSEL */}
        <section id="testimonios" className="section section--testimonials">
          <div className="container">
            <div className="section__head">
              <span className="section__eyebrow">
                <i className="fa-solid fa-star text-crimson" aria-hidden="true"></i> {lang === 'es' ? 'Casos de Éxito' : 'Success Stories'}
              </span>
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
        <section id="contacto" className="section section--contact">
          <div className="container contact">
            <div className="contact__info">
              <span className="section__eyebrow">
                <i className="fa-solid fa-headset" aria-hidden="true"></i> {t.contact.badge}
              </span>
              <h2>{t.contact.title}</h2>
              <p className="contact__lead">{t.contact.subtitle}</p>

              {/* Puntos clave concisos */}
              <ul className="contact__bullets">
                {t.contact.trustPoints.map((tp, idx) => (
                  <li key={idx} className="contact__bullet">
                    <span className="contact__bullet-icon">
                      <i className={`fa-solid ${tp.icon}`} aria-hidden="true"></i>
                    </span>
                    <span>{tp.text}</span>
                  </li>
                ))}
              </ul>

              {/* Canales directos de contacto compactos */}
              <div className="contact__direct">
                <div className="contact__direct-card">
                  <div className="contact__direct-head">
                    <i className="fa-solid fa-headset text-crimson" aria-hidden="true"></i>
                    <strong>{lang === 'es' ? 'Atención comercial directa' : 'Direct advisory'}</strong>
                  </div>
                  <div className="contact__direct-grid">
                    <a href={CONTACT.branchSV.phoneHref} className="contact__channel">
                      <i className="fa-solid fa-phone" aria-hidden="true"></i>
                      <span><strong>SV:</strong> {CONTACT.branchSV.phone}</span>
                    </a>
                    <a href={CONTACT.headquarters.phoneHref} className="contact__channel">
                      <i className="fa-solid fa-phone" aria-hidden="true"></i>
                      <span><strong>USA:</strong> {CONTACT.headquarters.phone}</span>
                    </a>
                    <a href={`mailto:${CONTACT.branchSV.email}`} className="contact__channel">
                      <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                      <span>{CONTACT.branchSV.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="contact__form-wrap">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <label className="form__label">
                    {t.contact.projectTypeLabel}
                  </label>
                  <div className="project-pills" role="radiogroup" aria-label={t.contact.projectTypeLabel}>
                    {t.contact.projectOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`project-pill${form.project === opt.id ? ' is-active' : ''}`}
                        onClick={() => setForm({ ...form, project: opt.id })}
                        role="radio"
                        aria-checked={form.project === opt.id}
                      >
                        <i className={`fa-solid ${opt.icon}`} aria-hidden="true"></i>
                        <span>{opt.label.split(' (')[0]}</span>
                      </button>
                    ))}
                  </div>
                  <select
                    name="project"
                    className="form__select"
                    value={form.project}
                    onChange={handleChange}
                    aria-label={t.contact.projectTypeLabel}
                  >
                    {t.contact.projectOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>{opt.label}</option>
                    ))}
                  </select>
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

                <button type="submit" className="btn btn--primary btn--submit">
                  <span>{t.contact.send}</span>
                  <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                </button>

                <p className="form__security-note">
                  <i className="fa-solid fa-lock" aria-hidden="true"></i> {t.contact.secureNote}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
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

        <div className="container footer__bottom">
          <div className="footer__bottom-left">
            © {new Date().getFullYear()} Arias Defense Components. {t.footer.rights}
          </div>
          <div className="footer__bottom-right">
            {t.footer.legal.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && <span className="footer__sep" aria-hidden="true">•</span>}
                <a href="#contacto">{item}</a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      {modalProduct && (
        <div className="modal" onClick={() => setSelected(null)} role="presentation">
          <div className="modal__card" role="dialog" aria-modal="true" aria-label={modalProduct.name} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal__close" onClick={() => setSelected(null)} aria-label={t.products.close}>&times;</button>
            <div className="card__icon"><i className={`fa-solid ${modalProduct.icon}`} aria-hidden="true"></i></div>
            <h3>{modalProduct.name}</h3>
            <p>{modalProduct.short}</p>
            <ul className="modal__list">
              {modalProduct.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            {PRODUCT_LINKS[modalProduct.id] ? (
              <a href={PRODUCT_LINKS[modalProduct.id]} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                {t.products.open} {modalProduct.name} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              </a>
            ) : (
              <span className="badge">{t.products.soon}</span>
            )}
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
