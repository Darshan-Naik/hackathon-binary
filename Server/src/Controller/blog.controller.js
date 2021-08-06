const express = require('express');
const Blog = require('../Model/blog.model');
const router = express.Router();

// To get all the blogs;
router.get('/', async (req, res) => {
    try {

        let allBlogs = await Blog.find().populate('authorId').lean().exec();

        if (!allBlogs) {
            return res.status(401).json({ status: "Error", message: "No blogs to show, Come again later." });
        }

        return res.status(200).json({ data: allBlogs });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
});

// To create a new blog;
router.post('/', async (req, res) => {
    try {

        let blogPost = await Blog.create(req.body);

        return res.status(201).json({ data: blogPost });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
});

module.exports = router;