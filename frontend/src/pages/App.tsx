import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from '../components/Header';
import { getRoutes } from '../routes';
import { LoginPage } from './LoginPage';
import { NotFoundPage } from './NotFoundPage';
import { SignUpPage } from './SignUpPage';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
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
        </Router>
      </div>
    </div>
  );
};
