const express = require('express');
const router = express.Router();
const auth = require('../middleWare/auth')
const productController = require('../Controller/Product');
router.post('/add',[auth],productController.addProduct);
router.get('/view',productController.viewProduct);
router.get('/delete-product/:id',productController.deleteProduct);
module.exports = router;