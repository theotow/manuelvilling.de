import styled from 'styled-components'
import Spacer from '../Spacer/spacer.component'

const LinkStyled = styled.a`
	${(props) => props.theme.boldFont} color: #000;
	text-decoration: none;
	font-size: 14px;
`
const Date = styled.span`
	${(props) => props.theme.lightFont} color: #000;
	text-decoration: none;
	font-size: 14px;
`

function cleanUpDate(date) {
	return date && date.split(' ')[0]
}

const Entry = ({ title, link, date }) => (
	<div>
		<div>
			<LinkStyled href={link} target="_blank">
				{title}
			</LinkStyled>{' '}
			<Date>- {cleanUpDate(date)}</Date>
		</div>
		<Spacer isV size="20px" />
	</div>
)

export default Entry
