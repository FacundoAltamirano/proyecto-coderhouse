import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, inicial, funcionAgregar }) => {

  const [contador, setContador] = useState(inicial)

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }
  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1)
    }
  }
  
  return (
    <div className="contador">
      <h1>Contador</h1>
      <button onClick={incrementar}> + </button>
      <p>{contador}</p>
      <button onClick={decrementar}> - </button>
      <div>
        <button onClick={() => funcionAgregar(contador)}>Añadir al carrito 🛒</button>
      </div>
    </div>
  )
}

export default ItemCount
