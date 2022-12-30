import style from 'styled-components'

export default style.button`
  padding: .3rem 1rem;
  background: ${props => props.theme.colors.secondary};
  color: #FFF;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
`
