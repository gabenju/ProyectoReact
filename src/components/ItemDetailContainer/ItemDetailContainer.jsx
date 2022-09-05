import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../ProductMock/Products";

export default function ItemDetailContainer() {
  const { idcategory, idproduct } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!idproduct) {
      setProducts(Products);
    } else {
      setProducts(
        Products.filter((product) => product.idproduct == idproduct)
      );
    }
  }, [idproduct]);

  return (
  <div> ItemDetailContainer </div>
  );
}
