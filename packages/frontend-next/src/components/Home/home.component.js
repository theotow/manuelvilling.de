import React from 'react'
import Grid from '../Grid/grid.component'
import Spacer from '../Spacer/spacer.component'
import Text from '../Text/text.component'
import PokeButton from '../../containers/PokeButton/pokebutton.container'
import Head from 'next/head'

const Home = () => (
	<Grid.Container>
		<Head>
			<title>Manuel Villing - Webdevelopment Portfolio</title>
		</Head>
		<Grid.Row>
			<Spacer isV size="80px" />
			<Text.H2 maxWidth="520px">
				Hi, im Manuel Villing, full-stack dev from germany.
			</Text.H2>
			<Spacer isV size="20px" />
			<Text.P maxWidth="520px">
				I focus on design focused webapps using component based layouts
				(react) in javascript.
			</Text.P>
			<Text.P maxWidth="520px">
				I also like golang, kotlin, rust and devops.
			</Text.P>
			<Text.P maxWidth="520px">
				Currently learning about graph dbs.
			</Text.P>
			<Text.P maxWidth="520px">
				Im also AWS Certified Solution Architect.
			</Text.P>
			<Spacer isV size="20px" />
			<PokeButton />
		</Grid.Row>
	</Grid.Container>
)

export default Home
