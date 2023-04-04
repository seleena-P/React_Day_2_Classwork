import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navv() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">AC Tech</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.techgadgets.in/">Home</Nav.Link>
            <Nav.Link href="https://www.techgadgets.in/mobile-phones/">Mobile Phones</Nav.Link>
            <Nav.Link href="https://www.techgadgets.in/laptop/">Laptops</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navv