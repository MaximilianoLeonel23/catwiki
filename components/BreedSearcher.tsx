'use client';

import { CrossIcon, SearchIcon } from '@/assets/icons/icons';
import { useSearchContext } from '@/context/search.context';
import { Breed } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
interface Props {
	breeds: Breed[];
	setBreeds: Dispatch<SetStateAction<Breed[]>>;
	searchedBreed: string;
	setSearchedBreed: Dispatch<SetStateAction<string>>;
}

const BreedSearcher: React.FC<Props> = ({ breeds, setBreeds, searchedBreed, setSearchedBreed }) => {
	const { openSearcher, setOpenSearcher } = useSearchContext();

	return (
		<>
			{openSearcher ? (
				<div className='bg-white py-8 container fixed top-0 left-0 w-full min-h-screen z-30 sm:hidden'>
					<div className='flex flex-col gap-y-8'>
						<div className='flex justify-end'>
							<button
								className='bg-primary-inputItem rounded-lg p-2'
								onClick={() => setOpenSearcher(false)}
							>
								<CrossIcon />
							</button>
						</div>
						<div className='relative flex items-center searchIconDark'>
							<input
								type='text'
								className='w-full py-3 px-6 text-primary-gray-700 placeholder:text-primary-gray-700 placeholder:text-lg text-lg border border-black rounded-full outline-none'
								placeholder={'Enter your breed'}
								defaultValue={searchedBreed}
								onChange={e => setSearchedBreed(e.target.value)}
							/>
							<div className='absolute right-[10%]'>
								<SearchIcon />
							</div>
						</div>
						<div>
							{breeds.length > 0 && (
								<ul className='w-full flex flex-col bg-white py-4 rounded-3xl h-screen overflow-auto no-scrollbar'>
									{breeds.map(breed => (
										<li
											key={breed.id}
											className='py-4 px-4 rounded-2xl text-lg  text-primary-gray-700 hover:bg-primary-inputItem cursor-pointer transition-colors duration-300'
											onClick={() => setOpenSearcher(false)}
										>
											<Link href={`/breed/${breed.id}`} className='block h-full w-full'>
												{breed.name}
											</Link>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
export default BreedSearcher;
