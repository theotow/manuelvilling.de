import styled from 'styled-components'

const H2 = styled.h2`
    ${props => props.theme.boldFont} color: #000;
    font-size: 18px;
    ${props => props.maxWidth && `max-width: ${props.maxWidth}`}
`
const P = styled.p`
    ${props => props.theme.lightFont} color: #000;
    font-size: 14px;
    line-height: 1.4;
    ${props => props.maxWidth && `max-width: ${props.maxWidth}`}
`

export default { H2, P }
