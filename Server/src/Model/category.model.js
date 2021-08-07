const { model, Schema } = require('mongoose');

const categoryModel = new Schema(
    {
        name: {type: String, require: true},
        growth: {type: String, require: true},
        icon: {type: String, require: true},
        popularity: {type: Number, require: true},
        category: {type: String, require: true},
        beginnerSalary: {type: Number, require: true},
        careerTimespan: {type: Number, require: true},
        courseDuration: {type: Number, require: true},
        experienceSalary: {type: Number, require: true},
        preference: {type: Number, require: true},
        description: {type: String, require: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Category = model('categories', categoryModel);

module.exports = Category;