export const getTopBreeds = async () => {
	const response = await fetch(`${process.env.API_URL}/breeds/ranking`);
	if (!response) return;
	const data = await response.json();
	return data;
};
