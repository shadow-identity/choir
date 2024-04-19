export const songs = [
	{
		name: {
			full: ' What shall we do with the drunken sailor?',
			short: 'Drunken Sailor',
			icon: '⛵',
		},
		slug: 'sailor',
		parts: [
			{ name: 'T1', recording: 'sailor-t1.mp4' },
			{ name: 'T2', recording: 'sailor-t2.mp4' },
			{ name: 'B1', recording: 'sailor-b1.mp4' },
			{ name: 'B2', recording: 'sailor-b2.mp4' },
		],
	},
	{
		name: { full: 'O Susanna', short: 'O Susanna', icon: '👩' },
		slug: 'susanna',
		parts: [
			{ name: 'T1 Ober', recording: 'susanna-t1o.mp4' },
			{ name: 'T1 Unter', recording: 'susanna-t1u.mp4' },
			{ name: 'T2', recording: 'susanna-t2.mp4' },
			{ name: 'B1', recording: 'susanna-b1.mp4' },
			{ name: 'B2', recording: 'susanna-b2.mp4' },
		],
	},
	{
		name: {
			full: "Ich brech' die Herzen des stolzesten Frau'n",
			short: "Ich brech' die Herzen",
			icon: '💔',
		},
		slug: 'herzen',
		parts: [
			{ name: 'T1', recording: 'herzen-t1.mp4' },
			{ name: 'T2', recording: 'herzen-t2.mp4' },
			{ name: 'B1', recording: 'herzen-b1.mp4' },
			{ name: 'B2', recording: 'herzen-b2.mp4' },
		],
	},
	{
		name: {
			full: 'Slatko spavaj',
			short: 'Slatko spavaj',
			icon: '🛏️',
		},
		slug: 'spavaj',
		parts: [
			{ name: 'T1', recording: 'slatko-t1.mp4' },
			{ name: 'T2', recording: 'slatko-t2.mp4' },
			{ name: 'B1', recording: 'slatko-b1.mp4' },
			{ name: 'B2', recording: 'slatko-b2.mp4' },
		],
	},
] as const
