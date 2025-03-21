import React from 'react'
import './CarWidget.css'

const CarWidget = () => {
  const imgCarrito = "https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png";
  return (
    <div>
      <img src= {imgCarrito} alt="" />
    </div>
  )
}

export default CarWidget
