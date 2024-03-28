#!/usr/bin/node
/* Handles user related operations in backend */

const User = require('../models/User');

/* Controller function to track user;s read blog posts */
const trackReadBlogPost = async (req, res) => {
  try {
    const { userId, blogPostId } = req.params;

    /* Creates a new UserBlogPos document to track the read blog post */
    const userBlogPost = new UserBlogPost({
      user: userId,
      blogPost: blogPostId
    });

    /* Save the UserBlogPost document to database */
    await userBlogPost.save();

    res.status(200).json({ message: 'Blog post read sucessfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  trackReadBlogPost
};
