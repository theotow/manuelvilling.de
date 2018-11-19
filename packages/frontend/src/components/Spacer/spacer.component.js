import styled from 'styled-components'

// prettier-ignore
const Spacer = styled.div`
	${(props) => (props.isV ? `height: ${props.size};` : '')} ${(props) =>
	props.isH ? `width: ${props.size};` : ''};
`
export default Spacer
