#!/usr/bin/node
/* Entry point to application */

const express = require('express');
const app = express(); /*Creates a web app using Express Framework */

/* Middleware function in Express that parses incoming reqs with JSON */
app.use(express.json());

/* Routes */
app.use('/api/users', require('./routes/userRoutes'));

/* Start the server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});
