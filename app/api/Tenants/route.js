import { connectMongoDb } from '@/app/lib/mongodb';
import Tenant from '@/app/models/tenant';
import { NextResponse } from 'next/server';

// CREATE NEW TENANT
export async function POST(req, res) {
    try {
        await connectMongoDb();
        const { name, email, phone, address } = await req.json();

        const existingTenant = await Tenant.findOne({ email });

        if (existingTenant)
            throw new Error("Tenant already exists")

        const tenant = await Tenant.create({ name, email, phone, address });

        if (!tenant)
            throw new Error("Something went wrong, Tenant not created")

        return NextResponse.json({ tenant }, { status: 201 });

    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
