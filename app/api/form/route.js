import connectMongoDB from '@/lib/mongodb';
import Form from '@/models/form';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const requestBody = await request.json();

    // Validate the required fields
    const { name, email, interested, githubLink, domain } = requestBody;
    if (!name || !email || !interested || !githubLink || !domain) {
      return NextResponse.json({ error: 'Missing or invalid fields in the request' }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Create a new form entry
    const newFormEntry = await Form.create({
      name,
      email,
      interested,
      githubLink,
      domain,
    });

    // Return a success response with the created form entry
    return NextResponse.json({
      message: 'Form submitted successfully',
      formEntry: newFormEntry,
    }, { status: 201 });
  } catch (error) {
    console.error('Error processing form submission:', error);

    // Return an error response
    return NextResponse.json(
      { error: 'Internal Server Error. Unable to process the form submission.' },
      { status: 500 }
    );
  }
}
