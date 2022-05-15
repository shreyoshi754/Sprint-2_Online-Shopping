const express = require('express');
const auth = require('../middleWare/auth')
const router = express.Router();
const usersController = require('../Controller/User');
router.post('/signup', usersController.postSignup);
module.exports = router;
router.post('/login',usersController.postLogin);
router.get('/profile',[auth],usersController.getDetails);