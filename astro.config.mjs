import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// wide tables scroll inside their own box instead of widening the whole page on a phone
function wrapTables() {
	const walk = (node) => {
		if (!node.children) return;
		node.children = node.children.map((child) => {
			walk(child);
			if (child.type === "element" && child.tagName === "table") {
				return {
					type: "element",
					tagName: "div",
					properties: { className: ["table-scroll"] },
					children: [child],
				};
			}
			return child;
		});
	};
	return (tree) => walk(tree);
}

export default defineConfig({
	site: "https://meej.ca",
	compressHTML: true,
	integrations: [mdx(), sitemap()],
	markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex, wrapTables] },
	// astro rewrites these schemas on every dev start, and the watcher event made it skip the content sync
	vite: { server: { watch: { ignored: ["**/.astro/collections/**"] } } },
});

