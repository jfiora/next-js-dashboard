import mongoose, { Schema, models } from 'mongoose';

const courtSchema = new Schema(
    {
        tenantId: {
            type: mongoose.ObjectId,
            required: true
        },
        sport: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        available: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
);

const Court = models.Court || mongoose.model('Court', courtSchema);

export default Court;
