import styled from 'styled-components'

const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
  color: white;
  font-family: ${props => props.theme.fonts.titles};
  letter-spacing: 4px;
`

export const H2 = styled.h2`
  font-size: 40px;
  text-align: center;
  
`

export const H4 = styled.h4`
  font-size: 35px;
  text-align: center;
  font-family: ${props => props.theme.fonts.titles};
  letter-spacing: 2px;
`

export default H1
