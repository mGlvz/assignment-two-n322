import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function Footer() {
    return(
        // <div className="nav"></div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
            <NavDropdown title="Collections" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Winter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Surf
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hiking</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sale
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#features">Copyright © 2022 Outdoor Retail, Inc.</Nav.Link>
          </Nav>
          <Nav>
          
            <Nav.Link href="#deets">Sign In</Nav.Link>
            <Nav.Link eventKey={2} href="#cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}