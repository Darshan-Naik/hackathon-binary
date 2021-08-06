const { model, Schema } = require('mongoose');

const newsSchema = Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        category: { type: String, required: true },
        imageUrl: { type: String }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const News = model('news', newsSchema);

module.exports = News;