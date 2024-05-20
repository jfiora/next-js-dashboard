import mongoose, { Schema, models } from 'mongoose';

const bookingSchema = new Schema(
    {
        tenantId: {
            type: mongoose.ObjectId,
            required: true
        },
        contactId: {
            type: mongoose.ObjectId,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        startTime: {
            type: Date,
            required: true
        },
        courtId: {
            type: mongoose.ObjectId,
            required: true
        },
        createdBy: {
            type: mongoose.ObjectId,
            required: true
        },
        bookingType: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Booking = models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;
