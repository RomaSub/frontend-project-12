import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import Header from './Header.jsx';
import NotFoundPage from './NotFoundPage.jsx';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default App;
