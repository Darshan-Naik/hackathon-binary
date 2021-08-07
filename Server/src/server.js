const express = require("express");
const cors = require("cors");
const articleController = require("./Controller/article.controller");
const blogController = require("./Controller/blog.controller");
const studentController = require("./Controller/student.controller");
const { signUp, logIn } = require('./Controller/mentorAuth.controller');
const newsController = require("./Controller/news.controller");
const category = require("./Controller/categories.controller");
const searchController = require("./Controller/search.controller");
const appointmentController = require("./Controller/appointment.controller");
const mentorController = require("./Controller/mentor.controller");
const chatboxController = require('./Controller/chatbox.controller');

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
    // origin:"*"
}));

app.use(express.json());

app.use("/category", category);
app.use("/mentor/signup", signUp);
app.use("/mentor/login", logIn);
app.use('/mentors', mentorController);
app.use('/mentor/appointment', appointmentController);
app.use('/chatbox', chatboxController);

app.use('/students', studentController);
app.use('/blogs', blogController);
app.use('/articles', articleController);

app.use('/news', newsController);

app.use('/search', searchController);

module.exports = app;