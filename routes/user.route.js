const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

router.get('/', (req, res) => {
  res.send('Hello from user route!');
});

router.post('/', userController.handleUserSignup);
router.post('/login', userController.handleUserLogin);

module.exports = router;