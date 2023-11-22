import connectMongoDB from '@/libs/mongodb';
import Form from '@/models/form';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const requestBody = await request.json();

    if (!requestBody) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { name, email, interested, githubLink, domain } = requestBody;

    await connectMongoDB();
    await Form.create({
      name,
      email,
      interested,
      githubLink,
      domain,
    });

    return NextResponse.json({ message: 'Form submitted' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
