import { useTranslation } from 'react-i18next';
import './Ecosystem.css';

function Ecosystem() {
  const { t } = useTranslation();

  return (
    <section className="section section--deep" id="ecosistema">
      <div className="container">
        <div className="section__header section__header--center">
          <div className="section__eyebrow">{t('ecosystem.label')}</div>
          <h2 className="section__title">{t('ecosystem.title')}</h2>
          <p className="section__subtitle">{t('ecosystem.subtitle')}</p>
        </div>

        <div className="eco__grid">

          {/* ERP — tall left card */}
          <div className="eco-card eco-card--erp">
            <div className="eco-card__header">
              <div className="eco-card__badge eco-card__badge--green">
                <span className="eco-card__badge-dot" />
                {t('ecosystem.erp_badge')}
              </div>
              <div className="eco-card__icon eco-card__icon--green">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="13" rx="2" stroke="#10B981" strokeWidth="1.4"/>
                  <path d="M2 8h16" stroke="#10B981" strokeWidth="1.3"/>
                  <path d="M6 12h3M11 12h3M6 15h2" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <h3 className="eco-card__title">{t('ecosystem.erp_title')}</h3>
            <p className="eco-card__desc">{t('ecosystem.erp_desc')}</p>

            {/* Mini chart visual */}
            <div className="eco-card__visual eco-card__visual--chart">
              <div className="mini-chart">
                {[40, 65, 52, 78, 60, 90, 75, 85].map((h, i) => (
                  <div key={i} className="mini-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="mini-chart-label">Revenue Analytics</div>
            </div>

            <a href="#contacto" className="eco-card__cta">
              {t('ecosystem.erp_cta')}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H6M11 2v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* CRM — wide top right */}
          <div className="eco-card eco-card--crm">
            <div className="eco-card__header">
              <div className="eco-card__badge eco-card__badge--blue">
                <span className="eco-card__badge-dot" />
                {t('ecosystem.crm_badge')}
              </div>
              <div className="eco-card__icon eco-card__icon--blue">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="6" r="3" stroke="#3B82F6" strokeWidth="1.4"/>
                  <circle cx="4"  cy="14" r="2" stroke="#3B82F6" strokeWidth="1.3"/>
                  <circle cx="16" cy="14" r="2" stroke="#3B82F6" strokeWidth="1.3"/>
                  <path d="M7 12c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5" stroke="#3B82F6" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <h3 className="eco-card__title">{t('ecosystem.crm_title')}</h3>
            <p className="eco-card__desc">{t('ecosystem.crm_desc')}</p>

            {/* Pipeline visual */}
            <div className="eco-card__visual eco-card__visual--pipeline">
              {[
                { label: 'Leads',    pct: 100, count: '124' },
                { label: 'Contacto', pct: 72,  count: '89'  },
                { label: 'Demo',     pct: 44,  count: '55'  },
                { label: 'Cierre',   pct: 22,  count: '27'  },
              ].map(stage => (
                <div key={stage.label} className="pipeline-stage">
                  <div className="pipeline-bar" style={{ width: `${stage.pct}%` }} />
                  <span className="pipeline-label">{stage.label}</span>
                  <span className="pipeline-count">{stage.count}</span>
                </div>
              ))}
            </div>

            <a href="#contacto" className="eco-card__cta">
              {t('ecosystem.crm_cta')}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H6M11 2v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* RTMS — bottom middle */}
          <div className="eco-card eco-card--rtms">
            <div className="eco-card__header">
              <div className="eco-card__badge eco-card__badge--cyan">
                <span className="eco-card__badge-dot" />
                {t('ecosystem.rtms_badge')}
              </div>
            </div>
            <h3 className="eco-card__title">{t('ecosystem.rtms_title')}</h3>
            <p className="eco-card__sub">{t('ecosystem.rtms_sub')}</p>
            <p className="eco-card__desc">{t('ecosystem.rtms_desc')}</p>

            {/* Live metrics */}
            <div className="eco-card__metrics">
              <div className="metric">
                <span className="metric__value metric__value--cyan">0.8ms</span>
                <span className="metric__label">Latencia</span>
              </div>
              <div className="metric">
                <span className="metric__value">99.99%</span>
                <span className="metric__label">Uptime</span>
              </div>
              <div className="metric">
                <span className="metric__value metric__value--green">4.2K</span>
                <span className="metric__label">Req/seg</span>
              </div>
            </div>

            <a href="#contacto" className="eco-card__cta">
              {t('ecosystem.rtms_cta')}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H6M11 2v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Arias Defense — bottom right (brand card) */}
          <div className="eco-card eco-card--arias">
            <div className="eco-card__shield">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 2L32 9V18C32 25.18 25.73 31.8 18 34C10.27 31.8 4 25.18 4 18V9L18 2Z" fill="rgba(220,38,38,0.12)" stroke="#DC2626" strokeWidth="1.3"/>
                <path d="M12 18l4 4 8-9" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="eco-card__badge eco-card__badge--red" style={{ marginTop: '14px' }}>
              <span className="eco-card__badge-dot" />
              {t('ecosystem.ad_badge')}
            </div>
            <h3 className="eco-card__title" style={{ marginTop: '10px' }}>{t('ecosystem.ad_title')}</h3>
            <p className="eco-card__desc">{t('ecosystem.ad_desc')}</p>
            <a href="#contacto" className="eco-card__cta eco-card__cta--red">
              {t('ecosystem.ad_cta')}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H6M11 2v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
