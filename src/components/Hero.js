import { useTranslation } from 'react-i18next';
import './Hero.css';

const BARS = [38, 55, 48, 70, 62, 85, 74];
const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'];

const INVOICES = [
  { id: 'FAC-0291', client: 'Distribuidora ABC', amount: '$4,200', status: 'Pagada',   color: 'green' },
  { id: 'FAC-0292', client: 'Tecnologías XYZ',   amount: '$7,850', status: 'Pendiente', color: 'yellow' },
  { id: 'FAC-0293', client: 'Comercial DEF',      amount: '$2,340', status: 'Pagada',   color: 'green' },
];

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-bg" />

      <div className="container hero__inner">

        {/* ---- Content ---- */}
        <div className="hero__content">
          <div className="section__eyebrow">{t('hero.tag')}</div>

          <h1 className="hero__title">
            {t('hero.title_1')}<br />
            <em>{t('hero.title_2')}</em>
          </h1>

          <p className="hero__desc">{t('hero.subtitle')}</p>

          <div className="hero__actions">
            <a href="#ecosistema" className="btn btn--primary btn--lg">
              {t('hero.cta_primary')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contacto" className="btn btn--outline btn--lg">
              {t('hero.cta_secondary')}
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">500<sup>+</sup></span>
              <span className="hero__stat-label">{t('hero.stat_1_label')}</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">10<sup>+</sup></span>
              <span className="hero__stat-label">{t('hero.stat_2_label')}</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">99<sup>%</sup></span>
              <span className="hero__stat-label">{t('hero.stat_3_label')}</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">24/7</span>
              <span className="hero__stat-label">{t('hero.stat_4_label')}</span>
            </div>
          </div>
        </div>

        {/* ---- Visual mockup ---- */}
        <div className="hero__visual">
          <div className="hero__mockup">

            {/* Window bar */}
            <div className="mockup__bar">
              <div className="mockup__dots">
                <span className="m-dot m-dot--red" />
                <span className="m-dot m-dot--yellow" />
                <span className="m-dot m-dot--green" />
              </div>
              <span className="mockup__window-title">Panel Principal — Arias Defense</span>
              <span className="mockup__live">
                <span className="mockup__live-dot" />
                En vivo
              </span>
            </div>

            {/* KPI row */}
            <div className="mockup__kpis">
              <div className="mockup__kpi">
                <p className="mockup__kpi-label">Facturas emitidas</p>
                <p className="mockup__kpi-val mockup__kpi-val--cyan">$124,530</p>
                <p className="mockup__kpi-change">↑ 12% este mes</p>
              </div>
              <div className="mockup__kpi">
                <p className="mockup__kpi-label">Por cobrar</p>
                <p className="mockup__kpi-val">$38,200</p>
                <p className="mockup__kpi-change">↑ 4% este mes</p>
              </div>
              <div className="mockup__kpi">
                <p className="mockup__kpi-label">Clientes CRM</p>
                <p className="mockup__kpi-val">847</p>
                <p className="mockup__kpi-change">↑ 23 nuevos</p>
              </div>
            </div>

            {/* Chart */}
            <div className="mockup__chart-wrap">
              <p className="mockup__chart-title">Facturación mensual</p>
              <div className="mockup__chart">
                {BARS.map((h, i) => (
                  <div key={i} className="mockup__bar-col">
                    <div
                      className={`mockup__bar${i === BARS.length - 2 ? ' mockup__bar--active' : ''}`}
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mockup__months">
                {MONTHS.map(m => <span key={m}>{m}</span>)}
              </div>
            </div>

            {/* Invoice list */}
            <div className="mockup__list">
              {INVOICES.map(inv => (
                <div key={inv.id} className="mockup__list-row">
                  <div className="mockup__list-icon">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <rect x="1.5" y="0.5" width="10" height="12" rx="1.5" stroke="#06B6D4" strokeWidth="1.2"/>
                      <path d="M3.5 4.5h6M3.5 7h6M3.5 9.5h3.5" stroke="#06B6D4" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="mockup__list-info">
                    <p className="mockup__list-id">{inv.id}</p>
                    <p className="mockup__list-client">{inv.client}</p>
                  </div>
                  <div className="mockup__list-meta">
                    <span className="mockup__list-amount">{inv.amount}</span>
                    <span className={`mockup__badge mockup__badge--${inv.color}`}>{inv.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__float hero__float--tl">
            <div className="hero__float-icon hero__float-icon--cyan">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 1L13.5 4V8C13.5 11.314 10.866 14 7.5 15C4.134 14 1.5 11.314 1.5 8V4L7.5 1Z" fill="rgba(6,182,212,0.2)" stroke="#06B6D4" strokeWidth="1.1"/>
                <path d="M5 7.5l2 2 3.5-3.5" stroke="#06B6D4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="hero__float-title">Cumplimiento fiscal</p>
              <p className="hero__float-sub">Normativa actualizada</p>
            </div>
          </div>

          <div className="hero__float hero__float--br">
            <div className="hero__float-icon hero__float-icon--green">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6" stroke="#10B981" strokeWidth="1.2"/>
                <path d="M7.5 4.5v3.5l2 1.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="hero__float-title">Procesadas hoy</p>
              <p className="hero__float-sub">142 facturas</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
