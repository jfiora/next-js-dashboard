import { connectMongoDb } from '@/app/lib/mongodb';
import User from '@/app/models/user';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await connectMongoDb();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select('_id');

        return NextResponse.json({ user });
    } catch (err) {
        console.log(err);
    }
}
