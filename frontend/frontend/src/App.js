//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Router
//import { Routes, Route } from 'react-router-dom';
//import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Register from './components/Register';
import CreateBlogPost from './components/CreateBlogPost';
import ReadPosts from './components/ReadPosts';
import API from './components/API'; // Import the API component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/create-post" component={CreateBlogPost} />
        <Route path="/read-posts" component={ReadPosts} />
        <Route path="/api-docs" component={API} /> {/* Define the route for the API component */}
      </Routes>
    </Router>
  );
};

export default App;