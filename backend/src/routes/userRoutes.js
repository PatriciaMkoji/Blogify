/* Tracks user's read blog posts */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* Route to Track user's read blog posts */
router.post('/user/:userID/blog/:blogPostId/read', userController.trackReadBlogPost);

module.exports = router;
