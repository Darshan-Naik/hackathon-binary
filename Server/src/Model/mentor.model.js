const { model, Schema } = require('mongoose');

const mentorSchema = new Schema(
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

const Mentor = model("mentor", mentorSchema);
module.exports = Mentor;