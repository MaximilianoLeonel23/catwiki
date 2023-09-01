const testEnvConstant = async () => {
	const apiURl = process.env.API_URL;
	const apiKey = process.env.API_KEY;

	console.log('apiurl', apiURl);
	console.log('apikey', apiKey);
};

export default testEnvConstant;
