import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/PortfolioCV/">Kevin He</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="IntroductionLetter">Introduction Letter</Nav.Link>
            <Nav.Link href="CV">Curriculum Vitae</Nav.Link>
            <Nav.Link href="Projects">Projects</Nav.Link>
            <Nav.Link href="Leadership">Leadership and Extracurriculars</Nav.Link>
            <Nav.Link href="Miscellaneous">Miscellaneous</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;