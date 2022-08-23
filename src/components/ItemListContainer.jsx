import React from 'react'

const ItemListContainer = ({saludo, greeting}) => {
  return (
    <div>
        <p>{saludo}</p>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer