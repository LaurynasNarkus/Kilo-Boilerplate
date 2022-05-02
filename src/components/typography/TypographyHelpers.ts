import { css } from 'styled-components/macro';

import { Theme } from 'styles/theme';
import { TextType } from './Typography';

export const applyTextType = (type: TextType, theme: Theme) => {
	switch (type) {
		case 'h1':
			return css`
				font-weight: ${theme.typography.h1.fontWeight};
				font-size: ${theme.typography.h1.fonstSize};
				line-height: ${theme.typography.h1.lineHeight};
			`;
		case 'h2':
			return css`
				font-weight: ${theme.typography.h2.fontWeight};
				font-size: ${theme.typography.h2.fonstSize};
				line-height: ${theme.typography.h2.lineHeight};
			`;
		case 'h3':
			return css`
				font-weight: ${theme.typography.h3.fontWeight};
				font-size: ${theme.typography.h3.fonstSize};
				line-height: ${theme.typography.h3.lineHeight};
			`;
		case 'h4':
			return css`
				font-weight: ${theme.typography.h4.fontWeight};
				font-size: ${theme.typography.h4.fonstSize};
				line-height: ${theme.typography.h4.lineHeight};
			`;
		case 'h5':
			return css`
				font-weight: ${theme.typography.h5.fontWeight};
				font-size: ${theme.typography.h5.fonstSize};
				line-height: ${theme.typography.h5.lineHeight};
			`;
		case 'h6':
			return css`
				font-weight: ${theme.typography.h6.fontWeight};
				font-size: ${theme.typography.h6.fonstSize};
				line-height: ${theme.typography.h6.lineHeight};
			`;
		case 'body16':
			return css`
				font-weight: ${theme.fontWeights.fw500};
				font-size: ${theme.fontSizes.fs16};
				line-height: ${theme.lineHeight.lh2};
			`;		
		case 'caption12':
			return css`
				font-weight: ${theme.fontWeights.fw500};
				font-size: ${theme.fontSizes.fs12};
				line-height: ${theme.lineHeight.lh1};
			`;		
	}
};
