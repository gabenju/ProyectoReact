import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import logoWN from "../../assets/logoWN.png";

import CartWidget from "../CartWidget/CartWidget";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="lg">
        <Container >
        <Link to="/">
          <Navbar.Brand href="#home">
          <img className="logo"src={logoWN} alt='Logo'/>
          </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link className="fonts" to="/category/destilados">
              <Nav.Link href="#home">Destilados</Nav.Link>
            </Link>
            <Link className="fonts" to="/category/aperitivos">
              <Nav.Link  href="#features">Aperitivos</Nav.Link>
            </Link>
            <Link className="fonts" to="/category/cerveza">
              <Nav.Link  href="#pricing">Destacados</Nav.Link>
            </Link>
          </Nav>
          <NavLink className="fonts" to='/cart'>
          <CartWidget />
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
}
