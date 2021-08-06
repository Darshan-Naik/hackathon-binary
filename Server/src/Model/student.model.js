const { model, Schema } = require('mongoose');

const studentSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true, minLength: 6 },
        interest: [
            { type: String }
        ]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Student = model('student', studentSchema);

module.exports = Student;