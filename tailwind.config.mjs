/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'downriver' : '#0B184F',
				'malted-mint-madness': '#10E2AA',
				'bright-sky-blue': '#02C5FB'
			},
			screens: {
				'2xs': '375px',
				'xs': '425px'
			},
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif']
			},
			gap: {
				'15': '3.75rem'
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('daisyui'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hidden': {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
