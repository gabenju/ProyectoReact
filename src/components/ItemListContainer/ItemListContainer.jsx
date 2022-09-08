import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {data} from "../../ProductMock/Product";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]= useState(false)
  const{idcategory}= useParams()

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


  return (
    <div>
      {loading ? <p className="loader">$</p> :<ItemList productList={productList}/>}
    </div>
  );
}

