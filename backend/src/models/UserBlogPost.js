/* Implements functionality to track user's read blog posts */

const mongoose = require('mongoose');


/* Schema Defiation for tracking user's read blog posts */
const userBlogPostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  blogPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlogPost',
    required: true
  },
  readAt: {
    type: Date,
    default: Date.now
  }
});

/* Creates a model for tracking user's read blog posts */
const UserBlogPost = mongoose.model('UserBlogPost', userBlogPostSchema);

module.export = UserBlogPost;
