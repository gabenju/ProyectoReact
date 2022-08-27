import React, {useState, useEffect} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
  const [counter, setCounter] = useState (initial)
 /* 
useEffect(() => {
    if (counter < 0 || counter > 5) {
      alert('Maximo 6 unidades por producto');
    }
  });

  useEffect(() => {
    return () => {
      console.log('muere el componente');
    };
  }, []);*/

  return (
    <div>
        <button disabled={counter <= 1} onClick={() =>{
        setCounter(counter - 1)
      } }>-</button>
      <span>{counter} clicks</span>
      <button disabled={counter >= stock} onClick={() =>{
        setCounter(counter + 1)
      } }>+</button>
      <div>
      <button> Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount