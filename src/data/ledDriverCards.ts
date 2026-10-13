// practice cards for the aerodesign beacon led driver, shown in this order

export interface Card {
	section: string;
	pic: string;
	q: string;
	a: string;
	steps?: string[];
}

export const sections = [
	"Voltage and current",
	"Diodes and LEDs",
	"MOSFETs",
	"BJTs",
	"What breaks",
	"The beacon driver",
];

export const cards: Card[] = [
	{
		section: sections[0],
		pic: "kvl-two",
		q: "What does a voltmeter across the bottom resistor read?",
		a: "9 V. The voltage drops around a loop add up to the supply: $$24\\,\\text{V} - 15\\,\\text{V} = 9\\,\\text{V}$$",
	},
	{
		section: sections[0],
		pic: "elec-dir",
		q: "Which way do the electrons in this loop actually move, and which way do we draw the current?",
		a: "Electrons move from negative to positive, and current is drawn from positive to negative. Electrons are negative, so they leave the battery's negative end and travel around to its positive end. Current was defined as flowing from positive to negative before people knew electrons were a thing. This is called conventional current.",
	},
	{
		section: sections[0],
		pic: "ohm",
		q: "How much current flows through this resistor, and what law did you use to calculate this?",
		a: "200 mA, from Ohm's law. $$I = \\frac{V}{R} = \\frac{2\\,\\text{V}}{10\\,\\Omega} = 0.2\\,\\text{A}$$",
	},
	{
		section: sections[0],
		pic: "ohm-power",
		q: "How much energy is converted to heat through this resistor each second?",
		a: "0.4 J every second, which is 0.4 W. $$P = VI = 2\\,\\text{V} \\times 0.2\\,\\text{A} = 0.4\\,\\text{W}$$",
	},
	{
		section: sections[0],
		pic: "series-amm",
		q: "What does the second ammeter read?",
		a: "50 mA. A single loop carries the same current through every part in it.",
	},
	{
		section: sections[0],
		pic: "gnd-node",
		q: "What is the voltage at the dot?",
		a: "9 V. “The voltage at a point” means measured from GND, and the dot is 9 V above ground.",
	},

	{
		section: sections[1],
		pic: "si-pure",
		q: "Pure silicon barely conducts. Why?",
		a: "Its electrons are all locked into bonds. Current is moving charge, and every outer electron is held in a bond between two atoms, so almost none can move.",
	},
	{
		section: sections[1],
		pic: "si-n",
		q: "A phosphorus atom, with 5 outer electrons, takes a silicon atom's place. What changes?",
		a: "It adds a free electron. Four of phosphorus' electrons join bonds, and the fifth has no bond to join, so it wanders free. Swapping in atoms like this on purpose is called doping, and silicon doped with phosphorus is N-type: its free electrons are what let current flow through it.",
	},
	{
		section: sections[1],
		pic: "si-p",
		q: "A boron atom, with 3 outer electrons, takes a silicon atom's place. What changes?",
		a: "It leaves a hole. One of its bonds is short an electron, and a neighbouring electron can hop into that gap, which leaves a corresponding gap in its place. Silicon doped like this is P-type. Its holes are what let current flow, and as they move they act like positive charges.",
	},
	{
		section: sections[1],
		pic: "pn-join",
		q: "A block of P-type and a block of N-type silicon are joined. What happens at the boundary?",
		a: "Free electrons near the boundary cross over and fill holes on the P side. That leaves a thin strip along the boundary, reaching a little way into each side, with no free charges at all. It's called the depletion region.",
	},
	{
		section: sections[1],
		pic: "pn-depl",
		q: "This strip has no free charges. Why does it matter?",
		a: "It blocks current. With nothing free to move, it acts like an insulator across the path. Inside it, each boron atom now holds an extra electron and each phosphorus atom has lost its spare one, so the P side of the strip is negative and the N side positive. That charge pushes back on more electrons trying to cross, so the strip holds its width until a battery squeezes it thinner or pulls it wider.",
	},
	{
		section: sections[1],
		pic: "pn-bias",
		q: "Which one lets current through, A or B?",
		a: "A, with + on the P side. It pushes holes and electrons toward the boundary and squeezes the depletion region thin, and past about 0.6 V for silicon, current flows. In B the battery pulls charges away from the boundary, the region widens, and almost nothing flows.",
	},
	{
		section: sections[1],
		pic: "pn-flow",
		q: "Electrons keep dropping into holes at the boundary. Why don't the holes run out, stopping the current?",
		a: "The battery keeps making new ones. Its + end pulls electrons out of the P side, which leaves fresh holes behind, and its − end pushes fresh electrons into the N side. As long as the battery is connected, the supply never runs out. The 0.6 V mentioned before is what lets charges cross the depletion region and start this loop of pushing electrons in and pulling them out.",
	},
	{
		section: sections[1],
		pic: "diode-sym",
		q: "Which end of the symbol, and which leg of the LED, is the P side?",
		a: "The left in both. The triangle's flat back is the P side, called the anode (A), and the bar is the N side, the cathode (K). On our LEDs the anode is the longer leg, and the cathode sits by the flat edge of the rim. Current flows the way the triangle points, from anode to cathode.",
	},
	{
		section: sections[1],
		pic: "diode-against",
		q: "Can current flow this way?",
		a: "No. A diode only passes current in the direction its triangle points.",
	},
	{
		section: sections[1],
		pic: "led-basic",
		q: "How much current flows?",
		a: "20 mA. The LED takes 2 V, which leaves 3 V across the resistor: $$I = \\frac{3\\,\\text{V}}{150\\,\\Omega} = 20\\,\\text{mA}$$",
	},
	{
		section: sections[1],
		pic: "led-sag",
		q: "How much current flows now?",
		a: "16 mA. The LED still takes about 2 V, leaving 2.4 V across the resistor: $$I = \\frac{2.4\\,\\text{V}}{150\\,\\Omega} = 16\\,\\text{mA}$$ With a plain resistor, the current follows the battery.",
	},
	{
		section: sections[1],
		pic: "led-reversed",
		q: "The battery is flipped. Does anything blow up?",
		a: "No. The LED blocks current this way, so no current flows and the whole 5 V lands across the LED backwards. It gets dangerous once that passes the LED's backwards rating, which is 5 V here, so this battery sits right at the limit.",
	},
	{
		section: sections[1],
		pic: "led-string",
		q: "What's the voltage the whole string needs with 12 LEDs?",
		a: "19.2 V. The voltages of each LED add in series: $$12 \\times 1.6\\,\\text{V} = 19.2\\,\\text{V}$$",
	},
	{
		section: sections[1],
		pic: "led-leak",
		q: "Two LEDs in series sit backwards across 8 V. Does each one get 4 V?",
		a: "Only if they leak the same. A backwards LED still lets a tiny leakage current through, and the same current has to pass through both. The LED that leaks less needs more voltage to pass it, so it takes the bigger share. Leakage varies a lot from part to part, so the split can be very uneven.",
	},

	{
		section: sections[2],
		pic: "box-mos",
		q: "A pin's voltage has to control how much current flows through this motor, without the pin supplying that current. What goes in the box?",
		a: "A MOSFET. It's a kind of transistor, a valve for current: the voltage on its gate sets how much flows from drain to source, and the gate itself draws no steady current.",
	},
	{
		section: sections[2],
		pic: "mos-xsec-off",
		q: "With the gate at 0 V, can current flow this way?",
		a: "No. The path crosses from N to P and back to N. Whichever way you push, one of those crossings is backwards.",
	},
	{
		section: sections[2],
		pic: "mos-xsec-on",
		q: "With the gate 5 V above the source, electrons gather under the glass. What does that do?",
		a: "It makes a channel. The strip of electrons under the gate acts as N-type silicon joining source to drain, so current can flow. Enough electrons gather only once the gate passes the threshold voltage, and the further past it the gate goes, the more gather and the more easily current flows.",
	},
	{
		section: sections[2],
		pic: "mos-cap",
		q: "The pin switches the gate from 0 V to 5 V. Does current flow into the gate?",
		a: "Only for a moment. The gate, the glass and the silicon under it form a capacitor. Current flows while it charges up to 5 V, then stops.",
	},
	{
		section: sections[2],
		pic: "mos-lowside",
		q: "Can current flow this way?",
		a: "Yes. The gate is 5 V above the source, past the 2 V threshold, so the MOSFET conducts from drain to source.",
	},
	{
		section: sections[2],
		pic: "mos-vgs",
		q: "Is it on or off?",
		a: "Off. The gate's voltage relative to the source is below the 2 V threshold: $$5\\,\\text{V} - 4\\,\\text{V} = 1\\,\\text{V}$$",
	},
	{
		section: sections[2],
		pic: "mos-gate-path",
		q: "Can current flow this way?",
		a: "No. The gate is insulated from the rest of the MOSFET, so no steady current flows into it.",
	},
	{
		section: sections[2],
		pic: "mos-compare",
		q: "Which MOSFET passes more current?",
		a: "The one at 10 V. Just past the threshold a MOSFET only opens a little, and the further the gate goes above the source, the wider it opens.",
	},
	{
		section: sections[2],
		pic: "pmos-xsec",
		q: "In a P-channel MOSFET the silicon types are swapped. With its source at 12 V, what does the gate have to do to turn it on?",
		a: "Go below its source by more than its threshold. A gate below the source pulls holes up under the glass, making a P-type channel between the two P islands. That's why P-channel parts usually sit on the high side, with the source at the supply.",
	},

	{
		section: sections[3],
		pic: "box-bjt",
		q: "This pin can supply about 20 mA, and the motor needs 2 A. Besides a MOSFET, which transistor could go in the box and run off the pin's current?",
		a: "A BJT, short for bipolar junction transistor. The pin's 20 mA flows into its base, which allows a much larger current to flow from its collector to its emitter (2 A in this case).",
	},
	{
		section: sections[3],
		pic: "bjt-spot",
		q: "Which of these is a BJT, and what are its three pins called?",
		a: "B. A BJT is drawn with a circle, a bar for the base and an arrow on the emitter, and its pins are the base, collector and emitter. A MOSFET's gate is drawn as a separate plate because it's insulated. Its arrow sits on the middle line, which is wired to the source.",
	},
	{
		section: sections[3],
		pic: "bjt-xsec",
		q: "Most electrons leaving the emitter end up in the collector. Why do so few come out the base?",
		a: "The base is very thin. Most electrons cross it before they meet a hole, and the collector's positive voltage sweeps them in. About 1 in 100 does meet a hole and leaves through the base wire, and that small flow is the base current.",
	},
	{
		section: sections[3],
		pic: "bjt-vbe",
		q: "What determines a BJT's collector current?",
		a: "The base-emitter voltage. The base and emitter meet at a PN junction, whose depletion region pushes back on electrons trying to cross. Raising the voltage weakens that push. Electrons in the emitter move around with random energies, and only the most energetic make it across, so a small weakening lets many more through: each extra 60 mV lets about ten times as many cross.",
	},
	{
		section: sections[3],
		pic: "npn-base",
		q: "Can current flow this way?",
		a: "Yes. A BJT's base draws current. It flows in the base and out the emitter, and that small current lets a much bigger one flow from collector to emitter.",
	},
	{
		section: sections[3],
		pic: "npn-gain",
		q: "How much current flows from collector to emitter?",
		a: "10 mA. Collector current is gain × base current: $$100 \\times 100\\,\\mu\\text{A} = 10\\,\\text{mA}$$ as long as the supply can push that much through the load.",
	},
	{
		section: sections[3],
		pic: "npn-low",
		q: "Can current flow this way?",
		a: "Almost none. The base has to sit about 0.6 V above the emitter before current starts to flow. Remember, those PN junctions need a little push before significant current can flow through them.",
	},
	{
		section: sections[3],
		pic: "pnp-xsec",
		q: "In a PNP the layers are swapped and holes do the crossing. With its emitter at 5 V, where does the base have to sit for holes to flow like this?",
		a: "About 0.6 V below its emitter, near 4.4 V. That pushes holes from the emitter into the thin base, and most of them cross into the collector. Conventional current flows in the emitter and out the collector.",
	},
	{
		section: sections[3],
		pic: "bjt-np",
		q: "How do you tell an NPN from a PNP on a schematic?",
		a: "By the arrow on the emitter. It points the way current flows: out of an NPN and into a PNP. One way to remember it: NPN, Not Pointing iN.",
	},

	{
		section: sections[4],
		pic: "brk-gate-high",
		q: "The gate is driven 30 V above the source. What happens?",
		a: "The MOSFET is likely ruined. The gate sits on very thin glass, and the IRFZ44 (the particular MOSFET we're using) is only rated for 20 V between gate and source. Past that, electrons get forced through the glass and melt a tiny hole in it, which shorts the gate for good.",
	},
	{
		section: sections[4],
		pic: "brk-gate-neg",
		q: "The gate is driven 5 V below the source. Is anything damaged?",
		a: "No. The MOSFET is just off harder lol. Its gate is safe anywhere within 20 V of the source, either way.",
	},
	{
		section: sections[4],
		pic: "brk-float",
		q: "The gate wire comes loose. What can happen?",
		a: "The MOSFET can end up half on and overheat. With nothing connected, stray charge can leave the gate at any voltage, including just past the threshold, where the MOSFET only opens a little. Say it lets 1 A through: the 6 Ω load drops 6 V, and the other 6 V sits across the MOSFET, so it turns $6\\,\\text{V} \\times 1\\,\\text{A} = 6\\,\\text{W}$ into heat, enough to cook it. A resistor from gate to ground drains the stray charge and holds it off.",
	},
	{
		section: sections[4],
		pic: "brk-base-direct",
		q: "The base is wired straight to a 5 V pin with no resistor. What happens?",
		a: "The pin or the transistor can burn out. The base-emitter junction is a PN junction, so a little more voltage means a lot more current, and with nothing to limit it the base takes all the current the pin can give. A resistor in series with the base sets a safe current.",
	},
	{
		section: sections[4],
		pic: "brk-sat",
		q: "The base sits above the collector. Is the transistor damaged?",
		a: "No. It's saturated, which means fully on. The base asks for more current than the load lets through, so the collector falls until the load takes almost all 12 V. Once the collector is below the base, the base-collector junction gets pushed forward too and electrons flow back out of the collector. At about 0.2 V that backflow holds the current to what the load allows, and any extra base current is wasted.",
	},
	{
		section: sections[4],
		pic: "brk-be-rev",
		q: "The emitter sits 12 V above the base. Is the transistor damaged?",
		a: "Probably. The 2N3904 (the particular BJT we're using) is only rated for about 6 V backwards across its base-emitter junction, and past that the junction breaks down and conducts. Current forced through it that way wears the transistor out and lowers its gain.",
	},

	{
		section: sections[5],
		pic: "ch-what",
		q: "In one breath, what does this circuit do?",
		a: "It regulates the current through the LEDs. Whenever the tone pin is high it holds them near 98 mA, which keeps them from getting cooked (they're rated for 100 mA) and keeps them consistently bright while the supply sags, as long as it stays above about 21 V.",
	},
	{
		section: sections[5],
		pic: "ch-main",
		q: "Can current flow this way?",
		a: "Yes. This is the LED current, about 98 mA.",
	},
	{
		section: sections[5],
		pic: "ch-gate",
		q: "Can current flow this way?",
		a: "No. Q1's gate is insulated, so no steady current flows in.",
	},
	{
		section: sections[5],
		pic: "ch-q2-path",
		q: "Can current flow this way?",
		a: "Yes, a steady milliamp or so. The pin pulls Q1's gate up through $R_G$ the whole time the hoop is lit, so Q2 has to keep pulling it down just as hard to hold 98 mA. The two pulls balance, and the gate sits at one steady voltage.",
	},
	{
		section: sections[5],
		pic: "ch-q1",
		q: "What does this part do?",
		a: "It's an N-channel MOSFET that lets more current flow from drain to source the higher the voltage on its gate. Here it's the valve the LED current passes through.",
	},
	{
		section: sections[5],
		pic: "ch-rs",
		q: "What does this part do?",
		a: "It decides the LED current. While the hoop is lit, the circuit settles with about 0.67 V across $R_S$, so $$I = \\frac{0.67\\,\\text{V}}{6.8\\,\\Omega} \\approx 98\\,\\text{mA}$$",
	},
	{
		section: sections[5],
		pic: "ch-q2",
		q: "What does this part do?",
		a: "It reacts to the voltage across $R_S$, which sits across its base and emitter. Around 0.6 V it starts to conduct and pulls Q1's gate down.",
	},
	{
		section: sections[5],
		pic: "ch-creep",
		q: "The LED current creeps above 98 mA. How does the circuit bring it back?",
		a: "",
		steps: [
			"The voltage across $R_S$ rises.",
			"Q2 conducts more.",
			"Q2 pulls Q1's gate lower.",
			"Q1 closes a little.",
			"The LED current falls back toward 98 mA.",
		],
	},
	{
		section: sections[5],
		pic: "ch-settle",
		q: "The tone pin goes high. Which curve does the LED current follow, A or B?",
		a: "B. This circuit was simulated, and the current was shown to climb and level off within about 7 µs without overshooting or oscillating. This means the system is overdamped. You can learn more about the way the circuit works step by step in [this logbook entry](/logbook/aerodesign/2026-10-12-led-driver-practice-questions/).",
	},
];
