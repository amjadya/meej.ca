// a gap is any stretch of 14+ days inside one project with no entries
// annotate the ones whose reason is known, matched by project and the date the gap starts
export type GapKind = "lost" | "paused";

export interface GapNote {
	project: string;
	from: string;
	kind: GapKind;
	note?: string;
}

export const gapKinds: Record<GapKind, { label: string; note: string }> = {
	lost: {
		label: "Entries lost to time",
		note: "hard to keep a log when things are moving so fast...",
	},
	paused: {
		label: "Flew too close to the sun",
		note: "the wings will heal... good things take time",
	},
};

export const gapNotes: GapNote[] = [
	{ project: "aerodesign", from: "2026-05-16", kind: "lost" },
	{ project: "aerodesign", from: "2026-07-03", kind: "lost" },
	{ project: "baddy-bot", from: "2025-09-02", kind: "lost" },
	{ project: "baddy-bot", from: "2026-04-12", kind: "lost" },
];

// a silence is a stretch where no project logged anything, marked by hand
// from is the last entry before it and to is the first entry after it
export interface SilenceNote {
	from: string;
	to: string;
	kind: GapKind;
}

export const silenceNotes: SilenceNote[] = [];
