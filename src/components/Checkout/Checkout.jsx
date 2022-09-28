import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { db } from "../../firebase/firebase";

const Checkout = () => {
    const [formData, setFormData] = useState({})
    const [orderId, setOrderId]= useState('')
    const [mensaje, setMensaje]=useState(false)
    const [loading, setLoading] = useState(false)
    const {cart, cartTotal, clear}= useCart()
    const navigate = useNavigate()


    const buyerData = (e)=> {
    setFormData ({
        ...formData,
        [e.target.name] : e.target.value
    })
}

    const finalizarCompra = (e) =>{
    e.preventDefault()
    if(Object.values(formData).length !== 3){
        setMensaje(true)
     }else{
         setMensaje(false)
         setLoading(true)
    const sales = collection(db, "orders")
    addDoc(sales, {
        formData,
        items: cart,
        total: cartTotal(),
        date: serverTimestamp()
    })
    .then((res)=>{
        setOrderId(res.id)
        clear()
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
    }
}
if(loading){
    return <p className="loader">$</p>
}
  return (
    <div>
        {!orderId 
        ?<div className='form'>
        <h2>Checkout</h2>
        <h4> Complete con sus datos Por Favor </h4>
        <form className='form' onSubmit={finalizarCompra}>
        <input type="text" placeholder="Ingrese su nombre" name ="name" onChange={buyerData}/>
        <input type="text" placeholder="Ingrese su telefono" name ="phone" onChange={buyerData}/>
        <input type="email" placeholder="Ingrese su email" name ="email" onChange={buyerData}/>
        <button type='submit' className="btn btn-outline-warning btn-block">Finalizar compra</button>
        {mensaje && <p style={{color:'red'}}> Por favor complete todos los campos</p>}
        </form>
        <button className="btn btn-outline-warning btn-block"onClick={clear}>Vaciar Carrito</button>
        </div>
        :
        <div>
            <h2>Muchas gracias por su compra!</h2>
            <h4>Su orden es: {orderId}</h4>
            <button className="btn btn-success" onClick={()=> navigate('/')}>Volver</button>
        </div>}
    </div>
  )
}

export default Checkout
