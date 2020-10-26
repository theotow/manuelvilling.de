import styled from 'styled-components'
import Icon from '../Icon/icon.component'
import Grid from '../Grid/grid.component'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const FooterWrap = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding-bottom: 10px;
	z-index: 1;
`
const Ul = styled.ul`
	float: right;
`
const Li = styled.li`
	float: left;
	padding-left: 10px;
`

const Link = styled.a``

const Gradient = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-image: linear-gradient(
		-180deg,
		rgba(238, 238, 238, 0.01) 28%,
		rgba(238, 238, 238, 0) 28%,
		rgb(216, 216, 216) 100%
	);
	background-size: 100% 260px;
	background-position: bottom;
	height: 260px;
`

const linkStyles = (props) => `
opacity: 0.4;
${props.theme.lightFont};
color: #000;
font-size: 10px;
text-decoration: none;
`

const AttrLink = styled.a`
	${(props) => linkStyles(props)}
`
const StyledRouterLink = styled(RouterLink)`
	${(props) => linkStyles(props)}
`

const Footer = () => (
	<React.Fragment>
		<FooterWrap>
			<Grid.Container>
				<Grid.Row>
					<StyledRouterLink to="/imprint">Imprint, </StyledRouterLink>
					<AttrLink href="https://www.emojione.com" target="_blank">
						Credit: Emoji icons provided free by EmojiOne
					</AttrLink>
					<Ul>
						<Li>
							<Link
								href="https://twitter.com/theotow"
								target="_blank">
								<Icon.Twitter />
							</Link>
						</Li>
						<Li>
							<Link
								href="https://github.com/theotow"
								target="_blank">
								<Icon.Github />
							</Link>
						</Li>
					</Ul>
				</Grid.Row>
			</Grid.Container>
		</FooterWrap>
		<Gradient />
	</React.Fragment>
)

export default Footer
