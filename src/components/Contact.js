import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY || '';

function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'erp', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Arias Defense] ${form.topic === 'erp' ? t('contact.topic_erp') : t('contact.topic_other')} — ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone || t('contact.not_provided'),
          message: form.message,
          botcheck: '',
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="contact section section--deep" id="formulario">
        <div className="contact__glow" />
        <div className="container contact__success">
          <div className="contact__success-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="var(--cyan)" strokeWidth="1.5" />
              <path d="M9 16.5l4.5 4.5 9-9" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="contact__success-title">{t('contact.success_title')}</h3>
          <p className="contact__success-desc">{t('contact.success_desc')}</p>
          <button className="btn btn--ghost" onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', topic: 'erp', message: '' }); }}>
            {t('contact.send_another')}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact section section--deep" id="formulario">
      <div className="contact__glow" />
      <div className="container contact__inner">

        <div className="contact__info">
          <div className="section__eyebrow section__eyebrow--red">{t('contact.label')}</div>
          <h2 className="section__title">
            {t('contact.title_1')}{' '}
            <span className="contact__title-accent">{t('contact.title_2')}</span>
          </h2>
          <p className="section__subtitle">{t('contact.subtitle')}</p>

          <ul className="contact__benefits">
            {[
              { key: 'benefit_1', icon: '⚡' },
              { key: 'benefit_2', icon: '◎' },
              { key: 'benefit_3', icon: '✓' },
            ].map(({ key, icon }) => (
              <li key={key} className="contact__benefit">
                <span className="contact__benefit-icon">{icon}</span>
                <span>{t(`contact.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact__form-wrap">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>

            <div className="contact__topic-group">
              <p className="contact__field-label">{t('contact.topic_label')}</p>
              <div className="contact__topic-btns">
                {['erp', 'other'].map(val => (
                  <button
                    key={val}
                    type="button"
                    className={`contact__topic-btn${form.topic === val ? ' contact__topic-btn--active' : ''}`}
                    onClick={() => setForm(f => ({ ...f, topic: val }))}
                  >
                    {val === 'erp' ? t('contact.topic_erp') : t('contact.topic_other')}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="cf-name" className="contact__field-label">{t('contact.name_label')}</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder={t('contact.name_placeholder')}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="cf-email" className="contact__field-label">{t('contact.email_label')}</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder={t('contact.email_placeholder')}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="cf-phone" className="contact__field-label">
                {t('contact.phone_label')}
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                className="contact__input"
                placeholder={t('contact.phone_placeholder')}
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="cf-message" className="contact__field-label">{t('contact.message_label')}</label>
              <textarea
                id="cf-message"
                name="message"
                className="contact__input contact__textarea"
                placeholder={t('contact.message_placeholder')}
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            {status === 'error' && (
              <p className="contact__error">{t('contact.error_desc')}</p>
            )}

            <button
              type="submit"
              className="btn btn--primary btn--lg contact__submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t('contact.submitting') : t('contact.submit')}
              {status !== 'loading' && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
