import { Link } from 'react-router-dom';
import React from 'react';
import { Badge, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Header = () => {
    return (
        <>
     <Navbar fluid sticky="top" bg="light"  expand={false} >
  <Container fluid>
    <Navbar.Brand href="#">DAILY SUN CLINIC </Navbar.Brand>
    <Navbar.Toggle  aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">DSC+</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <p>Monday-Saturday 9am to 5pm</p>
          <p><small>24h Hotline: +393512295629</small></p>
          <Nav.Link as={Link} to ="/home#home">Home</Nav.Link>
          <Nav.Link as={Link} to ="/services#services">Services</Nav.Link>
          <Nav.Link as={Link} to ="/specials#specials">Specials</Nav.Link>
          <Nav.Link as={Link} to ="/doctors#doctors">Doctors</Nav.Link>
          <Nav.Link as={Link} to ="/pharmacy#pharmacy">Pharmacy</Nav.Link>
          <Nav.Link as={Link} to ="/login#login">Login</Nav.Link>
          <Nav.Link as={Link} to ="/ambulance#ambulance">Ambulance</Nav.Link>
          <Nav.Link as={Link} to ="/aboutUs#aboutUs">About Us</Nav.Link>
          <Nav.Link as={Link} to ="/QnA#QnA">Q&A</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
      </>
    );
};

export default Header;