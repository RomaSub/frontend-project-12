import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import resources from './locales/index.ts';
import { App } from './pages/App';
import { Provider } from 'react-redux';
import { store } from './services/store.ts';
import 'react-toastify/dist/ReactToastify.css';

export const Init = () => {
  const i18n = i18next.createInstance();
  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  );
};
