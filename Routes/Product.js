const express = require('express');
const router = express.Router();
const productController = require('../Controller/Product');
router.post('/add',productController.addProduct);
router.get('/view',productController.viewProduct);
module.exports = router;