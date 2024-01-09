// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Create routes
router.get('/', commentsController.index);
router.post('/', commentsController.create);
router.get('/:id', commentsController.show);
router.put('/:id', commentsController.update);
router.delete('/:id', commentsController.destroy);

// Export module
module.exports = router;

// End
