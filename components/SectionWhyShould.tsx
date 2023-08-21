import React from 'react';
import image1 from '@/assets/images/image 1.png';
import image2 from '@/assets/images/image 2.png';
import image3 from '@/assets/images/image 3.png';
import Divider from '@/components/Divider';
import Image from 'next/image';
import { ArrowIcon } from '@/assets/icons/icons';

const SectionWhyShould: React.FC = () => {
	return (
		<section className='grid grid-cols-1 sm:grid-cols-2 gap-16  items-center py-16 sm:p-24'>
			<div className='flex flex-col gap-y-8 sm:p-8'>
				<div className='flex flex-col gap-y-2'>
					<Divider />
					<h2 className='text-4xl sm:text-5xl text-primary-gray-700 font-bold'>
						Why should you have a cat?
					</h2>
				</div>
				<p className='text-lg text-primary-gray-700'>
					Having a cat around you can actually trigger the release of calming chemicals in your body
					which lower your stress and anxiety leves
				</p>
				<a
					href=''
					className='flex items-center gap-x-2 text-xs sm:text-lg font-bold text-primary-gray-700 opacity-60'
				>
					SEE MORE
					<ArrowIcon />
				</a>
			</div>
			<div className='columns-2'>
				<Image src={image2} alt='imagen de gato' className='mb-4' />
				<div className='flex justify-end'>
					<Image src={image1} alt='imagen de gato' className='mb-4 w-3/4' />
				</div>
				<Image src={image3} alt='imagen de gato' className='mb-4 h-4/5' />
			</div>
		</section>
	);
};

export default SectionWhyShould;
