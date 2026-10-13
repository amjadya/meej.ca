// the lead story on the landing page, edit the words here
export const headline = {
	kicker: "Badminton Robot",
	title:
		"A robot that tracks the shuttlecock, predicts where it lands, drives to intercept it and returns it.",
	blurb:
		"A two year project to build a fully autonomous badminton-playing robot that can sustain a rally against a human opponent.",
	logbook: "baddy-bot",
	// start is a guess at the first day of term, change it to the real day
	start: "2025-09-02",
	end: "2027-04-08",
	// a term with an entry in glossary.ts becomes tappable
	ready: [
		{ label: "Custom stereo vision", term: "stereo" },
		{ label: "Extended Kalman filter prediction", term: "ekf" },
		{ label: "3D-printed chassis" },
		{ label: "Custom motor spec" },
		{ label: "4 ESCs" },
		{ label: "10:1 gearbox", term: "gearbox" },
		{ label: "Mecanum wheels", term: "mecanum" },
		{ label: "6S LiPo" },
	],
	incoming: [{ label: "Multi-DOF striking arm" }, { label: "RL control system" }],
};
