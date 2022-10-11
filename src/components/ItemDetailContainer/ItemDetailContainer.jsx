import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [productDetail, setProductDetail]= useState({})
  const [loading, setLoading]= useState(true)
  const{idproduct}=useParams()

  useEffect(()=>{
    const coleccionProductos = collection(db, "products")
    const referenciaDoc = doc(coleccionProductos, idproduct)
    getDoc(referenciaDoc)
    .then((result)=>{
      setProductDetail({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[])

 
return (
  <div>
     {loading ? <p className="loader">$</p> : <ItemDetail Product={productDetail}/>}


  </div>
)
}

export default ItemDetailContainer

