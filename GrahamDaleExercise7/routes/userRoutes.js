const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.get('/new', controller.new);

router.post('/new', controller.create);

router.get('/login', controller.show);

router.post('/login', controller.request);

router.get('/profile', controller.profile);

router.get('/logout', controller.delete);

module.exports = router;