import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
	"/src/assets/logbook/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}",
	{ eager: true },
);

export interface EntryImage {
	src: ImageMetadata;
	alt: string;
}

// the first few images an entry embeds, in the order they appear in its body
export function entryImages(body: string | undefined, max = 3): EntryImage[] {
	if (!body) return [];
	const found: EntryImage[] = [];
	for (const m of body.matchAll(/!\[([^\]]*)\]\(([^)\s]+)\)/g)) {
		const path = m[2];
		const at = path.indexOf("assets/logbook/");
		if (at < 0) continue;
		const mod = modules["/src/" + path.slice(at)];
		if (mod) found.push({ src: mod.default, alt: m[1] });
		if (found.length >= max) break;
	}
	return found;
}
