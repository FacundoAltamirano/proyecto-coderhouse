import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    getUnProducto(id)
      .then((respuesta) => {
        console.log('Producto cargado:', respuesta);
        setProducto(respuesta)
      })
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div>
      {
        loading ? <Spinner /> :
          <ItemDetail {...producto} />}

    </div>
  )
}

export default ItemDetailContainer
