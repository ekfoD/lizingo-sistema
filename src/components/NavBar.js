import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
    return(
        <>
          <Container fluid>
            <Navbar.Brand href="#home">Badinga</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

            
            <Nav className="me-auto">
              <Nav.Link href="#home">Pildyti</Nav.Link>
              <Nav.Link href="#features">Paraiškos</Nav.Link>
            </Nav>

            </Navbar.Collapse>
          </Container>
      </>
    );
}