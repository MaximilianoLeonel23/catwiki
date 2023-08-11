import { LogoSvg } from '@/assets/images/images';
import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className='container'>
			<div className='flex flex-col items-start sm:flex-row sm:items-center gap-y-4 justify-between bg-black logoWhite py-4 px-8 sm:py-8 sm:px-16 rounded-t-3xl'>
				<LogoSvg />
				<p className='text-white font-light'>
					© created by <span className='font-bold'>Maximiliano</span>{' '}
					- devChallenge.io 2023
				</p>
			</div>
		</footer>
	);
};

export default Footer;
