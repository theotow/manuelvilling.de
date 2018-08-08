import styled from 'styled-components'

const Button = styled.button`
	${(props) => props.theme.boldFont} color: #000;
	background: #f1ff1e;
	font-size: 16px;
	text-align: center;
	border: 0;
	cursor: pointer;
	height: 40px;
	min-width: 260px;
`
const ButtonBox = Button.withComponent('div').extend`
    max-width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: inherit;
`

const ButtonMain = ({ isBox, ...more }) => {
	const Component = isBox ? ButtonBox : Button
	return <Component {...more} />
}

export default ButtonMain
