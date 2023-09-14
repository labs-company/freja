/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			"mooli": ["Mooli", "sans-serif"]
		},
		gridTemplateRows: {
			'[auto,auto,1fr]': 'auto auto 1fr',
		  },
	},
	plugins: [],
}
