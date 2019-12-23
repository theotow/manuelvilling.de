import { Route } from 'react-router-dom'
import Grid from '../Grid/grid.component'
import Spacer from '../Spacer/spacer.component'
import Text from '../Text/text.component'

const Status = ({ code, children }) => (
	<Route
		render={({ staticContext }) => {
			if (staticContext) staticContext.status = code
			return children
		}}
	/>
)

const NoMatch = () => (
	<Status code={404}>
		<Grid.Container>
			<Grid.Row>
				<Spacer isV size="80px" />
				<Text.H2 maxWidth="320px">Not Found</Text.H2>
			</Grid.Row>
		</Grid.Container>
	</Status>
)

export default NoMatch
