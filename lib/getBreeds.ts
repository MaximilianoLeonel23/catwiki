import { Breed } from '@/types/types';

export const getBreeds = async () => {
	try {
		const response = await fetch(`${process.env.HOST_URL}/api/breeds`);
		const data: Breed[] = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};
