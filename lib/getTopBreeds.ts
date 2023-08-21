export const getTopBreeds = async () => {
	const response = await fetch('http://localhost:3000/api/breeds/ranking');
	if (!response) return;
	const data = await response.json();
	return data;
};
