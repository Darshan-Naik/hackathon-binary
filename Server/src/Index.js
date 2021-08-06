const express = require("express");
const articleController = require("./Controller/article.controller");
const blogController = require("./Controller/blog.controller");
const studentController = require("./Controller/student.controller");
const app = express();

app.use(express.json());

app.use('/students', studentController);
app.use('/blogs', blogController);
app.use('/articles', articleController);

module.exports = app;