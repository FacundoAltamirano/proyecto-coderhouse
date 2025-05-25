import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartItem = ({item,cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

    return (
      <div className="card rounded-3 bg-dark text-light p-3 mb-3">
        <div className="card-body">
          <h4 className="card-title">{item.nombre}</h4>
          <p className="card-text">Cantidad: {cantidad}</p>
          <p className="card-text">Precio: ${item.precio}</p>
          <button
            onClick={() => eliminarProducto(item.id)}
            className="btn  btn-sm rounded-pill"
          >
            Eliminar
          </button>
        </div>
      </div>
    );
}

export default CartItem