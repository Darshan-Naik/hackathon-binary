const { model, Schema } = require('mongoose');

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    connect: { type: String },
    connectStatus: { type: Boolean },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, minLength: 6 },
    interest: [{ type: String }],
    profilePic: { type: String },
    location: { type: String },
    jobTitle: { type: String },
    phone: { type: Number },
    birthday: { type: String },
    address: { type: String },
    gender: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Student = model('student', studentSchema);

module.exports = Student;