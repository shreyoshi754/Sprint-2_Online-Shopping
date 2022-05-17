const express = require('express');
const router = express.Router();
const auth = require('../middleWare/auth')
const cartController = require('../Controller/Cart')
router.post("/addtocart/:id",[auth],cartController.addCart)
router.get("/viewcart",[auth],cartController.viewCart)

module.exports = router;