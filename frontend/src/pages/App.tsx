import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from '../components/Header';
import { getRoutes } from '../routes';
import { ChatPage } from './ChatPage';
import { LoginPage } from './LoginPage';
import { NotFoundPage } from './NotFoundPage';

export const App = () => {
  return (
    <div className='h-100'>
      <div className='d-flex flex-column h-100'>
        <Router>
          <Header />
          <Routes>
            <Route path={getRoutes.loginPagePath()} element={<LoginPage />} />
            <Route path={getRoutes.chatPagePath()} element={<ChatPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};
