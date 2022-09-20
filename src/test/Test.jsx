import React, { useState, useEffect } from 'react';

export default function Test() {
  const [ resultado, setResultado] = useState([]);
  const [ loading, setLoading] = useState(true);
  const [ error, setEror] = useState(false);
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products/')
    .then((res) => res.json())
    .then((json) =>{
      setResultado(json);
    })
    .catch((e) =>{
      console.log(e);
      setEror(true);
    })
    .finally(() =>{
      setLoading(false);
    });
  }, []);


  return( 
  <>
    <loader isLoading={loading ? true : false} msg={loading ? 'Cargando...' : 'Listo!'}/>
    {resultado.map((item) => (
    <div style={{ border: '2px, solid red' }}>
      {item.id}
      <br/>
      {item.title}
      <br/>
      {item.price}
      <br/>
      {item.description}
      <br/>
      {item.category}
      <br/>
    </div>
    ))}
  </>
  );
}

/*
    function handleClick(e){
    // console.log(e);
    }
    function handleKeyDown(e){
    // e.preventDefault();
    }

    const [email, setEmail] = useState('');

*/
/*
<>
<div onClick={handleClick} style={{border: "3px solid red", margin: "20px", padding: '20px'}}>test</div>
<input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'ingrese su email'} />
</> 
*/