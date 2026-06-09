import { useTranslation } from 'react-i18next';
import './CTA.css';

function CTA() {
  const { t } = useTranslation();

  return (
    <section className="cta-section" id="contacto">
      <div className="cta-section__glow" />
      <div className="container cta-section__inner">
        <div className="section__eyebrow section__eyebrow">{t('cta.label')}</div>
        <h2 className="cta-section__title">
          {t('cta.title_1')}<br />
          <span className="cta-section__title-accent">{t('cta.title_2')}</span>
        </h2>
        <p className="cta-section__desc">{t('cta.subtitle')}</p>

        <div className="cta-section__actions">
          <a href="mailto:info@ariasdefense.com" className="btn btn--primary btn--lg">
            {t('cta.cta_primary')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="tel:+50379718911" className="btn btn--outline btn--lg">
            {t('cta.cta_secondary')}
          </a>
        </div>

        <div className="cta-section__trust">
          {[
            { icon: '✓', text: t('cta.trust_1') },
            { icon: '⚡', text: t('cta.trust_2') },
            { icon: '◎', text: t('cta.trust_3') },
          ].map((item, i) => (
            <div key={i} className="cta-trust-item">
              <span className="cta-trust-icon">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CTA;
