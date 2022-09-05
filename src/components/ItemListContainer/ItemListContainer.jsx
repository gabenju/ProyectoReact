import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../ProductMock/Products";

export default function ItemListContainer() {

  const { idcategory, idproduct } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!idcategory) {
      setProducts(Products);
    } else {
      setProducts(
        Products.filter((product) => product.idcategory === idcategory)
      );
    }
  }, [idcategory]);

  return (
    <>
      <div>{JSON.stringify(products)}</div>
    </>
  );
}



/*
const [listProducts, setListProducts] = useState([]) 
*/
/*
    useEffect(()=>{
    CustomFetch(Product)
    .then(data=> setListProducts(data))
  },[idcategory])
*/