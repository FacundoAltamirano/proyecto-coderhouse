const misProductos = [
    { id: 1, nombre: "Hoodie Andes Fleece", stock: 12, precio: 14999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC08397.jpg", idCat: "invierno" },
    { id: 2, nombre: "Remera Basic Shore White", stock: 20, precio: 8999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03572-1.jpg", idCat: "verano" },
    { id: 3, nombre: "Campera Stormshell Grey", stock: 28, precio: 24999, img: "https://underwavebrand.com/wp-content/uploads/2024/04/DSC09375-1.jpeg", idCat: "invierno" },
    { id: 4, nombre: "Overol Patagonia Canvas", stock: 10, precio: 19999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03282-1.jpg", idCat: "invierno" },
    { id: 5, nombre: "Chaleco Wendbar Reversible", stock: 15, precio: 22999, img: "https://underwavebrand.com/wp-content/uploads/2025/05/DSC03541-1-710x1065.jpg", idCat: "invierno" },
    { id: 6, nombre: "Pantalón Taiwan Camuflado", stock: 18, precio: 17999, img: "https://underwavebrand.com/wp-content/uploads/2025/04/DSC03427-1-710x1184.jpg", idCat: "invierno" },
    { id: 7, nombre: "Remera Manga Larga", stock: 25, precio: 10999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC04489-1-710x1065.jpg", idCat: "verano" },
    { id: 8, nombre: "Bermudas Doppio Brown", stock: 20, precio: 9999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03152-2-710x1136.jpg", idCat: "verano" },
    { id: 9, nombre: "Hoodie Denim", stock: 10, precio: 18999, img: "https://underwavebrand.com/wp-content/uploads/2024/07/DSC06263-2-1-710x1136.jpg", idCat: "invierno" },
    { id: 10, nombre: "Camisa Sprout Green", stock: 14, precio: 13999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03599-1-710x1065.jpg", idCat: "verano" },
    { id: 11, nombre: "Pantalón Cargo Denim Black Washed", stock: 16, precio: 19999, img: "https://underwavebrand.com/wp-content/uploads/2024/05/DSC07313-1-710x1065.jpg", idCat: "invierno" },
    { id: 12, nombre: "Bermuda Ripper White", stock: 22, precio: 9499, img: "https://underwavebrand.com/wp-content/uploads/2024/10/DSC09318-1-710x1136.jpg", idCat: "verano" },
    { id: 13, nombre: "Beanie Simpl.", stock: 30, precio: 4999, img: "https://underwavebrand.com/wp-content/uploads/2025/04/DSC-0121-1-710x1065.jpg", idCat: "invierno" },
    { id: 14, nombre: "Remera Oversize Huemul Pink Washed", stock: 26, precio: 9999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC00291-1-710x1065.jpg", idCat: "verano" },
    { id: 15, nombre: "Sweater Chalten Black", stock: 13, precio: 17999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC04698-1-710x1065.jpg", idCat: "invierno" },
];


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