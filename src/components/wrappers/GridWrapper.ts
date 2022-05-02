import { Box } from "./Box";
import { grid, GridProps, compose } from "styled-system";
import styled from "styled-components/macro";
import { Theme } from "styles/theme";

interface GridWrapperProps<T> extends GridProps<T> {}

const gridProps = compose(grid);

export const GridWrapper = styled(Box)<GridWrapperProps<Theme>>`
	display: grid;
	&& {
		${gridProps}
	}
`;