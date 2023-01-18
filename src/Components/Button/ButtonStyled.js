import styled from 'styled-components'

export default styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 38px;
  border-radius: 15px;
  border: 1px solid transparent;
  color: #FFFFFF;
  background-color: ${props => props.theme.colors.secondary};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.titles};
  letter-spacing: 3px;
  transition: all 0.15s linear;
  cursor: pointer;
  margin: auto;
  margin-top: 40px;
  
  &:hover {
    background-color: transparent;
    border-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    transform: translateY(-5px) scale(1.05);
  }

  &:active {
    background-color: transparent;
    border-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    transform: translateY(5px) scale(0.95);
  }
  &:disabled {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text_hover};
    border-color:  ${props => props.theme.colors.secondary};
  }

`
