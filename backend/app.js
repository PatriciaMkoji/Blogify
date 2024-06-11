const express = require('express');
const app = express(); /*Creates a web app using Express Framework */
const connectdb = require('./src/routes/db');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const session = require('express-session');

connectdb()
/* Middleware function in Express that parses incoming reqs with JSON */
app.use(express.json());

app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/blogDb'
    })
}));

/* Error handling middleware */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Somwthing went wrong!');
});

/* Routes*/
app.use('/api/users', require('./src/controllers/authController'));
app.use('/api/blogpost', require('./src/controllers/blogPostController'));
app.use('/api/signup', require('./src/controllers/authController'));

/* Start the Server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});