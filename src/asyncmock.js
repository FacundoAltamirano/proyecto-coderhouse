const misProductos = [
    {id: 1, nombre:"BUSO", precio: 14999, img: "https://underwavebrand.com/wp-content/uploads/2025/03/DSC08397.jpg"},
    {id: 2, nombre:"REMERA", precio: 8999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03572-1.jpg"},
    {id: 3, nombre:"CAMPERA", precio: 24999, img: "https://underwavebrand.com/wp-content/uploads/2024/04/DSC09375-1.jpeg"},
    {id: 4, nombre:"JARDINERO", precio: 19999, img: "https://underwavebrand.com/wp-content/uploads/2025/02/DSC03282-1.jpg"},

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(misProductos)
        },2000)
    })
}