import React, { useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Content:</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreatePost;
