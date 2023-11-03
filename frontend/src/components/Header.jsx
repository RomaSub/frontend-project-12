import { Navbar, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import routes from '../routes.js';

const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar className="shadow-sm" bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={routes.chatPagePath}>{t('logo')}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
