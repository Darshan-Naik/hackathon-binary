const express = require('express');
const Mentor = require('../Model/mentor.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {

        let query = req.query.q;

        let allMentors = await Mentor.find({ specialization: query.toLowerCase() }).lean().exec();

        if (allMentors.length === 0) {
            return res.status(401).json({ status: "Error", message: "No mentors in this field." });
        }

        return res.status(200).json({ data: allMentors });


    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
});

module.exports = router;