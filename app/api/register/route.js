import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        console.log(name, email, password);

        return NextResponse.json(
            {
                message: 'user created',
            },
            { status: 201 }
        );
    } catch (err) {
        NextResponse.json(
            {
                message: 'error creating user' + err,
            },
            { status: 500 }
        );
    }
}
