const { model, Schema } = require('mongoose');

const categoryModel = new Schema(
    {
        name: {type: String, require: true},
        growth: {type: String, require: true},
        icon: {type: String, require: true},
        popularity: {type: Number, require: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Category = model('categories', categoryModel);

module.exports = Category;