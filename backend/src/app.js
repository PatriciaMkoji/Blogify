const express = require('express');
const app = express(); /*Creates a web app using Express Framework */

/* Middleware function in Express that parses incoming reqs with JSON */
app.use(express.json());

/* Routes */
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/blog-post', require('./routes/blogPostRoutes');


/* Database Connection */
mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

/* Error handling middleware */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Somwthing went wrong!');
});

/* Start the Server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
