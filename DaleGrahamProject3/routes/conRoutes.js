const express = require('express');
const controller = require('../controllers/conController');
const router = express.Router();

//GET /connections: send all connections to users
router.get('/', controller.index);

// GET /connections/new: send html form for creating new connection
router.get('/new',controller.new);

//POST /connections: create a new connection
router.post('/', controller.create);

//GET /connections/:id : send details of connection identified by id
router.get('/:id',controller.show);

//GET /connections/:id/edit : send html form for editing existing connection
router.get('/:id/edit', controller.edit);

//PUT /connections/:id : update connection by id
router.put('/:id',controller.update);

//DELETE /connections/:id : delete a connection
router.delete('/:id', controller.delete);

module.exports = router;