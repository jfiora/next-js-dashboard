import mongoose, { Schema, models } from 'mongoose';

const courtSchema = new Schema(
    {
        tenantId: {
            type: Int32Array,
            required: true
        },
        sport: {
            type: String,
            required: true,
        },
        price: {
            type: Float32Array,
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
