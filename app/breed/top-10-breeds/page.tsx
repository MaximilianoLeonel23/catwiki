import TopList from '@/components/TopList';
import React from 'react';

const TopMostSearchedPage: React.FC = () => {
	return (
		<main className='container'>
			<h1 className='text-4xl font-bold text-primary-gray-700'>Top 10 most searched breeds</h1>
			<TopList />
		</main>
	);
};

export default TopMostSearchedPage;
