const express = require('express');
const Appointment = require('../Model/appointment.model');
const router = express.Router();

router.get('/:id', async (req, res) => {
    try {

        let mentorAppointment = await Appointment.find({ authorId: req.params.id }).populate('authorId').lean().exec();

        if (mentorAppointment.length === 0 || !mentorAppointment) {
            return res.status(401).json({ status: "Error", message: "No appointments available." });
        }

        return res.status(200).json({ data: mentorAppointment });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
})

router.post('/', async (req, res) => {
    try {

        let createAppointment = await Appointment.create(req.body);

        return res.status(201).json({ data: createAppointment });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
});

router.patch('/:id', async (req, res) => {
    try {

        let appointmentId = req.params.id;

        let updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, req.body, { new: true }).lean().exec();

        return res.status(202).json({ data: updatedAppointment });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
})

module.exports = router;