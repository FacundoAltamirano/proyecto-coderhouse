import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-empty">
        <h2>No hay productos en el carrito. Comprá para continuar</h2>
        <Link to="/">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {carrito.map(producto => (
        <CartItem key={producto.item.id} {...producto} />
      ))}

      <div className="cart-summary">
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
      </div>

      <div className="cart-actions">
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;
