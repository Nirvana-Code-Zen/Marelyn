import styled from 'styled-components'

export default styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 38px;
  border-radius: 16px;
  border: 1px solid transparent;
  color: #FFFFFF;
  background-color: ${props => props.theme.colors.secondary};
  font-size: 16px;
  letter-spacing: 1px;
  transition: all 0.15s linear;
  cursor: pointer;
  letter-spacing: 2.5px;

  &:hover {
    background-color: transparent;
    border-color:  ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    transform: translateY(-5px) scale(1.05);
  }

  &:active {
    background-color: transparent;
    border-color:  ${props => props.theme.colors.secondary};
    color:  ${props => props.theme.colors.secondary};
    transform: translateY(5px) scale(0.95);
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.16);
    color: #8E8E93;
    border-color: #8E8E93;
  }

`
