import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const project = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/project" }),
});

export const collections = { project };
