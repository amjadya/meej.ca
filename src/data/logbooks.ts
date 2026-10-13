export type LogbookStatus = "live" | "paused" | "shipped";

export interface Logbook {
	slug: string;
	title: string;
	blurb: string;
	order: number;
	status: LogbookStatus;
	color: string;
	textColor?: string;
}

export const logbooks: Logbook[] = [
	{
		slug: "baddy-bot",
		title: "Badminton Robot",
		blurb:
			"A fully autonomous badminton-playing robot. Custom stereo vision, an Extended Kalman Filter for prediction, and a mecanum drivetrain, built to sustain a rally against a human opponent.",
		order: 0,
		status: "live",
		color: "#6b3fa0",
	},
	{
		slug: "aerodesign",
		title: "Aerodesign Payload",
		blurb:
			"Robotics Systems on the SAE Aerodesign Advanced Payload subteam. Avionics decisions and firmware research.",
		order: 1,
		status: "live",
		color: "#00a86b",
		textColor: "#007a4d",
	},
	{
		slug: "wayless",
		title: "Wayless",
		blurb:
			"A side project with my friend Saf. Building a vehicle physics simulator step by step in C++.",
		order: 2,
		status: "live",
		color: "#2b5fb3",
	},
	{
		slug: "rl-arm-tracking",
		title: "RL Arm Tracking",
		blurb:
			"Learning RL by building a 3D trajectory-tracking policy for a simulated Franka arm. PPO via Stable-Baselines3 + MuJoCo.",
		order: 3,
		status: "shipped",
		color: "#b4531f",
	},
];
