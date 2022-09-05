import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../ProductMock/Product";

export default function ItemListContainer() {

  const { idcategory, idproduct } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    if (!idcategory) {
      setProducts(Product);
    } else {
      setProducts(
        Product.filter((product) => product.idcategory === idcategory)
      );
    }
  }, [idcategory]);

  return (
    <>
      <div>{JSON.stringify(product)}</div>
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