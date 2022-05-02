import React from 'react';
import { theme } from 'styles/theme';

import {  Box, Container, Typography } from 'components';

const Home: React.FC = () => {

	return (
		<Container backgroundColor='secondary'>
			<Box
				margin={theme.space.s5}
				height = '100vh'
			>
				<Typography
					type='h3'
					letterSpacing= "-0.1rem"
					padding= {theme.space.s5}
					textAlign= "center"
				>
					🥘 Boilerplate
				</Typography>
			</Box>
		</Container>
	);
};

export default Home;