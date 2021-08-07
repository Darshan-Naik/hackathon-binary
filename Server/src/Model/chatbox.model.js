const { model, Schema } = require('mongoose');

const chatBoxModel = new Schema(
    {
        toId: {
            type: Schema.Types.ObjectId,
            ref: 'mentor',
            required: true
        },
        fromId: {
            type: Schema.Types.ObjectId,
            ref: 'student',
            required: true
        },
        messages: [
            {
                text: {type: String},
                authorId: {type: String},
                name: {type: String},
                time: {type: Date}
            }
        ]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const ChatBox = model('chatroom', chatBoxModel);

module.exports = ChatBox;