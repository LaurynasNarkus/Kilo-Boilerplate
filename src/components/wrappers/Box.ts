import styled from 'styled-components/macro';
import { Theme } from 'styles/theme';
import {
	alignSelf,
	AlignSelfProps,
	border,
	BorderProps,
	borderRadius,
	BorderRadiusProps,
	BoxShadowProps,
	color,
	ColorProps,
	compose,
	display,
	DisplayProps,
	layout,
	LayoutProps,
	margin,
	MarginProps,
	position,
	PositionProps,
	shadow,
	ShadowProps,
	space,
	SpaceProps,
	textAlign,
	TextAlignProps,
	zIndex,
	ZIndexProps,
} from 'styled-system';

export const boxProps = compose(
	alignSelf,
	border,
	borderRadius,
	color,
	display,
	layout,
	margin,
	position,
	shadow,
	space,
	textAlign,
	zIndex
);

export interface Styles<T>
	extends AlignSelfProps<T>,
		BorderProps<T>,
		BorderRadiusProps<T>,
		BoxShadowProps<T>,
		ColorProps<T>,
		DisplayProps<T>,
		LayoutProps<T>,
		MarginProps<T>,
		PositionProps<T>,
		ShadowProps<T>,
		SpaceProps<T>,
		TextAlignProps<T>,
		ZIndexProps<T> {}

export const Box = styled.div<Styles<Theme>>`
	&& {
		${boxProps};
	}
`;
