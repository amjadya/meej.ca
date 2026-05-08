import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const project = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/project" }),
});

const logbook = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/logbook" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().optional().default(false),
	}),
});

export const collections = { project, logbook };
