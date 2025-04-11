import React, { useState } from 'react';
import Lupa from '../Lupa/Lupa';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log('Producto agregado' + cantidad)
  }
  return (
    <div className="card-producto">
      <div className="contenido-card">
        <div className="imagen">
          <Lupa img={img} />
        </div>
        <div className="info">
          <h3>{nombre}</h3>
          <p>Precio: ${precio}</p>
          <p>ID: {id}</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis fuga saepe porro a perspiciatis ipsa recusandae facere libero repudiandae unde deleniti, iure nulla. Pariatur voluptates aperiam dolore error officia possimus?
          </p>
          {
            agregarCantidad > 0 ? (<Link to='/cart'> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock}
              funcionAgregar={manejadorCantidad} />)
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
