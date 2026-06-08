import { useTranslation } from 'react-i18next';
import './Footer.css';

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 2L25 7.5V14C25 20.075 20.075 25.5 14 27C7.925 25.5 3 20.075 3 14V7.5L14 2Z" fill="rgba(6,182,212,0.12)" stroke="#06B6D4" strokeWidth="1.2"/>
    <path d="M9.5 14l3 3 6-7" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
            <ShieldIcon />
            <div className="footer__logo-text">
              <span className="footer__brand-name">ARIAS</span>
              <span className="footer__brand-tag">DEFENSE</span>
            </div>
          </a>
          <p className="footer__tagline">{t('footer.tagline')}</p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.5 2h-11A.5.5 0 002 2.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11A.5.5 0 0013.5 2zM5.5 12.5H3.5v-6h2v6zM4.5 5.5a1 1 0 110-2 1 1 0 010 2zM12.5 12.5h-2V9.75c0-.75-.015-1.714-1.044-1.714-1.046 0-1.206.817-1.206 1.66v2.804h-2v-6h1.92v.82h.027c.267-.506.92-1.04 1.893-1.04 2.025 0 2.4 1.333 2.4 3.067v3.153z"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="X / Twitter">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12.6 2h2.3L9.9 7.6 15.6 14H11l-3.5-4.6L3.4 14H1.1l5.4-6-5.1-6H6l3.2 4.2L12.6 2zm-.8 10.8h1.3L4.2 3.3H2.8l9 9.5z"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M16 8.05C16 3.603 12.418 0 8 0S0 3.603 0 8.05c0 4.017 2.926 7.345 6.75 7.95V10.37H4.719V8.05H6.75V6.276c0-2.017 1.195-3.13 3.022-3.13.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.256V8.05h2.219l-.355 2.32H9.25V16c3.824-.605 6.75-3.933 6.75-7.95z"/>
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
              <span>San José, Costa Rica</span>
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
              <a href="tel:+50622220000">+506 2222-0000</a>
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
