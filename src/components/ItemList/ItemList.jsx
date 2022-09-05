import React from 'react'
import Item from '../ItemDetail/ItemDetail'


const ItemList = ({ listProducts }) => {
  return (
    <>
      {listProducts.map((Products) => (
        <Item key={Products.id} Product={Products} />
      ))}
    </>
  );
};

export default ItemList;
