import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
      <Navbar  bg="danger" variant="dark" sticky="top" className="p-3">
          <Container>
              <Navbar.Brand href="#home">ICCS+</Navbar.Brand>
               <Nav.Link href="#home" className="">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                    
                  <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                  </Navbar.Text>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      </>
    );
};

export default Header;