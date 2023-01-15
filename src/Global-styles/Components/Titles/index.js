import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 50px;
  font-family: ${props => props.theme.fonts.titles};
`

export const H2 = styled.h2`
  font-size: 40px;
  font-family: ${props => props.theme.fonts.titles};
  text-align: center;
  letter-spacing: 4px;
`

export const H4 = styled.h4`
  font-size: 30px;
  text-align: center;
  text-align: center;
  font-family: ${props => props.theme.fonts.titles};
  letter-spacing: 4px;
`

export default H1
