//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
//import CartWidget from './CartWidget';
//import logoWN from '../assets/logoWN.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/category/destilados">Destilados</Link>
      <br />
      <Link to="/category/aperitivos">Aperitivos</Link>
      <br />
      <Link to="/product/4">Producto Destacado</Link>
      <br />
    </div>
  );
}
