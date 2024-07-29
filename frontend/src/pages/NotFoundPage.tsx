import { NavLink } from 'react-router-dom';
import notFoundImage from '../assets/404image.svg';
import { getRoutes } from '../routes';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className='text-center'>
      <img className='img-fluid h-25' src={notFoundImage} />
      <h1 className='h4 text-muted'>{t('notFoundPage.pageNotFound')}</h1>
      <p className='text-muted'>
        {t('notFoundPage.youCanGo')} <NavLink to={getRoutes.chatPagePath()}>{t('notFoundPage.toHomePage')}</NavLink>
      </p>
    </div>
  );
};
