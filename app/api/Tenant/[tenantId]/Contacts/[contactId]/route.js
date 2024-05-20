import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import { connectMongoDb } from "@/app/lib/mongodb";

// GET CONTACT BY contactId
export async function GET(req, res) {
    try {
        const { contactId } = res.params

        if (!contactId)
            return NextResponse.json({ error: 'ContactId not valid' }, { status: 400 });

        await connectMongoDb();

        const contact = await Contact.findById({ _id: contactId });

        if (!contact)
            return NextResponse.json({ error: 'Contact not found' }, { status: 404 });

        return NextResponse.json({ contact })
    } catch (error) {
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}

// UPDATE CONTACT
export async function PUT(req, res) {
    try {
        const { contactId } = res.params

        if (!contactId)
            return NextResponse.json({ error: 'ContactId not valid' }, { status: 400 });

        await connectMongoDb();

        const requestBody = await req.json()

        if (requestBody.tenantId)
            throw new Error("Cannot update an already assigned tenant")

        const contact = await Contact.findById({ _id: contactId });

        if (!contact)
            return NextResponse.json({ message: "Contact not found" }, { status: 400 });

        Object.assign(contact, requestBody);

        await contact.save();

        return NextResponse.json({ contact });
    } catch (err) {
        return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
    }
}