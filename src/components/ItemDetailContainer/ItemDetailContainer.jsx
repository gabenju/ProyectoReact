import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../ProductMock/Product";

export default function ItemDetailContainer() {
  const { idcategory, idproduct } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    if (!idproduct) {
      setProducts(Product);
    } else {
      setProducts(
        Product.filter((product) => product.idproduct == idproduct)
      );
    }
  }, [idproduct]);

  return (
    <>
      <div>{JSON.stringify(product)}</div>
    </>
  );
}
