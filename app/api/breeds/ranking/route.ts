import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

const breedCountsPath = path.join(process.cwd(), 'public', 'breedCounts.json');

type BreedCounts = {
	[breed: string]: number;
};

export async function POST(request: NextRequest) {
	const { breed } = await request.json();
	try {
		let breedCounts: BreedCounts = {};

		if (fs.existsSync(breedCountsPath)) {
			breedCounts = JSON.parse(fs.readFileSync(breedCountsPath, 'utf-8'));
		}

		if (breedCounts[breed] !== undefined) {
			breedCounts[breed] += 1;
		} else {
			breedCounts[breed] = 1;
		}

		fs.writeFileSync(breedCountsPath, JSON.stringify(breedCounts, null, 2));

		NextResponse.json({ status: 200, message: 'Search count increased successfully' });
	} catch (err) {
		NextResponse.json({ status: 500, message: 'Error increasing search count' });
	}
}

export async function GET() {
	try {
		const breedCount = await JSON.parse(fs.readFileSync(breedCountsPath, 'utf-8'));

		return new NextResponse(JSON.stringify(breedCount), {
			headers: {
				'Content-Type': 'application/json',
			},
			status: 200,
		});
	} catch (err) {
		return new NextResponse(JSON.stringify({ message: 'Error retrieving breeds counts' }), {
			headers: {
				'Content-Type': 'application/json',
			},
			status: 500,
		});
	}
}
