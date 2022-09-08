import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemList = ({ productList }) => {
  return (
    <div className="productContainer">
      {productList.map((Product) => (
        <ItemDetail key={Product.id} Product={Product} />
      ))}
    </div>
  );
};

export default ItemList;
