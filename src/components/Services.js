import { useTranslation } from 'react-i18next';
import './Services.css';

const ICONS = [
  /* AI */
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  /* Cybersecurity */
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L20 6V12C20 16.418 16.418 20.5 12 22C7.582 20.5 4 16.418 4 12V6L12 2Z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  /* Cloud */
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 10h-1.26A8 8 0 103 16H18a4 4 0 000-8v2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M12 17v4M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  /* Full-Stack */
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  /* Consulting */
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 3h18M3 9h14M3 15h10M3 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="19" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M19 16v2.5l1.5 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>,
  /* Billing */
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="2" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M6 7h8M6 11h8M6 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 14l2.5 2.5L22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5 7v9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
];

const COLORS = ['cyan', 'red', 'blue', 'purple', 'orange', 'green'];

function Services() {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true });

  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section__header section__header--center">
          <div className="section__eyebrow">{t('services.label')}</div>
          <h2 className="section__title">{t('services.title')}</h2>
          <p className="section__subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="services__grid">
          {items.map((s, i) => (
            <div key={i} className={`service-card service-card--${COLORS[i]}`}>
              <div className="service-card__icon">{ICONS[i]}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__link">
                {t('services.link')}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
