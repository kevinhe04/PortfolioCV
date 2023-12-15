import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuKevin from './menu';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Kevin He</Navbar.Brand>
          <MenuKevin/>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;