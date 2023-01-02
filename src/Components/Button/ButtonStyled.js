import style from 'styled-components'

export default style.button`
  padding: .3rem 1rem;
  background: ${props => props.theme.colors.secondary_complement};
  border-radius: 10px;
  border: none;
  color: ${props => props.theme.colors.text_buttons};
  outline: none;
  cursor: pointer;
  height :45px;
  width: ${props => props.theme.width_sizing[props.width] || props.theme.width_sizing.wSixty};
  font-family: ${props => props.theme.fonts.titles};
`
