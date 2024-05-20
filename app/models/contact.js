import mongoose, { Schema, models } from 'mongoose';

const contactSchema = new Schema(
    {
        tenantId: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Contact = models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
