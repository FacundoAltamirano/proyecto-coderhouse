import React, { useEffect, useState } from 'react'
// import { getUnProducto } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { db } from '../../services/config';
import { getDoc , doc} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db,"productos", id)

    getDoc(nuevoDoc)
    .then(res => {
      const data = res.data()
      const nuevoProducto = {id: res.id, ...data}
      setProducto(nuevoProducto)
      })
      .catch(error => console.log(error))
  
  }, [id])
  
  // useEffect(() => {
  //   setLoading(true)
  //   getUnProducto(id)
  //     .then((respuesta) => {
  //       console.log('Producto cargado:', respuesta);
  //       setProducto(respuesta)
  //     })
  //     .finally(() => setLoading(false))
  // }, [id])

  return (
    <div>
      {
        loading ? <Spinner /> :
          <ItemDetail {...producto} />}

    </div>
  )
}

export default ItemDetailContainer
