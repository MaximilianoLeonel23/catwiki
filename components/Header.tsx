import { LogoSvg } from '@/assets/images/images';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
	return (
		<header className='container py-4 sm:py-8'>
			<div className='flex flex-col sm:flex-row sm:items-center justify-start'>
				<Link href='/'>
					<LogoSvg />
				</Link>
			</div>
		</header>
	);
};

export default Header;
