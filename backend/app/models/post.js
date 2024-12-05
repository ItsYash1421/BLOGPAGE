let posts = [];
let id = 0;

const getPosts = () => posts;
const getPostById = (postId) => posts.find((post) => post.id === parseInt(postId));
const createPost = (title, content) => {
    const newPost = { id: ++id, title, content };
    posts.push(newPost);
    return newPost;
};

module.exports = { getPosts, getPostById, createPost };
