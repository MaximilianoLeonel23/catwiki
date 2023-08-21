'use client';
import React, { useEffect, useState } from 'react';
import { LogoSvg } from '@/assets/images/images';
import { Breed } from '@/types/types';
import { SearchIcon } from '@/assets/icons/icons';
import Link from 'next/link';
import BreedSearcher from './BreedSearcher';
import { useSearchContext } from '@/context/search.context';
import { getBreeds } from '@/lib/getBreeds';

const SectionSearcher = () => {
	const [searchedBreed, setSearchedBreed] = useState<string>('');
	const [breeds, setBreeds] = useState<Breed[]>([]);
	const { setOpenSearcher } = useSearchContext();

	useEffect(() => {
		const handleSearcherByBreed = async () => {
			try {
				const data = await getBreeds();
				if (!data) return;

				const filteredBreed = data.filter(breed =>
					breed.name.toLowerCase().includes(searchedBreed.toLowerCase()),
				);
				if (!searchedBreed) {
					setBreeds([]);
				} else {
					setBreeds(filteredBreed);
				}
			} catch (err) {
				console.log(err);
			}
		};
		handleSearcherByBreed();
	}, [searchedBreed]);

	const handleMostSearchedBreeds = async (breed: Breed) => {
		try {
			const response = await fetch(`http://localhost:3000/api/breeds/ranking`, {
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

	return (
		<section>
			<div className='bg-cat rounded-t-3xl'>
				<div className=' w-1/2 px-8 py-4 md:p-12 lg:p-24'>
					<div className='flex flex-col justify-center gap-y-4 lg:gap-y-16'>
						<div className='flex flex-col gap-y-2 lg:gap-y-4'>
							<div className='logoWhite logoBig'>
								<LogoSvg />
							</div>
							<h1 className='text-white text-xxs md:text-xl lg:text-2xl'>
								Get to know about your cat breed
							</h1>
						</div>
						<div className='sm:hidden'>
							<div className=''>
								<button
									className='relative flex items-center w-full py-2 px-4 searchIconDark bg-white text-primary-gray-700 text-xs border-none rounded-full'
									onClick={() => setOpenSearcher(true)}
								>
									Search
									<div className='absolute right-[10%]'>
										<SearchIcon />
									</div>
								</button>
							</div>
						</div>
						<div className='relative hidden sm:flex flex-col gap-y-4'>
							<div className='relative flex items-center searchIconDark'>
								<input
									type='text'
									className='w-full py-2 px-4 sm:py-4 sm:px-8  text-primary-gray-700 placeholder:text-primary-gray-700 placeholder:text-xs text-xs sm:placeholder:text-lg sm:text-lg border-none rounded-full outline-none'
									placeholder={'Enter your breed'}
									defaultValue={searchedBreed}
									onChange={e => setSearchedBreed(e.target.value)}
								/>
								<div className='absolute right-[10%]'>
									<SearchIcon />
								</div>
							</div>
							{breeds.length > 0 && (
								<ul className='absolute top-24 left-0 w-full flex flex-col bg-white p-4 rounded-3xl max-h-[15rem] overflow-auto no-scrollbar'>
									{breeds.map(breed => (
										<li
											key={breed.id}
											className='py-4 px-4 rounded-2xl  text-primary-gray-700 hover:bg-primary-inputItem cursor-pointer transition-colors duration-300'
										>
											<Link
												href={`/breed/${breed.id}`}
												className='block h-full w-full'
												onClick={() => handleMostSearchedBreeds(breed)}
											>
												{breed.name}
											</Link>
										</li>
									))}
								</ul>
							)}
						</div>
						<BreedSearcher
							breeds={breeds}
							setBreeds={setBreeds}
							searchedBreed={searchedBreed}
							setSearchedBreed={setSearchedBreed}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionSearcher;
