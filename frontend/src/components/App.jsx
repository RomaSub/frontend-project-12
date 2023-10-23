import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import NotFoundPage from './NotFoundPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
