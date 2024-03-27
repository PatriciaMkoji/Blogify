#!/usr/bin/node
/* Implement CRUD operations for blog post */

// imports the 'BlogPost' model in this file
const BlogPost = require('../models/BlogPost');

/* Create a new blog post */
const createBlogPost = async (req, res) => {
  try {
    const {title, content, author } = req.body; /* extracts from request body*/
    const blogPost = await BlogPost.create({ title, content, author });
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* Read all blog post */
const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blogpost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({error: error.message });
  }
};

/* Read a single blogpost by ID */
const getBlogPostById = async (req, res) => {
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
};

/* Update blogpost by Id */
const updateBlogPost = async(req, res) => {
  try {
    const {id} = req.params;
    const {title, content} = req.body;
	  const updatedBlogPost = await BlogPost.findByIdandUpdate(id, {title, content}, {new: true});
if (!updatedBlogPost) {
    return res.status(404).json({message: 'Blog post not found'});
  }
  res.status(200).json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

/* Delete blogpost by Id */
const deleteBlogPost = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedBlogPost) = await BlogPost.findByIdAndDelete(id);
    if (!deletedBlogPost) {
      return res.status(404).json({message: 'Blog post not found'});
    }
    res.status(200).json({message: 'Blogpost Deleted Succesfully'});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

/* Exports th object containing multiple functions */
module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostsById,
    updateBlogPost,
    deleteBlogPost
};
