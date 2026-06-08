import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const COLORS = ['#DC2626', '#06B6D4', '#8B5CF6'];

function Testimonials() {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true });

  return (
    <section className="section" id="opiniones">
      <div className="container">
        <div className="section__header section__header--center">
          <div className="section__eyebrow">{t('testimonials.label')}</div>
          <h2 className="section__title">{t('testimonials.title')}</h2>
          <p className="section__subtitle">{t('testimonials.subtitle')}</p>
        </div>

        <div className="testimonials__grid">
          {items.map((item, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
                    <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.6.6-3.6L1.8 4.8l3.6-.5L7 1z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="testimonial-card__quote">
                "{item.quote}"
              </blockquote>

              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" style={{ background: COLORS[i] }}>
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="testimonial-card__name">{item.name}</p>
                  <p className="testimonial-card__role">
                    {item.role} · <span>{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
