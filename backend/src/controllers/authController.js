#!/usr/bin/node
/* Routes */

/* Import necessary Modules */
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

/* SignUp Route */
router.post('/signup', async (req, res) => {
  try {
    const {username, email, password} = req.body;
  
    /* Check if the user already exists */
    let user = await User.findOne({email});
    if (user) {
      return res.status(400).json({message: 'User already exists'});
    }

    /* Password Hashing */
    const hashedPassword = await bcrypt.hash(password, 10);

    /* Create new User */
    user = new User({
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    /* Generate JWT token */
    const token = jwt.sign({ userId: user._id}, 'secretkey');
    res.status(201).json({token});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

/* SignIn Route */
router.post(/'signin' async (req, res) => {
  try {
    const {email, password} = req.body;

    /* Check is User exists */
    const user = await User.findOne({emai});
    if (!user) {
      return res.status(400).json({message: 'User not found'});
    }

    /* Compare Passwords if its correct */
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({message: 'Invalid Credentials'});
    }

    /* Generate JWT token */
    const token = jwt.sign({userId: user._id}, 'secretkey');

    res.status(200).json({token});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

module.export = router;
