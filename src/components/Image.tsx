import React from 'react';
import LazyLoad from 'react-lazyload';
import { theme } from "styles/theme";
import { Visuals, visuals } from 'utils/visuals';
import styled from 'styled-components/macro';

interface Styles {
	maxWidth?: string;
	width?: string;
	height?: string;
	margin?: string;
	maxHeight?: string;
	borderRadius?: string;
}

interface ImageProps extends Styles {
	src: Visuals;
	mobile_src?: Visuals;
	onClick?: () => void;
	alt: string;
}

const Img = styled.img<Styles>`
	margin: ${({ margin }) => margin || ''};
	max-width: ${({ maxWidth }) => maxWidth || ''};
	width: ${({ width }) => width || ''};
	height: ${({ height }) => height || ''};
	max-height: ${({ maxHeight }) => maxHeight || ''};
	border-radius: ${({ borderRadius }) => borderRadius || ''};
`;

export const Image: React.FC<ImageProps> = ({
	alt,
	src,
	mobile_src,
	onClick,
	...rest
}) => {
	return (
		<LazyLoad height={200}>
			<picture onClick={onClick}>
				{mobile_src && <source media={theme.breakpoints.lmobile} srcSet={visuals[mobile_src]} />}
				<Img src={visuals[src]} alt={alt} {...rest} />
			</picture>
		</LazyLoad>
	);
};
