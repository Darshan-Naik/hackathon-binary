const express = require("express");
const ChatBox = require("../Model/chatbox.model");
const router = express.Router();

router.get("/", async (req, res) => {

    let { sender, receiver } = req.query;

    const toData = await ChatBox.findOne({
        authors: { $all: [sender, receiver] },
    });

    return res.status(201).send({ data: toData.messages || [] });
});
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  const Data = await ChatBox.find({ authors: id },);
  return res.status(201).send({ data });
});

router.post("/", async (req, res) => {

    const { mentor, student, text, authorId, time, name } = req.body;

    const payload = {
        text,
        name,
        authorId,
        time
    }

    const toData = await ChatBox.findOne({
        authors: { $all: [mentor, student] },
    });

    if (toData) {
        await ChatBox.findOneAndUpdate({ _id: toData._id },
            { $push: { messages: payload } })
    } else {
        await ChatBox.create({ authors: [mentor, student], messages: [payload] });
    }

    return res.status(201).send({ status: "sent" });
});

module.exports = router;