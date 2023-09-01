export const getTopBreeds = async () => {
	const response = await fetch(`/api/breeds/ranking`);
	if (!response) return;
	const data = await response.json();
	return data;
};
