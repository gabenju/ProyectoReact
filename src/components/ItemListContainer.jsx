import React, { useEffect, useState } from 'react';
import { CustomFetch } from './CustomFetch';
import ItemList from './ItemList';
import Product from './Product';

const ItemListContainer = ({greeting}) => {

  const [listProducts, setListProducts] = useState([]) 
  
useEffect(()=>{
  CustomFetch(Product)
  .then(data=> setListProducts(data))
},[])

  console.log(listProducts)
  return (
    <>
    <ItemList listProducts={listProducts}/>
    <div>{greeting}</div>
    </>
  )
}

export default ItemListContainer