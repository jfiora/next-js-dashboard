import mongoose, { Schema, models } from 'mongoose';

const bookingSchema = new Schema(
    {
        tenantId: {
            type: Int32Array,
            required: true
        },
        contactId: {
            type: Int32Array,
            required: true,
        },
        duration: {
            type: Int32Array,
            required: true,
        },
        startTime: {
            type: Date,
            required: true
        },
        courtId: {
            type: Int32Array,
            required: true
        },
        createdBy: {
            type: Int32Array,
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
