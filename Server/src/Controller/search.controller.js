const express = require('express');
const Article = require('../Model/article.model');
const Blog = require('../Model/blog.model');
const Mentor = require('../Model/mentor.model');
const News = require('../Model/news.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let query = req.query.q;

        let blogs = await Blog.find({ "category": { $eq: query.toLowerCase() } }).populate('authorId').sort({ "createdAt": -1 }).lean().exec();
        let articles = await Article.find({ "category": query.toLowerCase() }).sort({ "createdAt": -1 }).lean().exec();
        let news = await News.find({ "category": query.toLowerCase() }).sort({ "createdAt": -1 }).lean().exec();

        return res.status(200).json({ blogs, articles, news });
    } catch {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." })
    }
});

router.get('/mentors', async (req, res) => {
    try {

        let query = req.query.q;

        let mentors = await Mentor.find({ specialization: query.toLowerCase() }).lean().exec();

        return res.status(200).json({ data: mentors });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
})

module.exports = router;