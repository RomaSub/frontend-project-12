import { Navigate } from 'react-router-dom';
import { getRoutes } from '../routes';
import { ChatPage } from './ChatPage';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../services/slices/authSlice';

export const PrivateRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  return isAuthenticated ? <ChatPage /> : <Navigate to={getRoutes.loginPagePath()} />;
};
