'use client';
import React from 'react';
import Divider from './Divider';
import { ArrowIcon } from '@/assets/icons/icons';
import { TopSearchedContext, useTopSearchedBreedContext } from '@/context/topSearchedBreed.context';

const SectionAllBreeds: React.FC = () => {
	const { topBreeds } = useTopSearchedBreedContext() as TopSearchedContext;

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
							href='/breed/top-10-breeds'
							className='hidden sm:flex items-center gap-x-2 text-lg font-bold text-primary-gray-700 opacity-60'
						>
							SEE MORE
							<ArrowIcon />
						</a>
					</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8'>
					{topBreeds &&
						topBreeds.slice(0, 4).map(function (breed: any) {
							return (
								<div className='flex flex-col gap-4'>
									<img
										src={breed.breedPhotos[0]}
										className='h-full w-full object-cover object-center rounded-3xl'
									/>
									<p className='text-sm lg:text-lg text-primary-gray-700 font-semibold'>
										{breed.breedInfo.name}
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default SectionAllBreeds;
