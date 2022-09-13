import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({Product}) => {
    const[count, setCount]= useState(1)
    const [compra, setCompra]= useState(false)
    const {stock, name, price, img, id}= Product;
    const navegar = useNavigate()
    const onAdd = () => {
        console.log(`Compraste ${count}, items del producto ${name}!`)
        setCompra(true)
    }



    return (
        <div className="productContainer">
            <div className="row">
        <div key={Product.id} className='card'>
                    <div className="card-header">
                        {Product.name}
                    </div>
                    <div className ="card-img-top">
                    <img src={Product.img} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {Product.description}
                    </div>                   
                    <div className="card-footer">
                        {`Precio: $ ${Product.price}`}
                    </div>
                    <div className="card-footer">
                        {`Stock: ${Product.stock}`}
                    </div>
                    <Nav.Link href={`/description/${Product.id}`}>
                    <button className="btn btn-outline-warning btn-block">Detalles</button>
                    </Nav.Link>
                    { !compra 
                    ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
                     :  <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                        <button className="btn btn-warning" onClick={()=>navegar('/')}>Seguir Comprando</button>
                        <button className="btn btn-warning" onClick={()=>navegar('/cart')}>Ir al carrito</button>
                    </div> }
                </div>
                </div>    
        </div>
    )
}

export default ItemDetail