'use client';
import React from 'react';

const TopItem = ({ breed, index }: any) => {
	return (
		<article className='flex items-start gap-8'>
			<img
				src={breed.breedPhotos[0]}
				className='w-40 lg:w-52 h-40 lg:h-52 object-cover object-center rounded-3xl'
			/>
			<div className='flex flex-col gap-4 w-full'>
				<h4 className='text-sm sm:text-base lg:text-4xl font-semibold text-primary-gray-700'>
					{index + 1}. {breed.breedInfo.name}
				</h4>
				<p className='text-sm sm:text-base lg:text-lg text-primary-gray-700'>
					{breed.breedInfo.description}
				</p>
			</div>
		</article>
	);
};

export default TopItem;
