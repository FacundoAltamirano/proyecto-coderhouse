import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);


  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true)
    const funcionProducto = idCategoria ? getProductosPorCategoria : getProductos;
    funcionProducto(idCategoria)
      .then((respuesta) => setProductos(respuesta))
      .finally(() => setLoading(false));
  }, [idCategoria])



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
