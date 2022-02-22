const express = require('express');
const controller = require('../controllers/storyController');
const router = express.Router();

//GET /stories send all stories to the user

router.get('/', controller.index);

//GET  /stories/new send html form for creating new story
router.get('/new',controller.new);

//POST /stories: creates a new story
router.post('/',controller.create);

//GET /stories/:id : send details of story identift by id
router.get('/:id', controller.show);

//GET /stories/:id/edit: send html form for editing an existing story
router.get('/:id/edit', controller.edit);

//PUT /stories/:id : update the story identfied by id
router.put('/:id', controller.update);

//DELETE /stories/:id  : delete the story identified by the id
router.delete('/:id',controller.delete);

module.exports = router;