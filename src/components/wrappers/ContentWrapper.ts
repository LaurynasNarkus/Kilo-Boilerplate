import { Box } from "./Box";
import styled from 'styled-components/macro';
import { theme } from "styles/theme";

export interface ContentWrapperStyles {
	margin?: string;
    maxWidth?: string;
	padding?: string;
}

export const ContentWrapper = styled(Box)<ContentWrapperStyles>`
	margin: 0 auto;
    max-width: 58rem;
	padding: 0 1rem;

	@media ${theme.breakpoints.lmobile} {
		max-width: 100%;
	}
`;