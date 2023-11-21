import Form from '../models/form';
import { NextResponse } from 'next/server';

export async function POST(req){
  try {
    const body = await req.json();
    const form = body.formData

  } catch (error) {

    return NextResponse.json({error: error.message}, {status: 500})
    
  }
}