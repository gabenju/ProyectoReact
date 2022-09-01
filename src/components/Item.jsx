import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({Product}) => {
        console.log(Product)
    return (
        <div className="container">
            <div className="row">
        <div key={Product.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {Product.nombre}
                    </div>
                    <div className ="card-img-top">
                    <img src={Product.img} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {Product.detail}
                    </div>                   
                    <div className="card-footer">
                        {`precio ${Product.precio}`}
                    </div>
                    <Nav.Link href={`/item/${Product.id}`}>
                    <button className="btn btn-outline-warning btn-block">Detalles</button>
                    </Nav.Link>
                </div>
                </div>
            </div>
    )
}

export default Item

/*
import React from 'react'

const Item = ({Product}) => {
  return (
    <div>
        <p>{Product.nombre}</p>
        <p>{Product.precio}</p>
        <p>{Product.img}</p>
    </div>
  )
}

export default Item*/