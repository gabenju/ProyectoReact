import React, { useState, useEffect } from 'react';

export default function Test() {

    function handleClick(e){
    // console.log(e);
    }
    function handleKeyDown(e){
    // e.preventDefault();
    }

    const [email, setEmail] = useState('');

  return (
    <>
        <div onClick={handleClick} style={{border: "3px solid red", margin: "20px", padding: '20px'}}>test</div>
        <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'ingrese su email'} />
    </>
  )
}


