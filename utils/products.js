const db = require('../models/schema');

const createProduct = (producto) => {
    let newProduct = {
        nombre: producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion,
        url: producto.img
    }
    return newProduct;
}

const verPoductos = async () => {
    try {        
        let getProductos = await db.find({});
        return getProductos;
    }
    catch (err) {
        throw err;
    }
}

const products = {
    createProduct,
    verPoductos
}

module.exports = products;