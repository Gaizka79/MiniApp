const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
    url: String
});

module.exports = mongoose.model('productos', productSchema);