import { useTranslation } from 'react-i18next';
import './About.css';

const FEATURE_ICONS = [
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1L14 4V8C14 11.314 11.314 14 8 15C4.686 14 2 11.314 2 8V4L8 1Z" stroke="#06B6D4" strokeWidth="1.2" fill="rgba(6,182,212,0.08)"/>
    <path d="M5 8l2 2 4-4" stroke="#06B6D4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="#10B981" strokeWidth="1.2"/>
    <path d="M8 4.5v4l2 1.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>,
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 8h12M8 2v12" stroke="#8B5CF6" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="8" cy="8" r="6.5" stroke="#8B5CF6" strokeWidth="1.2"/>
  </svg>,
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8l2 2 3-5 3 3 2-2" stroke="#F59E0B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

function About() {
  const { t } = useTranslation();
  const features = t('about.features', { returnObjects: true });

  return (
    <section className="section section--deep" id="nosotros">
      <div className="container about__inner">

        <div className="about__content">
          <div className="section__eyebrow">{t('about.label')}</div>
          <h2 className="section__title">
            {t('about.title_1')}<br />
            <span className="about__title-accent">{t('about.title_2')}</span>
          </h2>
          <p className="section__subtitle" style={{ marginBottom: '40px' }}>
            {t('about.subtitle')}
          </p>

          <div className="about__features">
            {features.map((f, i) => (
              <div key={i} className="about__feature">
                <div className="about__feature-icon">{FEATURE_ICONS[i]}</div>
                <div>
                  <p className="about__feature-title">{f.title}</p>
                  <p className="about__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contacto" className="btn btn--primary" style={{ marginTop: '40px' }}>
            {t('about.cta')}
          </a>
        </div>

        <div className="about__visual">
          <div className="about__card about__card--main">
            <div className="about__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L22 7V13C22 18.523 17.523 23.5 12 25C6.477 23.5 2 18.523 2 13V7L12 2Z" fill="rgba(6,182,212,0.12)" stroke="#06B6D4" strokeWidth="1.4"/>
                <path d="M8 13l3 3 5-6" stroke="#06B6D4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="about__card-value">500+</p>
            <p className="about__card-label">Empresas confían en Arias Defense</p>
            <div className="about__card-bar">
              <div className="about__card-bar-fill" />
            </div>
            <p className="about__card-sub">↑ 23% crecimiento año a año</p>
          </div>

          <div className="about__card about__card--secondary">
            <div className="about__card-row">
              <div className="about__avatar about__avatar--1">MG</div>
              <div className="about__avatar about__avatar--2">CR</div>
              <div className="about__avatar about__avatar--3">AM</div>
              <span className="about__avatar-more">+497</span>
            </div>
            <p className="about__card-label" style={{ marginTop: '14px' }}>
              Empresas activas este mes
            </p>
            <div className="about__stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
                  <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.6.6-3.6L1.8 4.8l3.6-.5L7 1z"/>
                </svg>
              ))}
              <span className="about__rating">4.9/5</span>
            </div>
          </div>

          <div className="about__card about__card--accent">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="9" stroke="rgba(6,182,212,0.4)" strokeWidth="1.4" fill="rgba(6,182,212,0.06)"/>
              <path d="M11 7v4.5l2.5 2" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="about__card-label" style={{ marginTop: '10px' }}>Tiempo promedio de implementación</p>
            <p className="about__card-value about__card-value--cyan">72 hrs</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
