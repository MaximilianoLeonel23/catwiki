import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '2rem',
				xl: '2rem',
				'2xl': '4rem',
			},
			center: true,
		},
		extend: {
			colors: {
				primary: {
					gray: {
						200: '#E3E1DC',
						300: '#F2F2F2',
						400: '#BDBDBD',
						500: '#4D270C',
						600: '#544439',
						700: '#291507',
						900: '#000000',
					},
					inputItem: '#9797971A',
					golden: '#DEC68B',
				},
			},
			fontSize: {
				xxs: '10px',
			},
		},
	},
	plugins: [],
};
export default config;
