const express = require('express');
const router = express.Router();
const { getPosts, getPostById, createPost } = require('../models/post');

router.get('/posts', (req, res) => res.json(getPosts()));
router.get('/posts/:id', (req, res) => {
    const post = getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
});
router.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const newPost = createPost(title, content);
    res.status(201).json(newPost);
});

module.exports = router;
