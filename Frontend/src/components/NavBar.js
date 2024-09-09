import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function NavBar() {
  return (
    <>
      <Container fluid>
        <Navbar.Brand href="/">Badinga</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="pildyti">Pildyti</Nav.Link>
            <Nav.Link href="paraiskos">Paraiškos</Nav.Link>
            <Nav.Link href="mock">API testavimai</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </>
  );
}
