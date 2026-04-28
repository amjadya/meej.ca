import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	site: "https://meej.ca",
	compressHTML: true,
	integrations: [mdx(), sitemap()],
});

