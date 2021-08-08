const { model, Schema } = require('mongoose');

const organizationSchema = new Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: true },
        imageUrl: { type: String },
        likes: { type: Number },
        comments: [
            { type: String }
        ]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Organization = model('organization', organizationSchema);

module.exports = Organization;