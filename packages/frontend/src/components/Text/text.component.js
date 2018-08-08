import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'

const H2 = styled.h2`
	${(props) => props.theme.boldFont} color: #000;
	font-size: 18px;
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
`
const P = styled.p`
	${(props) => props.theme.lightFont} color: #000;
	font-size: 14px;
	line-height: 1.4;
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
`

const StyledLink = styled(Link)`
	${(props) => props.theme.lightFont} color: #000;
	${(props) =>
		`text-decoration: ${props['data-active'] ? 'underline' : 'none'};`};
	line-height: 2;
	height: 100%;
`
const StyledLinkMobile = styled(StyledLink)`
	display: block;
	width: 100%;
`

const linkFactory = (Component) => ({ to, children }) => {
	if (!to)
		return (
			<Component to={to} active={false}>
				{children}
			</Component>
		)
	return (
		<Route
			path={to}
			exact
			children={({ match }) => (
				<Component to={to} data-active={match && 'true'}>
					{children}
				</Component>
			)}
		/>
	)
}

const ActiveStyledLink = linkFactory(StyledLink)
const ActiveStyledLinkMobile = linkFactory(StyledLinkMobile)

export default { H2, P, ActiveStyledLink, ActiveStyledLinkMobile }
