import styled from 'styled-components'

export const TabContainer = styled.div`
  cursor: pointer;
  background-color: ${props =>
    props.active ? props.theme.colors.secondary : props.theme.colors.primary};
  padding: 1rem;
  font-size: ${props => props.theme.fonts_sizes.button_text};
  letter-spacing: 2px;
  color: white;
`

export const HiddenRadioInput = styled.input`
  display: none;
`
