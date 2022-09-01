import React, {useState, useEffect} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
  const [counter, setCounter] = useState (initial)
const increase = () => {
  setCounter (counter + 1)
}
const decrease = () => {
  setCounter (counter - 1)
}

  return (
    <div>
       <button onClick={decrease}> - </button>
      <button onClick={increase}> + </button>
     
      <h1>{counter}</h1>
    </div>
  )
}

export default ItemCount


/*        <button disabled={counter <= 1} onClick={() =>{
        setCounter(counter - 1)
      } }>-</button>
      <span>{counter} clicks</span>
      <button disabled={counter >= stock} onClick={() =>{
        setCounter(counter + 1)
      } }>+</button>
      <div>
      <button> Agregar al carrito</button>
      </div>*/