const express = require('express');
const Article = require('../Model/article.model');
const router = express.Router();

// To get all articles;
router.get('/', async (req, res) => {
    try {

        let allArticles = await Article.find().lean().exec();

        if (!allArticles) {
            return res.status(401).json({ status: "Failed", message: "No articles to show, Come again later." });
        }

        return res.status(200).json({ data: allArticles });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
})

// To create a new Article;
router.post('/', async (req, res) => {
    try {

        let articleCreated = await Article.create(req.body);

        return res.status(201).json({ data: articleCreated });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
});

// To updated an Article;
router.patch('/:id', async (req, res) => {
    try {

        let articleId = req.params.id;

        let updatedArticle = await Article.findByIdAndUpdate(articleId, req.body, { new: true }).lean().exec();

        return res.status(202).json({ data: updatedArticle });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
})

module.exports = router;