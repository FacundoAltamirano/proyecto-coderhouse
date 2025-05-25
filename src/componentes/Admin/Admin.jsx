import {collection,addDoc,updateDoc,doc,getDocs,deleteDoc} from "firebase/firestore";
import { db } from "../../services/config";
import { useState, useEffect } from "react";
import FormularioAgregarProducto from "../FormAddProduct/FormularioAgregarProducto";
import './Admin.css';

const misProductos = [
  {  nombre: "Hoodie Andes Fleece", stock: 12, precio: 14999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC08397.jpg", idCat: "invierno" },
  {  nombre: "Remera Basic Shore White", stock: 20, precio: 8999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03572-1.jpg", idCat: "verano" },
  {  nombre: "Campera Stormshell Grey", stock: 28, precio: 24999, img: "https://underwavebrand.com/wp-content/uploads/2024/04/DSC09375-1.jpeg", idCat: "invierno" },
  {  nombre: "Overol Patagonia Canvas", stock: 10, precio: 19999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03282-1.jpg", idCat: "invierno" },
  { nombre: "Chaleco Wendbar Reversible", stock: 15, precio: 22999, img: "https://underwavebrand.com/wp-content/uploads/2025/05/DSC03541-1-710x1065.jpg", idCat: "invierno" },
  { nombre: "Pantalón Taiwan Camuflado", stock: 18, precio: 17999, img: "https://underwavebrand.com/wp-content/uploads/2025/04/DSC03427-1-710x1184.jpg", idCat: "invierno" },
  { nombre: "Remera Manga Larga", stock: 25, precio: 10999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC04489-1-710x1065.jpg", idCat: "verano" },
  { nombre: "Bermudas Doppio Brown", stock: 20, precio: 9999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03152-2-710x1136.jpg", idCat: "verano" },
  { nombre: "Hoodie Denim", stock: 10, precio: 18999, img: "https://underwavebrand.com/wp-content/uploads/2024/07/DSC06263-2-1-710x1136.jpg", idCat: "invierno" },
  { nombre: "Camisa Sprout Green", stock: 14, precio: 13999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03599-1-710x1065.jpg", idCat: "verano" },
  { nombre: "Pantalón Cargo Denim Black Washed", stock: 16, precio: 19999, img: "https://underwavebrand.com/wp-content/uploads/2024/05/DSC07313-1-710x1065.jpg", idCat: "invierno" },
  { nombre: "Bermuda Ripper White", stock: 22, precio: 9499, img: "https://underwavebrand.com/wp-content/uploads/2024/10/DSC09318-1-710x1136.jpg", idCat: "verano" },
  { nombre: "Beanie Simpl.", stock: 30, precio: 4999, img: "https://underwavebrand.com/wp-content/uploads/2025/04/DSC-0121-1-710x1065.jpg", idCat: "invierno" },
  { nombre: "Remera Oversize Huemul Pink Washed", stock: 26, precio: 9999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC00291-1-710x1065.jpg", idCat: "verano" },
  { nombre: "Sweater Chalten Black", stock: 13, precio: 17999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC04698-1-710x1065.jpg", idCat: "invierno" },
];

const Admin = () => {
  const [productos, setProductos] = useState([]);

  const subirProductos = async () => {
    const productosRef = collection(db, "productos");
  
    try {
      const snapshot = await getDocs(productosRef);
      const productosExistentes = snapshot.docs.map(doc => doc.data());
  
      for (const producto of misProductos) {
        const yaExiste = productosExistentes.some(p => p.nombre === producto.nombre);
  
        if (!yaExiste) {
          const docRef = await addDoc(productosRef, producto);
          await updateDoc(docRef, { id: docRef.id });
          console.log(`Producto "${producto.nombre}" subido con ID: ${docRef.id}`);
        } else {
          console.log(`Producto "${producto.nombre}" ya existe`);
        }
      }
      obtenerProductos();
    } catch (error) {
      console.error("Error al subir productos:", error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      const productoRef = doc(db, "productos", id);
      await deleteDoc(productoRef);
      console.log(`Producto con ID ${id} eliminado`);
      obtenerProductos(); 
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };
  

  const obtenerProductos = async () => {
    try {
      const productosRef = collection(db, "productos");
      const snapshot = await getDocs(productosRef);
      const productosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productosData);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div className="admin-container">
      <button onClick={subirProductos} className="admin-upload-button">
      Subir productos a Firestore
    </button>
    
    <FormularioAgregarProducto onProductoAgregado={obtenerProductos} />
  
    
  
    <div className="admin-product-list">
      <h3>Productos en Firestore:</h3>
      {productos.length > 0 ? (
        <ul className="admin-ul">
          {productos.map((producto) => (
            <li key={producto.id} className="admin-product-card">
              <img
                src={producto.img}
                alt={producto.nombre}
                className="admin-product-image"
              />
              <button
                onClick={() => eliminarProducto(producto.id)}
                className="admin-delete-button"
              >
                ELIMINAR
              </button>
              <h5>{producto.nombre}</h5>
              <h6>${producto.precio}</h6>
              <h6>Stock: {producto.stock}</h6>
              <h6>{producto.idCat}</h6>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos cargados todavía.</p>
      )}
    </div>
  </div>
  
  );
};

export default Admin;
