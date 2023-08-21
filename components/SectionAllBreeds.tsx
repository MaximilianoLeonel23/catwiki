'use client';
import React from 'react';
import Divider from './Divider';
import { ArrowIcon } from '@/assets/icons/icons';
import { getTopBreeds } from '@/lib/getTopBreeds';
import { getBreeds } from '@/lib/getBreeds';
import { Breed, BreedDetails } from '@/types/types';
import { useState, useEffect } from 'react';

type TopBreeds = {
	[key: string]: number;
};

const SectionAllBreeds = () => {
	const [topBreeds, setTopBreeds] = useState<TopBreeds>({});
	const [allBreeds, setAllBreeds] = useState<Breed[]>([]);
	const [filteredAndSortedBreeds, setFilteredAndSortedBreeds] = useState<Breed[]>();

	useEffect(() => {
		async function fetchData() {
			const topBreedsData = await getTopBreeds();
			const allBreedsData = await getBreeds();
			if (topBreedsData && allBreedsData) {
				setTopBreeds(topBreedsData);
				setAllBreeds(allBreedsData);
			}

			const filteredAndSortedBreeds = allBreeds
				.filter(breed => topBreeds.hasOwnProperty(breed.name))
				.sort((a, b) => topBreeds[b.name] - topBreeds[a.name]);

			console.log(filteredAndSortedBreeds);
		}

		fetchData();
	}, []);

	return (
		<section>
			<div className='px-8 py-8 sm:p-24 bg-primary-gray-200 rounded-b-3xl'>
				<div className='grid grid-cols-2 place-items-end'>
					<div className='flex flex-col gap-y-8'>
						<div className='flex flex-col gap-y-2'>
							<p className='text-primary-gray-700 text-xs sm:text-lg'>Most Searched Breeds</p>
							<Divider />
						</div>
						<h2 className='text-lg sm:text-5xl text-primary-gray-700 font-bold'>
							66+ Breeds For you to discover
						</h2>
					</div>
					<div>
						<a
							href=''
							className='hidden sm:flex items-center gap-x-2 text-lg font-bold text-primary-gray-700 opacity-60'
						>
							SEE MORE
							<ArrowIcon />
						</a>
					</div>
				</div>
				<div></div>
			</div>
		</section>
	);
};

export default SectionAllBreeds;
