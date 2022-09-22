import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]= useState(false)
  const{idcategory}= useParams()

  useEffect(()=>{
    setLoading(true)
    const productos = idcategory ? query(collection(db, "products"), where("category", "==", idcategory) ) : collection(db, "products")
    getDocs(productos)
    .then((result)=>{
      const lista = result.docs.map((product)=>{
        return{
          id:product.id,
          ...product.data()
        }
      })
      setProductList(lista)
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  }, [idcategory])

  return (
    <div>
      {loading ? <p className="loader">$</p> :<ItemList productList={productList}/>}
    </div>
  );
}

/*Mock
useEffect(()=>{
  setLoading(true)
    data
    .then((res)=>{
      if(idcategory){
        setProductList(res.filter((item)=> item.category === idcategory))
      }else{
        setProductList(res)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [idcategory])
  */