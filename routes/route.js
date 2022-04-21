const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', controllers.getIndex);
router.get('/productos', controllers.getProductos);
router.post('/', controllers.postProduct);


module.exports = router;