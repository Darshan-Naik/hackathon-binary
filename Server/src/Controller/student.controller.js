const express = require('express');
const Student = require('../Model/student.model');
const router = express.Router();


// To get a student based on the provided email;
router.post('/login', async (req, res) => {
    try {

        let student = await Student.findOne({ email: req.body.email }).lean().exec();

        if (!student) {
            return res.status(401).json({ status: "Error", message: "User doesn't exists." });
        }

        return res.status(200).json({ data: student });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
});

// To create a new student;
router.post('/register', async (req, res) => {
    try {

        let studentCreated = await Student.create(req.body);

        return res.status(201).json({ data: studentCreated });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
});

// To updated previous data;
router.patch('/:id', async (req, res) => {
    try {

        let studentId = req.params.id;

        let updatedStudentDetails = await Student.findByIdAndUpdate(studentId, req.body, { new: true }).lean().exec();

        return res.status(202).json({ data: updatedStudentDetails });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
})

module.exports = router;