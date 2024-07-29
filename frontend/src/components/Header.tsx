import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getRoutes } from '../routes';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Navbar expand='lg' className='shadow-sm'>
      <Container>
        <Navbar.Brand as={Link} to={getRoutes.chatPagePath()}>
          {t('header.chatLogo')}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
