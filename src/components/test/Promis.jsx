import React, { useState , useEffect} from 'react';
import Product from '../Product';


export default function Promis() {
  const [loading, setLoading] = useState (true);
  const [prod, setProd] = useState ([]);
  const [error, setError] = useState ('');

  let pagara = new Promise((res, rej) =>{
    setTimeout(() => {
      res(Product);
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

