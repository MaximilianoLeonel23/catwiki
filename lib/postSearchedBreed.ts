import { Breed } from '@/types/types';

export const postSearchedBreed = async (breed: Breed) => {
	try {
		const response = await fetch(`${process.env.HOST_URL}/api/breeds/ranking`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ breed: breed.name }),
		});
		if (response.ok) {
			console.log('Se envio correctamente la busqueda');
		}
	} catch (err) {
		console.log(err);
	}
};
