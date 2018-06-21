import styled from 'styled-components'

const BouncyDiv = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	${(props) => props.theme.lightFont} color: #000;
	font-size: 14px;
`

const ResizeLoader = () => <BouncyDiv>Transforming</BouncyDiv>

export default ResizeLoader
