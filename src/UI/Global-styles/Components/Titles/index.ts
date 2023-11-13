import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 3.12rem;
  font-family: ${props => props.theme.fonts.texts_titles};
  color: ${props => props.color || props.theme.colors.secondary_second_complement}
`

export const H2 = styled.h2`
  font-size: 2.5rem;
  font-family: ${props => props.theme.fonts.texts_titles};
  text-align: center;
  letter-spacing: 0.25rem;
  color: ${props => props.color || props.theme.colors.texts_titles}
`

export const H4 = styled.h4`
  font-size: 1.25rem;
  text-align: center;
  font-family: ${props => props.theme.fonts.texts_titles};
  letter-spacing: 0.25rem;
  padding-left: 1rem;
 
`
