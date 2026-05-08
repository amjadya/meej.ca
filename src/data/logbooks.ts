export interface Logbook {
	slug: string;
	title: string;
	blurb: string;
	order: number;
}

export const logbooks: Logbook[] = [
	{
		slug: "aerodesign",
		title: "Aerodesign Payload",
		blurb:
			"Robotics Systems on the SAE Aerodesign Advanced Payload subteam. Avionics decisions and firmware research.",
		order: 1,
	},
	{
		slug: "wayless",
		title: "Wayless",
		blurb:
			"A side project with my friend Saf. Building a vehicle physics simulator step by step in C++.",
		order: 2,
	},
];
