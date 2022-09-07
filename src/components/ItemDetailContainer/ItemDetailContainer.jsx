import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {data} from "../../ProductMock/Product";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [productDetail, setProductDetail]= useState({})
  const [loading, setLoading]= useState(true)
  const{idproduct}=useParams()

  useEffect(()=>{
      data
      .then((res)=> {
        if(idproduct){
          const found = res.find(item => item.id === idproduct);
          setProductDetail(found);
        }else{
          setProductDetail({})
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
  },[idproduct])
 
return (
  <div>
     {loading ? <p>Loading...</p> : <ItemDetail Product={productDetail}/>}
  </div>
)
}

export default ItemDetailContainer


/*  const [listProduct, setListProduct] = useState([]) /

/ RUTA ITEMDETAIL
    if (!idproduct) {
      setProducts(Product);
    } else {
      setProducts(
        Product.filter((product) => product.idproduct == idproduct)
      );
    }
  }, [idproduct]);*/