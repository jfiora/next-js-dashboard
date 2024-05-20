import { connectMongoDb } from '@/app/lib/mongodb';
import Setup from '@/app/models/setup';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    try {
        await connectMongoDb();
        const { tenantId } = res.params;
        const setup = await Setup.findOne({ tenantId });
        return NextResponse.json({ setup });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

export async function POST(req, res) {
    try {
        await connectMongoDb();
        const { tenantId } = res.params;
        const { availability } = await req.json();
        const setup = await Setup.create({ tenantId, availability });
        return NextResponse.json({ setup });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

export async function PUT(req, res) {
    try {
        await connectMongoDb();
        const { tenantId } = res.params;
        const { availability } = await req.json();
        const setup = await Setup.findOne({ tenantId });
        setup.availability = availability;
        await setup.save();
        return NextResponse.json({ setup });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
