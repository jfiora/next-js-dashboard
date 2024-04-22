import mongoose, { Schema, models } from 'mongoose';

const adminSchema = new Schema(
    {
        tenantId: {
            type: Int32Array,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
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
        picture: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

const Admin = models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;
