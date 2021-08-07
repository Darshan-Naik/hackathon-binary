const express = require('express');
const Category = require('../Model/category.model');
const router = express.Router();

router.get("/", async (req, res) => {
    const allImg = await Category.find({}).sort({"popularity": -1}).lean().exec();
    return res.status(201).send({data: allImg});
})

router.post("/", async (req, res) => {
    const allImg = await Category.create(req.body);
    return res.status(201).send("Success");
})

module.exports = router