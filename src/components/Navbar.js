import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const LANGS = ['ES', 'EN', 'DE', 'FR'];

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 2L28 8V16C28 22.627 22.627 28.5 16 30C9.373 28.5 4 22.627 4 16V8L16 2Z" fill="#06B6D4" fillOpacity="0.15" stroke="#06B6D4" strokeWidth="1.2"/>
    <path d="M16 2L28 8V16C28 22.627 22.627 28.5 16 30C9.373 28.5 4 22.627 4 16V8L16 2Z" fill="url(#shieldGrad)"/>
    <path d="M11 16l3.5 3.5L21 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="shieldGrad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#0891B2" stopOpacity="0.7"/>
      </linearGradient>
    </defs>
  </svg>
);

function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [langOpen, setLangOpen]   = useState(false);
  const activeLang = i18n.language.toUpperCase().slice(0, 2);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const changeLang = (code) => {
    i18n.changeLanguage(code.toLowerCase());
    setLangOpen(false);
  };

  const NAV_LINKS = [
    { key: 'nav.inicio',     href: '#inicio' },
    { key: 'nav.servicios',  href: '#servicios' },
    { key: 'nav.ecosistema', href: '#ecosistema' },
    { key: 'nav.nosotros',   href: '#nosotros' },
    { key: 'nav.contacto',   href: '#contacto' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* Logo */}
        <a href="#inicio" className="navbar__logo">
          <ShieldIcon />
          <div className="navbar__logo-text">
            <span className="navbar__brand">ARIAS</span>
            <span className="navbar__tagline">DEFENSE</span>
          </div>
        </a>

        {/* Nav links */}
        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {t(link.key)}
              </a>
            </li>
          ))}
          <li className="navbar__mobile-cta">
            <a href="#contacto" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
              {t('nav.cta')}
            </a>
          </li>
        </ul>

        {/* Right: lang + CTA */}
        <div className="navbar__actions">
          {/* Language selector */}
          <div className="lang-selector">
            <button
              className="lang-selector__btn"
              onClick={() => setLangOpen(v => !v)}
              aria-label="Select language"
            >
              {activeLang}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {langOpen && (
              <ul className="lang-selector__dropdown">
                {LANGS.map(code => (
                  <li key={code}>
                    <button
                      className={`lang-selector__option${activeLang === code ? ' active' : ''}`}
                      onClick={() => changeLang(code)}
                    >
                      {code}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="#contacto" className="navbar__cta btn btn--outline-nav">
            {t('nav.cta')}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
