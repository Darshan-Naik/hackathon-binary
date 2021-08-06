const express = require("express");
const cors = require("cors");
const articleController = require("./Controller/article.controller");
const blogController = require("./Controller/blog.controller");
const studentController = require("./Controller/student.controller");
const { signUp, logIn } = require('./Controller/mentorAuth.controller');

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
    // origin:"*"
}));

app.use(express.json());

app.use("/mentor/signup", signUp);
app.use("/mentor/login", logIn);

app.use('/students', studentController);
app.use('/blogs', blogController);
app.use('/articles', articleController);

module.exports = app;