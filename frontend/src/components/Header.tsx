import { Container, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getRoutes } from '../routes';
import { LogoutButton } from './LogoutButton';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Navbar expand='lg' className='shadow-sm'>
      <Container>
        <Navbar.Brand as={Link} to={getRoutes.chatPagePath()}>
          {t('header.chatLogo')}
        </Navbar.Brand>
        <Navbar.Collapse>
          <ThemeSwitcher />
        </Navbar.Collapse>
        <LogoutButton />
      </Container>
    </Navbar>
  );
};

export default Header;
