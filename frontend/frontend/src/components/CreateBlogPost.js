import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateBlogPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/blog-post', formData);
      console.log(res.data); // handle redirection or success message
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" name="title" value={formData.title} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter content" name="content" value={formData.content} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Post
      </Button>
    </Form>
  );
};

export default CreateBlogPost;
