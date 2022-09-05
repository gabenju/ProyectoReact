import React from 'react'
import Item from '../ItemDetail/ItemDetail'


const ItemList = ({ listProduct }) => {
  return (
    <>
      {listProduct.map((Product) => (
        <Item key={Product.id} Product={Product} />
      ))}
    </>
  );
};

export default ItemList;
