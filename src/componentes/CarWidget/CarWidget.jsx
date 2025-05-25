import React from 'react'
import './CarWidget.css'
import { Link } from 'react-router-dom';

const CarWidget = () => {
  const imgCarrito = "https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png";
  return (
    <div className='carrito'>
      <Link to="/cart"><img src={imgCarrito} alt="" /></Link>
    </div>
  )
}

export default CarWidget
