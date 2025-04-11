const misProductos = [
    { id: 1, nombre: "BUSO", stock: 12, precio: 14999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC08397.jpg", idCat: "invierno" },
    { id: 2, nombre: "REMERA", stock: 20, precio: 8999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03572-1.jpg", idCat: "verano" },
    { id: 3, nombre: "CAMPERA", stock: 28, precio: 24999, img: "https://underwavebrand.com/wp-content/uploads/2024/04/DSC09375-1.jpeg", idCat: "invierno" },
    { id: 4, nombre: "JARDINERO", stock: 10, precio: 19999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03282-1.jpg", idCat: "invierno" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === parseInt(id));
            resolve(producto)
        }, 1000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}