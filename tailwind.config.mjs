/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'downriver' : '#0B184F',
				'malted-mint-madness': '#10E2AA',
				'bright-sky-blue': '#02C5FB'
			}
		},
	},
	plugins: [],
}
