import React from 'react'
import Grid from '../Grid/grid.component'
import Spacer from '../Spacer/spacer.component'
import Text from '../Text/text.component'

const Imprint = () => (
	<Grid.Container>
		<Grid.Row>
			<Spacer isV size="80px" />
			<Text.H2 maxWidth="320px">Imprint</Text.H2>
			<Spacer isV size="20px" />
			<Text.P maxWidth="520px">
				Manuel Villing, Greifenhagener Str. 8, 10437 Berlin
			</Text.P>
			<Text.P maxWidth="520px">Email: hi(at)manuelvilling.de</Text.P>
		</Grid.Row>
	</Grid.Container>
)

export default Imprint
