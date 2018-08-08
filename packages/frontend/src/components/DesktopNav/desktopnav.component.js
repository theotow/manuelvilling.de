import styled from 'styled-components'
import Text from '../Text/text.component'

export const Ul = styled.ul`
	display: inline-block;
	height: 100%;
`
export const Li = styled.li`
	float: left;
	padding-left: 10px;
	height: 100%;
`

const DesktopNav = () => (
	<nav>
		<Ul>
			<Li>
				<Text.ActiveStyledLink to="/blog">Blog</Text.ActiveStyledLink>
			</Li>
		</Ul>
	</nav>
)

export default DesktopNav
