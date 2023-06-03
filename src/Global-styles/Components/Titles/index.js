import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 50px;
  font-family: ${props => props.theme.fonts.texts_titles};
  color: ${props => props.color || props.theme.colors.secondary_second_complement}
`

export const H2 = styled.h2`
  font-size: 40px;
  font-family: ${props => props.theme.fonts.texts_titles};
  text-align: center;
  letter-spacing: 4px;
  color: ${props => props.color || props.theme.colors.texts_titles}
`

export const H4 = styled.h4`
  font-size: 20px;
  text-align: center;
  font-family: ${props => props.theme.fonts.texts_titles};
  letter-spacing: 4px;
  padding-left: 1rem;
 
`
export default H1
