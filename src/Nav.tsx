import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return(
<Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link href="/">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/docs">
                <Nav.Link href="/docs">Docs</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/characters">
                <Nav.Link href="/characters">Characters</Nav.Link>
              </LinkContainer>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header;