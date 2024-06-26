import { connectMongoDb } from '@/app/lib/mongodb';
import Contact from '@/app/models/contact';
import { NextResponse } from 'next/server';

// GET ALL CONTACTS BY TenantId
export async function GET(req, res) {
    try {
        await connectMongoDb();
        const { tenantId } = res.params
        if (!tenantId)
            throw new Error("TenantId not valid");

        const contacts = await Contact.find({ tenantId });

        return NextResponse.json({ contacts });
    } catch (err) {
        return NextResponse.json({ error: err.message || "Server Error" }, { status: 500 });
    }
}

// CREATE NEW CONTACT
export async function POST(req, res) {
    try {
        await connectMongoDb();
        let contact = null;
        const { tenantId } = res.params
        const { firstName, lastName, phone } = await req.json();

        const existingContact = await Contact.findOne({ tenantId, phone });

        if (existingContact)
            throw new Error("Contact already exists")

        contact = await Contact.create({ tenantId, firstName, lastName, phone });

        return NextResponse.json({ contact }, { status: 201 });

    } catch (err) {
        return NextResponse.json({ message: err.message || "Server error" });
    }
}
