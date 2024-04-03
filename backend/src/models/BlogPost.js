/* Implements Schema & Model defination for blog posts */

const mongoose = require('mongoose');

/* Schema Defination for Blog posts */
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', //Refer to User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/* Creating a Modl for blog posts */
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
