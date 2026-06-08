import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './translations/es.json';
import en from './translations/en.json';
import de from './translations/de.json';
import fr from './translations/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
  });

export default i18n;
