import React, { useState, useEffect } from 'react';
import ProductLayout from './ProductLayout';

export default function ProductConteiner () {
  const productos = [
    { id: 100, name: 'zapato nike', precio: 100 },
  /*  { id: 101, name: 'zapato nike', precio: 100 },
    { id: 102, name: 'zapato nike', precio: 100 },
    { id: 103, name: 'zapato nike', precio: 100 },
    { id: 104, name: 'zapato nike', precio: 100 }, */
  ];

  //fetch("pokepai.com/pokes" / json)
  //normal // ordenardor
  //paginar
  //decir el largo de cada pagina

  return <ProductLayout productos={productos} />;
}