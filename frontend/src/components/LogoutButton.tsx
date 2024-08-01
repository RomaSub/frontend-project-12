import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRoutes } from '../routes';
import { selectIsAuthenticated, logOut } from '../services/authSlice';

export const LogoutButton = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate(getRoutes.loginPagePath());
  };

  if (!isAuthenticated) return null;

  return <Button onClick={handleLogout}>{t('header.logout')}</Button>;
};
