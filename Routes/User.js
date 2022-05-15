const express = require('express');
const router = express.Router();
const usersController = require('../Controller/User');
router.post('/signup', usersController.postSignup);
module.exports = router;