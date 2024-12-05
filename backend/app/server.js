const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS to allow frontend requests
app.use(express.json());

// Sample blog data (can be replaced by database in the future)
const blogs = [
  { id: 1, title: "Blog Post 1", content: "This is the content of the first blog." },
  { id: 2, title: "Blog Post 2", content: "This is the content of the second blog." },
  { id: 3, title: "Blog Post 3", content: "This is the content of the third blog." },
  { id: 4, title: "Blog Post 4", content: "This is the content of the fourth blog." },
  { id: 5, title: "Blog Post 5", content: "This is the content of the fifth blog." },
];

// API route to get all blogs
app.get('/api/posts', (req, res) => {
  res.json(blogs);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
