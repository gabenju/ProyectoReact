export const Product = [
    {
      id: "01",
      name: "Gin Bosque + 2 Paso De Los Toros Tonica 1,5lt",
      price: 3000,
      description: 
      "Acá encontrás delivery de Gin Bosque + 2 Paso de los Toros Tonica 1,5lt a precio de mercado",
      img: "https://i.postimg.cc/kMfDYdPn/gin-tonica.jpg",
      category: "destilados",
      stock:10,
      /*
      
      description: "Acá encontrás delivery de Gin Bosque + 2 Paso de los Toros Tonica 1,5lt a precio de mercado.
      En Whynot vas a encontrar bebidas al mejor precio del mercado. Ofertas de cervezas, vinos, agua y bebidas.
      Ingresa tu dirección para ver los productos que están disponibles y disfrutá de la entrega de bebidas frías más rápida.
      Descripción del producto
      500ml",*/
    },
    {
      id: "02",
      name: "Campari",
      price: 2000,
      description: "Acá encontrás delivery de Pack: Campari + 2 Naranja Pura Frutta a precio de mercado",
      img: "https://i.postimg.cc/63S6wBWR/campari-naranja.jpg",
      category: "aperitivos",
      stock:10,
      /*
      
      description: "Acá encontrás delivery de Pack: Campari + 2 Naranja Pura Frutta a precio de mercado.
      En Whynot vas a encontrar bebidas al mejor precio del mercado. Ofertas de cervezas, vinos, agua y bebidas.
      Ingresa tu dirección para ver los productos que están disponibles y disfrutá de la entrega de bebidas frías más rápida.
      Descripción del producto
      750ml",*/
    },
    {
      id: "03",
      name: "Absolut",
      price: 5000,
      description: "Acá encontrás delivery de Pack: Absolut Original 700ml + 2 Citric de Naranja + 4 Vasos a precio de mercado",
      img: "https://i.postimg.cc/YCgnSf1j/combo-absolut.jpg",
      category: "destilados",
      stock:5,
      /*
      
      description: "Acá encontrás delivery de Pack: Absolut Original 700ml + 2 Citric de Naranja + 4 Vasos a precio de mercado.
      En Whynot vas a encontrar bebidas al mejor precio del mercado. Ofertas de cervezas, vinos, agua y bebidas.
      Ingresa tu dirección para ver los productos que están disponibles y disfrutá de la entrega de bebidas frías más rápida.
      Descripción del producto
      Absolut Original 700ml + 2 Citric Naranja + 4 Vasos",*/
    },
    {
      id: "4",
      name: "Pack: 12 Patagonia 24.7",
      price: 2900,
      description: "Acá encontrás delivery de Pack: 12 Patagonia 24.7 a precio de mercado",
      img:"https://i.postimg.cc/hG3hXx8Q/pack-247.jpg",
      category: "cerveza",
      stock:"20",
      /*
      
      description: "Acá encontrás delivery de Pack: 12 Patagonia 24.7 a precio de mercado.
      En Whynot vas a encontrar bebidas al mejor precio del mercado. Ofertas de cervezas, vinos, agua y bebidas.
      Ingresa tu dirección para ver los productos que están disponibles y disfrutá de la entrega de bebidas frías más rápida.
      Descripción del producto
      473ml",*/
    }
  ]


  // coloco esto en App.js y subo a firebase los nuevos productos

  // import { useEffect } from "react"
  // import {addDoc, collection} from "../../firebase/firebase";
  // import { db } from "../../firebase/firebase";
  // import { Product } from '../../ProductMock/Product';

  // useEffect(()=>{
  //   const productosCollecction = collection(db, "products")
  //   product.map((item)=> addDoc(productosCollecction, item))
  // }, [])
