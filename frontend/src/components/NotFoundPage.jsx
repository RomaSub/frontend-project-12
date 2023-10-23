import { useTranslation } from 'react-i18next';
import notFoundImage from '../assets/notFound.jpg';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <img src={notFoundImage} className="img-fluid h-25" alt="Страница не найдена" />
      <h1 className="h4 text-muted">{t('notFound')}</h1>
      <p className="text-muted">{t('youCanGo')}</p>
      <a href="/">{t('toHomePage')}</a>
    </div>
  );
};

export default NotFoundPage;
