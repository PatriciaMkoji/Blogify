import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReadPosts = () => {
  const [readPosts, setReadPosts] = useState([]);

  useEffect(() => {
    const fetchReadPosts = async () => {
      try {
        const res = await axios.get('/api/users/read-posts');
        setReadPosts(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };
    fetchReadPosts();
  }, []);

  return (
    <div>
      <h1>Read Posts</h1>
      <ul>
        {readPosts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReadPosts;
