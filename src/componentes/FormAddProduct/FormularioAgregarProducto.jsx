import { useState } from "react";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/config";
import './FormularioAgregarProducto.css';

const FormularioAgregarProducto = ({ onProductoAgregado }) => {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    stock: "",
    idCat: "",
    img: "",
  });

  const agregarProducto = async () => {
    const productosRef = collection(db, "productos");

    if (
      nuevoProducto.nombre &&
      nuevoProducto.precio &&
      nuevoProducto.stock &&
      nuevoProducto.idCat &&
      nuevoProducto.img
    ) {
      try {
        const docRef = await addDoc(productosRef, nuevoProducto);
        await updateDoc(docRef, { id: docRef.id });

        console.log(
          `Producto "${nuevoProducto.nombre}" agregado con ID: ${docRef.id}`
        );

        setNuevoProducto({
          nombre: "",
          precio: "",
          stock: "",
          idCat: "",
          img: "",
        });

        if (onProductoAgregado) {
          onProductoAgregado();
        }
      } catch (error) {
        console.error("Error al agregar producto:", error);
      }
    } else {
      alert("Por favor completá todos los campos.");
    }
  };

  return (
    <div className="admin-formulario">
  <h5 className="form-titulo">Agregar nuevo producto:</h5>
  <div className="form-campos">
    <input
      type="text"
      placeholder='Nombre (ej: "Remera Classic")'
      value={nuevoProducto.nombre}
      onChange={(e) =>
        setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
      }
      className="form-input bg-dark text-white"
    />
    <input
      type="number"
      placeholder="Precio (ej: 9999)"
      value={nuevoProducto.precio}
      onChange={(e) =>
        setNuevoProducto({
          ...nuevoProducto,
          precio: parseInt(e.target.value),
        })
      }
      className="form-input bg-dark text-white"
    />
    <input
      type="number"
      
      placeholder="Stock (ej: 15)"
      value={nuevoProducto.stock}
      onChange={(e) =>
        setNuevoProducto({
          ...nuevoProducto,
          stock: parseInt(e.target.value),
        })
      }
      className="form-input bg-dark text-white"
    />
    <select
  value={nuevoProducto.idCat}
  onChange={(e) =>
    setNuevoProducto({ ...nuevoProducto, idCat: e.target.value })
  }
  className="form-input bg-dark text-white"
>
  <option value="invierno">Invierno</option>
  <option value="verano">Verano</option>
</select>

    <input
      type="text"
      placeholder="URL de la imagen"
      value={nuevoProducto.img}
      onChange={(e) =>
        setNuevoProducto({ ...nuevoProducto, img: e.target.value })
      }
      className="form-input bg-dark text-white"
    />
    <button onClick={agregarProducto} className="form-btn">
      Agregar producto
    </button>
  </div>
</div>

  );
};

export default FormularioAgregarProducto;
