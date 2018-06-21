import styled from 'styled-components'
import Icon from '../Icon/icon.component'
import Grid from '../Grid/grid.component'
import Nav from '../Nav/nav.component'
import { Link } from 'react-router-dom'

const HeaderWrap = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 76px;
	background-color: #fff;
	z-index: 3;
`
const HeaderInner = styled.div`
	padding: 26px 0 0 0;
	display: flex;
	max-height: 35px;
	justify-content: space-between;
`

const Header = () => (
	<HeaderWrap>
		<Grid.Container>
			<Grid.Row>
				<HeaderInner>
					<Link to="/">
						<Icon.Header />
					</Link>
					<Nav />
				</HeaderInner>
			</Grid.Row>
		</Grid.Container>
	</HeaderWrap>
)

export default Header
