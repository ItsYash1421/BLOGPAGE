import React, { useEffect, useState } from 'react';
import './App.css'; // CSS file for styling

function App() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog posts from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Blog</h1>
        <p>A simple blog page displaying posts from the backend.</p>
      </header>

      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-post">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
