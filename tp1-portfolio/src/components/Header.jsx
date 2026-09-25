import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Header.css"

function Header() {
  return (
    <>
      <Navbar className="nav-inicio" data-bs-theme="dark">
        
        <Container>

          <Navbar.Brand href="#Inicio">Sofia Montenegro</Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#About">Sobre Mi</Nav.Link>
              <Nav.Link href="#Skills">Habilidades</Nav.Link>
              <Nav.Link href="#Projects">Proyectos</Nav.Link>
              <Nav.Link href="#Contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
