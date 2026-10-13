const esc = (s: string) =>
	s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// frontmatter strings are plain text, so `like this` is turned into <code> here
export const inlineCode = (s: string) =>
	esc(s).replace(/`([^`]+)`/g, '<code style="font-size:0.9em">$1</code>');

// meta tags take plain text, so the backticks are dropped
export const plainText = (s: string) => s.replace(/`/g, "");
