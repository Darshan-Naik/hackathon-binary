const { model, Schema } = require('mongoose');

const mentorSchema = new Schema(
<<<<<<< HEAD
  {
    name: { type: String, require: true },
    connect: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, minLength: 6 },
    specialization: [{ type: String, required: true }],
    profilePic: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
=======
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true, minLength: 6 },
        specialization: [
            { type: String, required: true }
        ],
        profilePic: { type: String },
        company: {type: String, require: true },
        location: {type: String, require: true},
        jobTitle: {type: String, require: true},
        rating: {type: Number, require: true}, 
        phone: {type: Number, require: true},
        birthday: {type: String, require: true},
        address: {type: String, require: true},
        gender: {type: String, require: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)
>>>>>>> 5fbb6f634c34bc189f0af129a42d783d13cbe8bf

const Mentor = model("mentor", mentorSchema);
module.exports = Mentor;