import mongoose, { Schema, models } from 'mongoose';

const tenantSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: false
        },
    },
    { timestamps: true }
);

const Tenant = models.Admin || mongoose.model('Tenant', tenantSchema);

export default Tenant;
