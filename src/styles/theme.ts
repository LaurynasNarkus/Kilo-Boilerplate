export type Colors = keyof typeof colors;

const colors = {
	primary: '#101326',
	secondary: '#E7FAFE',
	accent: '#E34578',
	white: '#ffffff',
	black: '#000000',
	grey: 'rgba(0, 0, 0, 0.1)',
	darkGrey: 'rgba(0, 0, 0, 0.6)',
};

export const theme = {
	borders: {
		brd01: '0.0625rem',
		brd04: '0.25rem',
		brd08: '0.5rem',
		brd16: '1rem',
	},
	borderRadius: {
		brdr08: '0.5rem',
		brdr12: '0.75rem',
		brdr16: '1rem',
		brdr24: '1.5rem',
		brdr32: '2rem',
		brdr48: '3rem',
	},
	breakpoints: ['24rem', '47rem', '90rem'] as unknown as Breakpoints,
	colors,
	fontFamily: { primary: 'Inter' },
	fontSizes: {
		fs12: '0.75rem',
		fs14: '0.875rem',
		fs16: '1rem',
		fs24: '1.5rem',
		fs32: '2rem',
		fs40: '2.5rem',
		fs48: '3rem',
		fs56: '3.5rem',
		fs64: '4rem',
		fs72: '4.5rem',
		fs80: '5rem',
	},
	fontWeights: {
		fw100: 100,
		fw300: 300,
		fw500: 500,
		fw600: 600,
		fw700: 700,
	},
	lineHeight: {
		lh1: '1rem',
		lh15: '1.5rem',
		lh2: '2rem',
		lh25: '2.5rem',
		lh3: '3rem',
		lh35: '3.5rem',
		lh4: '4rem',
		lh45: '4.5rem',
		lh5: '5rem',
	},	
	typography: {
		h1: {
			fonstSize: '5rem',
			lineHeight: '6.5rem',
			fontSizeMobile: '4rem',
			lineHeightMobile: '5.25rem',
			fontWeight: 500,
		},
		h2: {
			fonstSize: '4.5rem',
			lineHeight: '5.875rem',
			fontSizeMobile: '3.5rem',
			lineHeightMobile: '4.5625rem',
			fontWeight: 500,
		},
		h3: {
			fonstSize: '3.5rem',
			lineHeight: '4.5625rem',
			fontSizeMobile: '2.5rem',
			lineHeightMobile: '3.25rem',
			fontWeight: 600,
		},
		h4: {
			fonstSize: '3rem',
			lineHeight: '3.9375rem',
			fontSizeMobile: '2rem',
			lineHeightMobile: '2.625rem',
			fontWeight: 600,
		},
		h5: {
			fonstSize: '2.5rem',
			lineHeight: '3.25rem',
			fontSizeMobile: '1.625rem',
			lineHeightMobile: '2.125rem',
			fontWeight: 600,
		},
		h6: {
			fonstSize: '2rem',
			lineHeight: '2.625rem',
			fontSizeMobile: '1.5rem',
			lineHeightMobile: '2rem',
			fontWeight: 600,
		},
	},
	space:{
		s1: '1rem',
		s15: '1.5rem',
		s2: '2rem',
		s25: '2.5rem',
		s3: '3rem',
		s35: '3.5rem',
		s4: '4rem',
		s45: '4.5rem',
		s5: '5rem',
	},
	zIndex: {
		base: 0,
		upperElement: 1,
		modal: 10,
		loader: 11,
	},
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
	_: T;
	lmobile: T;
	ltablet: T;
	desktop: T;
};
