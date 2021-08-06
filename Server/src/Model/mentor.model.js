const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const mentorSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true, minLength: 6},
    specalization: {type: Array}
},{
    timestamps: true 
})

const Mentor = mongoose.model("mentor", mentorSchema);
module.exports = Mentor;