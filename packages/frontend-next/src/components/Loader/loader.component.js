import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  `

const Loader = styled.div`
	font-size: 10px;
	position: relative;
	text-indent: -9999em;
	border-top: 4px solid rgba(255, 255, 255, 0.2);
	border-right: 4px solid rgba(255, 255, 255, 0.2);
	border-bottom: 4px solid rgba(255, 255, 255, 0.2);
	border-left: 4px solid #000;
	transform: translateZ(0);
	animation: ${animation} 0.8s infinite linear;
	border-radius: 50%;
	width: 10px;
	height: 10px;
	&:after {
		border-radius: 50%;
		width: 10px;
		height: 10px;
	}
`

export default Loader
