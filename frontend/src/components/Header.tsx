import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getRoutes } from '../routes';

const Header = () => {
  return (
    <Navbar expand='lg' className='shadow-sm'>
      <Container>
        <Navbar.Brand as={Link} to={getRoutes.chatPagePath()}>
          Hexlet
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
