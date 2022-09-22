import React, {useState, useEffect} from 'react';
import {getFirestore, collection, getDocs} from 'firebase/firestore';

export default function TestLecturaProduct() {
  const [productos, setProductos] = useState([]);
  useEffect(()=>{
    const db = getFirestore()
    const collectionRef = collection(db, 'products');
    getDocs (collectionRef).then((res)=>{
      console.log(res.docs);

      let productosLimpios = [];
      res.docs.forEach((item) =>{
        const objetoLimpio = {...item.data(), id: item.id};
        productosLimpios.push(objetoLimpio);
      });

    });

  }, []);

  return (
    <div>
      {productos.map((producto) => (
      <>
            id: {producto.id} <br/>
            name: {producto.name} <br/>
            category: {producto.category} <br/>
            price: {producto.price} <br/>
            stock: {producto.stock} <br/>
            description: {producto.description} <br/>
            img: {producto.img} <br/>
      </>
      ))}

    </div>
  )
}
