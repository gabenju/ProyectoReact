import React, {useState, useEffect} from 'react'

const Contador = () => {
  const [counter, setCounter] = useState (0)
  return (
    <div>
      <span>{counter} clicks</span>
      <button onClick={() =>{
        setCounter(counter + 1)
      } }>+</button>
    </div>
  )
}

export default Contador