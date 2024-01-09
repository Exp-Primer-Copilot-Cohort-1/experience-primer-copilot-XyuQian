// Create web server

// Import modules

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

// Create comment
// POST /comment
router.post('/', auth, commentController.createComment);

// Get all comments
// GET /comment
router.get('/', auth, commentController.getAllComments);

// Get comment by id
// GET /comment/:id
router.get('/:id', auth, commentController.getCommentById);

// Update comment
// PUT /comment/:id
router.put('/:id', auth, commentController.updateComment);

// Delete comment
// DELETE /comment/:id
router.delete('/:id', auth, commentController.deleteComment);

module.exports = router;

// End of file