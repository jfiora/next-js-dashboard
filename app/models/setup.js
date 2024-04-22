import mongoose, { Schema, models } from 'mongoose';

const setupSchema = new Schema(
    {
        tenantId: {
            type: Int32Array,
            required: true
        },
        availability: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true }
);

const Setup = models.Setup || mongoose.model('Setup', setupSchema);

export default Setup;
