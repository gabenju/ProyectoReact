import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import CartWidget from './CartWidget';
import logoWN from '../assets/logoWN.png';



export default function NavBar () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logoWN} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        <CartWidget counter={7}/>

      </Container>
    </Navbar>
  )
}
//<img src='' alt='Logo'/>