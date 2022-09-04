import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const productos = [
  {
    id: 1,
    name: "Combo Gin",
    precio: 3000,
    detail: "Gin Bosque + 2 Paso De Los Toros Tonica 1,5lt",
    img:
      "https://i.postimg.cc/kMfDYdPn/gin-tonica.jpg",
    idcategory: "destilados",
    /*
    
    description: "Acá encontrás delivery de Gin Bosque + 2 Paso de los Toros Tonica 1,5lt a precio de mercado.
    En Whynot vas a encontrar bebidas al mejor precio del mercado. Ofertas de cervezas, vinos, agua y bebidas.
    Ingresa tu dirección para ver los productos que están disponibles y disfrutá de la entrega de bebidas frías más rápida.
    Descripción del producto
    500ml",*/
  },
  {
    id: 2,
    name: "Combo Campari",
    precio: 2000,
    img: "https://i.postimg.cc/63S6wBWR/campari-naranja.jpg",
    detail: "Pack: Campari + 2 Naranja Pura Frutta",
    idcategory: "aperitivos",
    /*
    
    description: "Acá encontrás delivery de Pack: Campari + 2 Naranja Pura Frutta a precio de mercado.
    En Whynot vas a encontrar bebidas al mejor precio del mercado. Ofertas de cervezas, vinos, agua y bebidas.
    Ingresa tu dirección para ver los productos que están disponibles y disfrutá de la entrega de bebidas frías más rápida.
    Descripción del producto
    750ml",*/
  },
  {
    id: 3,
    name: "Combo Absolut",
    precio: 5000,
    detail: "Pack: Absolut Original 700ml + 2 Citric De Naranja + 4 Vasos",
    img: "https://i.postimg.cc/YCgnSf1j/combo-absolut.jpg",
    idcategory: "destilados",
    /*
    
    description: "Acá encontrás delivery de Pack: Absolut Original 700ml + 2 Citric de Naranja + 4 Vasos a precio de mercado.
    En Whynot vas a encontrar bebidas al mejor precio del mercado. Ofertas de cervezas, vinos, agua y bebidas.
    Ingresa tu dirección para ver los productos que están disponibles y disfrutá de la entrega de bebidas frías más rápida.
    Descripción del producto
    Absolut Original 700ml + 2 Citric Naranja + 4 Vasos",*/
  },
  {
    id: 4,
    nombre: "Patagonia 24.7",
    precio: 2900,
    detail: "Pack: 12 Patagonia 24.7",
    img:"https://i.postimg.cc/hG3hXx8Q/pack-247.jpg",
    idcategory: "cerveza",
    /*
    
    description: "Acá encontrás delivery de Pack: 12 Patagonia 24.7 a precio de mercado.
    En Whynot vas a encontrar bebidas al mejor precio del mercado. Ofertas de cervezas, vinos, agua y bebidas.
    Ingresa tu dirección para ver los productos que están disponibles y disfrutá de la entrega de bebidas frías más rápida.
    Descripción del producto
    473ml",*/
  }
];

export default function ItemListContainer() {
  const { idcategory, idproduct } = useParams();

  const [products, setProducts] = useState();

  useEffect(() => {
    if (!idcategory) {

      setProducts(productos);
    } else {

      setProducts(productos.filter((product) => product.idcategory == idcategory));
    }
  }, [idcategory]);

 
  return (
    <>
    <ItemList listProducts={productos}/>
    </>
    
  )
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