import styled from "styled-components/macro";
import { Theme, theme } from "styles/theme";
import {
	position,
	PositionProps,
	minHeight,
	MinHeightProps,
	backgroundColor,
	BackgroundColorProps,
	compose,
} from "styled-system";

const sectionProps = compose(position, minHeight, backgroundColor);
interface SectionWrapperProps<T>
	extends PositionProps<T>,
	MinHeightProps<T>,
	BackgroundColorProps<T> {}

export const SectionWrapper = styled.section<SectionWrapperProps<Theme>>`
	position: relative;
	padding: 4rem;

	@media ${theme.breakpoints.lmobile} {
	padding: 3rem;
	}
	&& {
	${sectionProps}
	}
`;