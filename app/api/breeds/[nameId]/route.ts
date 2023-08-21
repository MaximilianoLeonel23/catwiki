import { BreedDetails } from '@/types/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { nameId: string } }) {
	const res = await fetch(
		`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${params.nameId}&api_key=${process.env.API_KEY}`,
	);

	const data: BreedDetails[] = await res.json();

	return NextResponse.json(data);
}
