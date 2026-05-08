/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,astro,md}"],
	theme: {
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#fafafa",
				secondary: "#00a86b",
			},
			typography: {
				DEFAULT: {
					css: {
						"code::before": { content: '""' },
						"code::after": { content: '""' },
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
