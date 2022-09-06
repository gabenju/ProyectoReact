import "../../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoWN from "../../assets/logoWN.png";
import CartWidget from "../CartWidget/CartWidget";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" variant="lg">
        <Container>
        <Link to="/">
          <Navbar.Brand href="#home">
          <img src={logoWN} alt='Logo'/>
          </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/category/destilados">
              <Nav.Link href="#home">Destilados</Nav.Link>
            </Link>
            <Link to="/category/aperitivos">
              <Nav.Link href="#features">Aperitivos</Nav.Link>
            </Link>
            <Link to="/category/cerveza">
              <Nav.Link href="#pricing">Destacados</Nav.Link>
            </Link>
          </Nav>
          <CartWidget counter={7}/>
        </Container>
      </Navbar>
    </div>
  );
}
