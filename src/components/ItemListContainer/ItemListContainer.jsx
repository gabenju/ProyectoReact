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
      {loading ? <p>Loading...</p>:<ItemList productList={productList}/>}
    </div>
  );
}



/*export default function ItemListContainer() {

  const { idcategory, idproduct } = useParams();
  const [product, setProducts] = useState([])
  const [listProduct, setListProduct] = useState([]) 
  const [loading, setLoading]= useState(false)
  


  useEffect(() => {
    if (!idcategory) {
      setProducts(Product);
    } else {
      setProducts(
        Product.filter((product) => product.idcategory === idcategory)
      );
    }
  }, [idcategory]);*/
/*
  const data = new Promise((resolve, reject)=>{
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(product)
      }else{
        reject('salio mal uwu')
      }
    },2000)
  })
  useEffect(()=>{
    setLoading(true)
    data
    .then((res)=>
    setlistProduct(res))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [])*/


/*
const [listProducts, setListProducts] = useState([]) 
*/
/*
    useEffect(()=>{
    CustomFetch(Product)
    .then(data=> setListProducts(data))
  },[idcategory])
*/