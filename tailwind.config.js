/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#0061a6',
					100: '#0061a6',
					200: '#0061a6',
					300: '#0061a6',
					400: '#0061a6',
					500: '#0061a6',
					600: '#0061a6',
					700: '#0061a6',
					800: '#0061a6',
					900: '#0061a6'
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};


