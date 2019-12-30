import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import Text from '../../components/Text/text.component'
import Icon from '../../components/Icon/icon.component'
import { Ul, Li } from '../../components/DesktopNav/desktopnav.component'

const LiMobile = styled.li`
	box-sizing: border-box;
	padding-left: 15px;
	padding-right: 15px;
	height: 30px;
	border-bottom: 1px solid #000;
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

class MobileNav extends React.Component {
	state = {
		open: false,
	}

	toggle = () => {
		this.setState((state) => ({ open: !state.open }))
	}

	render() {
		return (
			<nav>
				<Ul>
					<Li>
						<a
							href="#"
							data-testid="mobile-nav-toggle-menu"
							onClick={this.toggle}>
							<Icon.Burger />
						</a>
					</Li>
				</Ul>
				{this.state.open && (
					<UlMobile>
						<LiMobile>
							<Text.ActiveStyledLinkMobile to="/">
								Home
							</Text.ActiveStyledLinkMobile>
						</LiMobile>
						<LiMobile>
							<Text.ActiveStyledLinkMobile to="/blog">
								Blog
							</Text.ActiveStyledLinkMobile>
						</LiMobile>
					</UlMobile>
				)}
			</nav>
		)
	}
}

const MobileNavWithRouter = withRouter(({ location }) => (
	<MobileNav key={location.pathname} />
))

export default MobileNavWithRouter
