const express = require("express");
const ChatBox = require("../Model/chatbox.model");
const router = express.Router();

router.get("/", async (req, res) => {
    console.log(req.body)
    let {mentor, student} = req.body;
    //console.log(mentorId, studentId);
    const toData = await ChatBox.find({toId: mentor, fromId: student});

    if(!toData){
        const messageRoom = await ChatBox.create({toId: mentor, fromId: student, messages: []});
        return res.status(201).send({data: messageRoom});
    }
    return res.status(201).send({data: fromData})
});
  
router.patch("/", async (req, res) => {
    const messageData = await ChatBox.create(req.body);
    return res.status(201).send({data: messageData});
});
  
module.exports = router;