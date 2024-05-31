/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			'neutral': {
			  50: '#fafafa',
			  100: '#f5f5f5',
			  200: '#e5e5e5',
			},
		  },
		},
		fontFamily: {
		  'inter': ['inter']
		},
		screens: {
		  'xxs': '1px',
		  'xs': '475px',
		  ...defaultTheme.screens,
		},
	  },
	plugins: [],
}
