const express = require('express');
const controller = require('../controllers/mainController');
const router = express.Router();

//GET /connections: index page
router.get('/', controller.index);

// GET /about : shows infromation about website
router.get('/about',controller.about);

// GET /contact: shows contact information
router.get('/contact',controller.contact);

module.exports = router;