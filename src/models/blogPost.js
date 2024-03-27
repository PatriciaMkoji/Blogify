#!/usr/bin/node

//Import mongoose library which is a MongoDB object modelling tool for Node.js
const mongoose = require('mongoose');

//Block defines the Schema for the blogpost
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
    ref: 'User', //Implement user model for authentication
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//Creates a Mongoose model named 'BlogPost'
//It's a class that represents collection of documents on MongoDB database
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

//Exports 'BlogPost' model so that it can be imported and used in other parts
module.exports = BlogPost;
