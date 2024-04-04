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
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await User.create({ username, email, password: hashedPassword})
      res.status(201).json({ msg: 'user created', user})

    } catch (error) {
      if (error.code === 11000){
        res.status(409).json({ msg: 'user exist'})
      }
      res.status(500).json({ msg: 'Server error'})
      console.log(error)
    }
  } catch (error) {
    console.log(error)
  }
});

/* SignIn Route */
router.post('/signin', async (req, res) => {
  try {
    const {email, password} = req.body;

    /* Check is User exists */
    const user = await User.findOne({email});
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
    res.cookie('token', token, { httpOnly: true })
    res.status(200).json({token});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

/* Sign Out */
router.get('/logout', async (req, res) => {
  try {
    // Clear the JWT cookie
    res.clearCookie('token');
    res.status(201).json({ message: 'Successfully logged out' }); // Render logout page
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging out' });
  }
});


module.exports = router;
