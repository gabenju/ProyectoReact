import React from 'react'
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'
import CartItem from '../CartItem/CartItem';

const Cart = () => {
const {cart,  cartTotal, clear}=useCart()
const navegar = useNavigate()
console.log(cart)
  return (
    <div>
      {
        !cart.length 
        ?<div>
          <h2>Tu carrito esta vacio!</h2>
          <h4>Te invitamos a seguir comprando!</h4>
          <button className='btn btn-success' onClick={()=>navegar('/')}>Ir a comprar</button>
        </div>
        :<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h2>Tus Compras</h2>
            {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
            <span>Total a pagar : ${cartTotal()}</span>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
            <button className='btn btn-success'>Terminar compra</button>
            </div>
            
        </div>
      }
    </div>
  )
}

export default Cart