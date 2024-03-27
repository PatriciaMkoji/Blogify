#!/usr/bin/node
/* Handles the users registartion, SignUp & SignIn */

/* Imports necessary modules */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

/* Implement SignUp */
const signUp = async (req, res) => {
  try {
    const {username, email, password} = req.body;/*Extracts fieldsin req body*/
    let user = await User.findOne({email});
    if (user) {
      return res.status(400).json({message: 'User already Exists'});
    }
