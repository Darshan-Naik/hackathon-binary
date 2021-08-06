const express = require('express');
const News = require('../Model/news.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {

        let allNews = await News.find().sort({ dateTime: -1 }).lean().exec();

        return res.status(200).json({ data: allNews });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." })
    }
});

router.post('/', async (req, res) => {
    try {

        let newsCreated = await News.create(req.body);

        return res.status(201).json({ data: newsCreated });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." })
    }
});

module.exports = router;