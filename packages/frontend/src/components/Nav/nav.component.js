import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { GetMedia } from '../../shared/media'
import Icon from '../Icon/icon.component'
import React from 'react'

const Ul = styled.ul`
	display: inline-block;
	height: 100%;
`
const UlMobile = styled.ul`
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	margin-top: 12px;
	height: auto;
	background: white;
	border-top: 1px solid #000;
`
const Li = styled.li`
	float: left;
	padding-left: 10px;
	height: 100%;
`
const LiMobile = styled.li`
	box-sizing: border-box;
	padding-left: 15px;
	padding-right: 15px;
	height: 30px;
	border-bottom: 1px solid #000;
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

const DesktopNav = () => (
	<Ul>
		<Li>
			<ActiveStyledLink to="/blog">Blog</ActiveStyledLink>
		</Li>
	</Ul>
)

class MobileNav extends React.Component {
	state = {
		open: false
	}

	toggle = () => {
		this.setState((state) => ({ open: !state.open }))
	}

	render() {
		return (
			<React.Fragment>
				<Ul>
					<Li>
						<a href="#" onClick={this.toggle}>
							<Icon.Burger />
						</a>
					</Li>
				</Ul>
				{this.state.open && (
					<UlMobile>
						<LiMobile>
							<ActiveStyledLinkMobile to="/">
								Home
							</ActiveStyledLinkMobile>
						</LiMobile>
						<LiMobile>
							<ActiveStyledLinkMobile to="/blog">
								Blog
							</ActiveStyledLinkMobile>
						</LiMobile>
					</UlMobile>
				)}
			</React.Fragment>
		)
	}
}

const MobileNavWithRouter = withRouter(({ location }) => (
	<MobileNav key={location.pathname} />
))

const mapSizeToComp = (size) => {
	if (size === 'lg') return <DesktopNav />
	return <MobileNavWithRouter />
}

const Nav = () => (
	<nav>
		<GetMedia>{mapSizeToComp}</GetMedia>
	</nav>
)

export default Nav
