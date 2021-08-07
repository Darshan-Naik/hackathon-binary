const { model, Schema } = require('mongoose');

const blogSchema = new Schema(
    {
        authorId: {
            type: Schema.Types.ObjectId,
            ref: 'mentor',
            required: true
        },
        title: { type: String, required: true },
        category: { type: String, required: true },
        body: { type: String, required: true },
        imageUrl: { type: String }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Blog = model('blog', blogSchema);

module.exports = Blog;