import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import { getRoutes } from '../routes';
import { selectActiveTheme } from '../services/uiSlice';
import { LoginPage } from './LoginPage';
import { NotFoundPage } from './NotFoundPage';
import { PrivateRoute } from './PrivateRoute';
import { SignUpPage } from './SignUpPage';

export const App = () => {
  const activeTheme = useSelector(selectActiveTheme);

  return (
    <div className='h-100'>
      <div className='d-flex flex-column h-100'>
        <Router>
          <Header />
          <Routes>
            <Route path={getRoutes.loginPagePath()} element={<LoginPage />} />
            <Route path={getRoutes.signUpPagePath()} element={<SignUpPage />} />
            <Route path={getRoutes.chatPagePath()} element={<PrivateRoute />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <ToastContainer theme={activeTheme} autoClose={3000} closeOnClick />
        </Router>
      </div>
    </div>
  );
};
