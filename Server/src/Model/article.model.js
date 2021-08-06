const { model, Schema } = require('mongoose');

const articleSchema = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        category: { type: String, required: true },
        likes: [
            { type: Number }
        ],
        comments: [
            { type: String }
        ]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Article = model('article', articleSchema);

module.exports = Article;