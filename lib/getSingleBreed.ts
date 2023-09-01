import { BreedDetails, BreedInfo } from '@/types/types';

export const getSingleBreed = async (params: string) => {
	try {
		console.log(`Se esta llamando a ${params}`);
		const res = await fetch(`/api/breeds/${params}`);
		const data: BreedDetails[] = await res.json();

		const { breeds } = data[0];

		const {
			name,
			description,
			temperament,
			origin,
			life_span,
			adaptability,
			affection_level,
			child_friendly,
			grooming,
			intelligence,
			health_issues,
			social_needs,
			stranger_friendly,
		} = breeds[0];

		const breedInfo: BreedInfo = {
			name,
			description,
			temperament,
			origin,
			life_span,
			adaptability,
			affection_level,
			child_friendly,
			grooming,
			intelligence,
			health_issues,
			social_needs,
			stranger_friendly,
		};

		const breedPhotos: string[] = data.map(breed => {
			return breed.url;
		});
		console.log(`Se va a devolver ${breedPhotos} y ${breedInfo}`);

		return { breedInfo, breedPhotos };
	} catch (error) {
		// Manejar el error aquí
		console.error('Error al obtener los datos de la API:', error);
		return null; // O devuelve un objeto con información de error si lo prefieres
	}
};
