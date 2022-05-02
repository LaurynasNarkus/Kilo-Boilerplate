import { Colors } from 'styles/theme';
import { Theme, theme } from 'styles/theme';
import styled from 'styled-components/macro';
import {
    backgroundColor,
    BackgroundColorProps,
    compose,
	position,
	PositionProps,
} from 'styled-system';

const containerProps = compose(
	position,
    backgroundColor,
);

export interface ContainerProps extends PositionProps<Theme>, BackgroundColorProps<Theme> {
	backgroundColor?: Colors;
}

export const Container = styled.div<ContainerProps>`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 72rem;
    background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.white};

    @media ${theme.breakpoints.lmobile} {
		max-width: 100%;
	}

	&& {
		${containerProps};
	}
`;