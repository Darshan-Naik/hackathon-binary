const express = require("express");
const ChatBox = require("../Model/chatbox.model");
const router = express.Router();

router.get("/", async (req, res) => {
    let {mentor, student} = req.body;
    //console.log(mentorId, studentId);
    const toData = await ChatBox.findOne({
      authors: { $all: [mentor, student] },
    });
    return res.status(201).send({ data: toData||[] });
});
  
router.post("/", async (req, res) => {
    const {mentor, student,text,author,time,name} = req.body;
    const payload = {
        text,
        name,
        authorId: author,
        time
    }
    const toData = await ChatBox.findOne({
      authors: { $all: [mentor, student] },
    });
    if(toData){
        await ChatBox.findOneAndUpdate({ _id: toData._id }, 
        { $push: { messages: payload  } })
    } else {
        await ChatBox.create({authors: [mentor, student], messages: [payload]});
    }
    return res.status(201).send({status: "sent"});
});
  
module.exports = router;