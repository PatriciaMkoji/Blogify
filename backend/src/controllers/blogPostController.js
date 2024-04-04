//#!/usr/bin/node
/* Implement CRUD operations for blog post */
const express = require('express');
const router = express.Router();
const User = require('../models/User')

// imports the 'BlogPost' model in this file
const BlogPost = require('../models/BlogPost');

/* Create a new blog post */
router.post('/blog/post', async (req, res) => {
  try {
    const {title, content, author:email } = req.body; /* extracts from request body*/
    const user = await User.findOne({email})
    if (!user) {
      return res.status(404).json({ error: 'Author not found' });
    }
    const blogPost = await BlogPost.create({ title, content, author:email });
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* Retrieve all blog post */
router.get('/blog/all', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({error: error.message });
  }
});

/* Retrieve a single blogpost by ID */
router.get('/blog/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res.status(404).json({message: 'Blog post not found'});
  }
    res.status(200).json(blogPost);
  } catch(error) {
    res.status(500).json({error: error.message});
  }
});

/* Update blogpost by Id */
router.put('/blog/update/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const {title, content} = req.body;
	  const updatedBlogPost = await BlogPost.findByIdAndUpdate(id, {title, content}, {new: true});
if (!updatedBlogPost) {
    return res.status(404).json({message: 'Blog post not found'});
  }
  res.status(200).json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

/* Delete blogpost by Id */
router.delete('/blog/delete/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedBlogPost) {
      return res.status(404).json({message: 'Blog post not found'});
    }
    res.status(200).json({message: 'Blogpost Deleted Succesfully'});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

/* Exports the router object */
module.exports = router;