const { model, Schema } = require('mongoose');

const newsSchema = Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        category: { type: String, required: true },
        dateTime: { type: String, required: true },
        imageUrl: { type: String }
    }
);

const News = model('new', newsSchema);

module.exports = News;