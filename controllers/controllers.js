const db = require('../models/schema');
const products = require('../utils/products');

const getIndex = (req, res) => {
    res.status(200).render('index');
}

const postProduct = async (req, res) => {
    let newProduct;
    try {
        newProduct = products.createProduct(req.body);
        await db.create(newProduct);
    }
    catch(err) {
        throw err;
    }
    res.status(200).send({ msg: `Producto ${newProduct.nombre}, creado OK!`});
}

const getProductos = async(req, res) => {
    try {
        let productos = await products.verPoductos();
        res.status(200).render('productos', {productos});
    }
    catch (err) {
        throw err;
    }
}

const controllers = {
    getIndex,
    postProduct,
    getProductos
};

module.exports = controllers;