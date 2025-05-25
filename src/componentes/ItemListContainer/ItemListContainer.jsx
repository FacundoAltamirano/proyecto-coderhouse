import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
// import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");

    const q = idCategoria
      ? query(productosRef, where("idCat", "==", idCategoria))
      : productosRef;

    getDocs(q)
      .then((res) => {
        const nuevoProducto = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(nuevoProducto);
      })
      .catch((error) => console.log("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [idCategoria]);

  return (
    <>
      <h2> Mis Productos </h2>
      {loading ? <Spinner /> : <ItemList productos={productos} />}
    </>
  );
};

export default ItemListContainer;
