import LocalMallIcon from '@mui/icons-material/LocalMall';
import React from 'react';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
  const{cartQuantity, cart} =useCart()
  return (
    <div>
       <LocalMallIcon color='light' fontSize='large'/>
        <span>{cartQuantity() || ''}</span>

    </div>
  )
}

export default CartWidget