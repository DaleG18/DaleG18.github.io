const express = require('express');
const controller = require('../controllers/conController');
const router = express.Router();
const {isLoggedIn, isAuthor} = require('../middleware/auth');
const{validateId,validateConnect, validateResult} = require('../middleware/validator');

//GET /connections: send all connections to users
router.get('/', controller.index);

// GET /connections/new: send html form for creating new connection
router.get('/new', isLoggedIn,controller.new);

//POST /connections: create a new connection
router.post('/', isLoggedIn, validateConnect,validateResult, controller.create);

//GET /connections/:id : send details of connection identified by id
router.get('/:id', validateId,controller.show);

//GET /connections/:id/edit : send html form for editing existing connection
router.get('/:id/edit',validateId, isLoggedIn,isAuthor, controller.edit);

//PUT /connections/:id : update connection by id
router.put('/:id',validateId,validateConnect, isLoggedIn, isAuthor,controller.update);

//DELETE /connections/:id : delete a connection
router.delete('/:id',validateId, isLoggedIn, isAuthor, controller.delete);

//POST /connections/:id/rsvp : succesful rsvp of connection
router.post('/:id/rsvp',validateId, isLoggedIn, controller.rsvp);

module.exports = router;