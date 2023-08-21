'use client';
import { TopSearchedContext, useTopSearchedBreedContext } from '@/context/topSearchedBreed.context';
import React from 'react';
import TopItem from './TopItem';
import { BreedInfo } from '@/types/types';

interface TopBreeds {
	breedInfo: BreedInfo;
	breedPhotos: string[];
}
const TopList = () => {
	const { topBreeds } = useTopSearchedBreedContext() as TopSearchedContext;
	return (
		<div className='py-8'>
			<ul className='flex flex-col gap-8 '>
				{topBreeds &&
					topBreeds.map((breed: TopBreeds, idx: number) => {
						return <TopItem breed={breed} key={idx} index={idx} />;
					})}
			</ul>
		</div>
	);
};

export default TopList;
