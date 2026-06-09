import { useTranslation } from 'react-i18next';
import logoimagen from '../images/logocompleto.png';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  const EMPRESA_LINKS = [
    t('footer.link_nosotros'), t('footer.link_servicios'),
    t('footer.link_clientes'), t('footer.link_blog'), t('footer.link_contacto'),
  ];
  const SOL_LINKS = [
    t('footer.link_facturacion'), t('footer.link_crm'),
    t('footer.link_cobrar'), t('footer.link_contabilidad'), t('footer.link_declaraciones'),
  ];
  const SUP_LINKS = [
    t('footer.link_docs'), t('footer.link_ayuda'),
    t('footer.link_estado'), t('footer.link_actualizaciones'),
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <img src={logoimagen} alt="Arias Defense" className="footer__logo-img" />
          </a>
          <p className="footer__tagline">{t('footer.tagline')}</p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/AriasDefense" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M16 8.05C16 3.603 12.418 0 8 0S0 3.603 0 8.05c0 4.017 2.926 7.345 6.75 7.95V10.37H4.719V8.05H6.75V6.276c0-2.017 1.195-3.13 3.022-3.13.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.256V8.05h2.219l-.355 2.32H9.25V16c3.824-.605 6.75-3.933 6.75-7.95z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ariasdefense/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C5.83 0 5.555.01 4.698.048 3.843.087 3.258.222 2.75.42a3.9 3.9 0 00-1.407.915A3.9 3.9 0 00.42 2.75C.222 3.258.087 3.843.048 4.698.01 5.555 0 5.83 0 8s.01 2.445.048 3.302c.039.855.174 1.44.373 1.948a3.9 3.9 0 00.915 1.407 3.9 3.9 0 001.407.915c.508.199 1.093.334 1.948.373C5.555 15.99 5.83 16 8 16s2.445-.01 3.302-.048c.855-.039 1.44-.174 1.948-.373a3.9 3.9 0 001.407-.915 3.9 3.9 0 00.915-1.407c.199-.508.334-1.093.373-1.948C15.99 10.445 16 10.17 16 8s-.01-2.445-.048-3.302c-.039-.855-.174-1.44-.373-1.948a3.9 3.9 0 00-.915-1.407A3.9 3.9 0 0013.25.42C12.742.222 12.157.087 11.302.048 10.445.01 10.17 0 8 0zm0 1.44c2.136 0 2.39.009 3.233.046.78.036 1.203.166 1.485.275.374.146.64.319.92.598.28.28.452.546.598.92.109.282.24.705.275 1.485.037.844.047 1.097.047 3.233s-.01 2.39-.047 3.233c-.036.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.598.92 2.47 2.47 0 01-.92.598c-.282.109-.705.24-1.485.275C10.39 14.551 10.136 14.56 8 14.56s-2.39-.009-3.233-.046c-.78-.036-1.203-.166-1.485-.275a2.47 2.47 0 01-.92-.598 2.47 2.47 0 01-.598-.92c-.109-.282-.24-.705-.275-1.485C1.449 10.39 1.44 10.136 1.44 8s.009-2.39.046-3.233c.036-.78.166-1.203.275-1.485.146-.374.319-.64.598-.92.28-.28.546-.452.92-.598.282-.109.705-.24 1.485-.275C5.61 1.449 5.864 1.44 8 1.44zm0 2.452a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.775a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm5.23-6.937a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@ariasdefensecomponents" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="YouTube">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.051 2h.09c.822.003 4.987.033 6.11.334a2.01 2.01 0 011.415 1.42c.1.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <p className="footer__col-heading">{t('footer.empresa')}</p>
          <ul className="footer__col-links">
            {EMPRESA_LINKS.map(link => <li key={link}><a href="#">{link}</a></li>)}
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__col-heading">{t('footer.soluciones')}</p>
          <ul className="footer__col-links">
            {SOL_LINKS.map(link => <li key={link}><a href="#">{link}</a></li>)}
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__col-heading">{t('footer.soporte')}</p>
          <ul className="footer__col-links">
            {SUP_LINKS.map(link => <li key={link}><a href="#">{link}</a></li>)}
          </ul>
        </div>

        <div className="footer__col footer__col--contact">
          <p className="footer__col-heading">{t('footer.contacto')}</p>
          <div className="footer__contact-items">
            <div className="footer__contact-item">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1C4.57 1 3 2.57 3 4.5c0 3.25 3.5 7.5 3.5 7.5S10 7.75 10 4.5C10 2.57 8.43 1 6.5 1z" stroke="rgba(255,255,255,0.3)" strokeWidth="1.1"/>
                <circle cx="6.5" cy="4.5" r="1.3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.1"/>
              </svg>
              <span>Calle la Mascota, Edif. 533, Col. San Benito, San Salvador, El Salvador</span>
            </div>
            <div className="footer__contact-item">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="1" y="2.5" width="11" height="8" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.1"/>
                <path d="M1 4l5.5 3.5L12 4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
              <a href="mailto:info@ariasdefense.com">info@ariasdefense.com</a>
            </div>
            <div className="footer__contact-item">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 2.5a.8.8 0 01.8-.8H4.3a.4.4 0 01.4.32l.6 2.7a.4.4 0 01-.22.44l-1.1.55a7 7 0 003.16 3.16l.55-1.1a.4.4 0 01.44-.22l2.7.6a.4.4 0 01.32.4V10a.8.8 0 01-.8.8C4.6 10.8 2 5.8 2 2.5z" stroke="rgba(255,255,255,0.3)" strokeWidth="1.1"/>
              </svg>
              <a href="tel:+50379718911">(503) 7971-8911</a>
            </div>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Arias Defense. {t('footer.copyright')}</p>
          <div className="footer__bottom-links">
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
