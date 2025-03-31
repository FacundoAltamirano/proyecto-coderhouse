import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProductos } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [])


  return (
    <>
      <h2> Mis Productos </h2>
      {
        loading ? <Spinner /> :
          <ItemList productos={productos} />
      }

    </>
  )
}

export default ItemListContainer
