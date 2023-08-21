import { NextResponse } from 'next/server';
import { Breed } from '@/types/types';

export async function GET() {
	const res = await fetch('https://api.thecatapi.com/v1/breeds');
	const data: Breed = await res.json();

	return NextResponse.json(data);
}
