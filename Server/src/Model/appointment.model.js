const { model, Schema } = require('mongoose');

const appointmentSchema = new Schema(
    {
        authorId: {
            type: Schema.Types.ObjectId,
            ref: 'mentor',
            required: true
        },
        availability: [
            { type: Object }
        ]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Appointment = model('appointment', appointmentSchema);

module.exports = Appointment;