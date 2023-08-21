import { BreedInfo } from '@/types/types';
import { capitalizeString } from '@/helpers/capitalize';
import { getSingleBreed } from '@/lib/getSingleBreed';
interface Params {
	params: {
		breedId: string;
	};
}

const SingleBreed: React.FC<Params> = async ({ params }) => {
	const data = await getSingleBreed(params.breedId);

	if (!data) return;

	const breedDetails: BreedInfo = data.breedInfo;
	const breedPhotos: string[] = data.breedPhotos;

	return (
		<main className='container'>
			<div className='flex flex-col'>
				<section className='flex flex-col lg:flex-row gap-y-8 gap-x-24 items-start sm:px-24 py-16'>
					<div className='relative w-full lg:w-1/3'>
						<img src={breedPhotos[0]} className='w-full h-full object-cover object-center rounded-3xl' />
						<div className='grid place-items-center absolute top-0 -left-4 h-full -z-10'>
							<div className='bg-primary-golden w-16 h-4/5 rounded-2xl'></div>
						</div>
					</div>
					<div className='w-full sm:w-2/3 flex flex-col gap-y-8 sm:gap-y-8'>
						<h1 className='text-4xl text-primary-gray-700 font-semibold'>{breedDetails?.name}</h1>
						<p className='text-lg text-primary-gray-700'>{breedDetails?.description}</p>
						<ul className='flex flex-col gap-y-8'>
							{breedDetails &&
								Object.entries(breedDetails)
									.filter(([property, value]) => property !== 'name' && property !== 'description')
									.map(([property, value]) => (
										<li
											key={property}
											className='w-full flex flex-col sm:flex-row lg:items-center gap-y-4 gap-x-8'
										>
											<p className='font-bold text-black'>{capitalizeString(property.replace('_', ' '))}:</p>
											{typeof value === 'string' ? (
												<p className='text-black'>{value}</p>
											) : (
												<div className='flex items-center gap-x-2'>
													{Array.from({ length: 5 }, (_, index) => (
														<span
															key={index}
															className={`h-3 w-12 sm:w-16 rounded-full
                              ${index < value ? 'bg-primary-gray-600' : 'bg-primary-inputItem'}
                            `}
														></span>
													))}
												</div>
											)}
										</li>
									))}
						</ul>
					</div>
				</section>
				<section className='flex flex-col gap-y-8 py-8 sm:py-24'>
					<h4 className='text-4xl text-primary-gray-700 font-semibold'>Other photos</h4>
					<div className='grid grid-cols-2 sm:grid-cols-4min grid-flow-dense auto-rows-auto gap-4 sm:gap-8 '>
						{breedPhotos &&
							breedPhotos.slice(1).map((photoUrl, idx) => (
								<div key={idx}>
									<img
										src={photoUrl}
										alt={breedDetails?.name}
										className='w-full h-full object-cover object-center rounded-3xl'
									/>
								</div>
							))}
					</div>
				</section>
			</div>
		</main>
	);
};

export default SingleBreed;
