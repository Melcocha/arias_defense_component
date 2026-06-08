import { useTranslation } from 'react-i18next';
import './Stats.css';

function Stats() {
  const { t } = useTranslation();
  const items = t('stats.items', { returnObjects: true });

  return (
    <section className="stats-section section--alt" id="estadisticas">
      <div className="container stats__inner">
        <div className="stats__left">
          <div className="section__eyebrow">{t('stats.label')}</div>
          <h2 className="section__title">
            {t('stats.title_1')}<br />
            <span className="stats__title-accent">{t('stats.title_2')}</span>
          </h2>
          <p className="section__subtitle">{t('stats.subtitle')}</p>
        </div>

        <div className="stats__grid">
          {items.map((s, i) => (
            <div key={i} className="stat-card">
              <p className="stat-card__value">{s.value}</p>
              <p className="stat-card__label">{s.label}</p>
              <p className="stat-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
