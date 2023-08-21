'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { getBreeds } from '@/lib/getBreeds';
import { getTopBreeds } from '@/lib/getTopBreeds';
import { getSingleBreed } from '@/lib/getSingleBreed';

export const TopSearchedBreedContext = createContext<TopSearchedContext | null>(null);

export const useTopSearchedBreedContext = () => {
	const context = useContext(TopSearchedBreedContext);

	if (!context) return;
	return context;
};

export interface TopSearchedContext {
	topBreeds: any;
}

interface Props {
	children: React.ReactNode;
}

type TopBreedsData = {
	[key: string]: number;
};

export const TopSearchedBreedProvider = ({ children }: Props) => {
	const [topBreeds, setTopBreeds] = useState<any>();

	useEffect(() => {
		async function fetchData() {
			try {
				const topBreedsData: TopBreedsData = await getTopBreeds();
				const allBreedsData = await getBreeds();

				if (!allBreedsData) return;

				const filteredAndSortedBreeds = allBreedsData
					.filter(breed => topBreedsData.hasOwnProperty(breed.name))
					.sort((a, b) => topBreedsData[b.name] - topBreedsData[a.name]);

				const breedPhotoPromises = filteredAndSortedBreeds.map(async breed => {
					const singleBreed = await getSingleBreed(breed.id);
					return singleBreed !== null ? singleBreed : undefined;
				});

				const breedData = await Promise.all(breedPhotoPromises);

				const validBreedData = breedData.filter(data => data !== undefined);

				setTopBreeds(validBreedData);
			} catch (err) {
				console.log(err);
			}
		}

		fetchData();
	}, []);

	return (
		<TopSearchedBreedContext.Provider value={{ topBreeds }}>
			{children}
		</TopSearchedBreedContext.Provider>
	);
};
