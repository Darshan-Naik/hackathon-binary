const express = require('express');
const Organization = require('../Model/organization.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {

        let query = req.query.q;
        let allOrganizations;

        if (query) {
            allOrganizations = await Organization.find({ category: query }).lean().exec();

            return res.status(200).json({ data: allOrganizations });
        }

        allOrganizations = await Organization.find().lean().exec();

        return res.status(200).json({ data: allOrganizations });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
});

router.post('/', async (req, res) => {
    try {

        let organizationCreated = await Organization.create(req.body);

        return res.status(201).json({ data: organizationCreated });

    } catch (error) {
        return res.status(500).json({ status: "Failed", message: "Something went wrong." });
    }
});

module.exports = router;