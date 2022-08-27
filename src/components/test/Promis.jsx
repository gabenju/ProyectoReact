import React, { useState , useEffect} from 'react';
const catalogo = [
  {
  id: 1,
  title: "Producto N°1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  price: 500,
  pictureUrl: "https://picsum.photos/id/237/200/300",
},
{
  id: 2,
  title: "Producto N°2",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  price: 350,
  pictureUrl: "https://picsum.photos/id/405/200/300",
},
{
  id: 3,
  title: "Producto N°3",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price: 99,
  pictureUrl: "https://picsum.photos/id/100/200/300",
},
]

export default function Promis() {
  const [loading, setLoading] = useState (true);
  const [prod, setProd] = useState ([]);
  const [error, setError] = useState ('');

  let pagara = new Promise((res, rej) =>{
    setTimeout(() => {
      res(catalogo);
      //res (50);
      //rej('NO PAGO!');
    }, 3000);
  });

  pagara
  .then((res) => {
    setProd(res);
    console.log(res)
    //setLoading(false);
  })
  .catch((error) => {
    setError(error);
    setLoading(false);
  })
  .finally(()=> {
    setLoading(false);
  });

  return (
    <div> 
      <p>Loading: {loading ? 'Loading...' : 'Fin'}</p>
      <p>Pago: {prod ? JSON.stringify(prod): null}</p>
      <p>Error: {error ? error : null}</p>
    </div>
  );
}




//sino pone  promise.then().catch().finally() dentro de un useEffect con dependencia [] y ahí debería ejecutarse una sola vez

