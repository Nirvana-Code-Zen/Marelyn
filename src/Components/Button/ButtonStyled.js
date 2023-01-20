import styled from 'styled-components'

export default styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
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
  &:hover .arrow {
    background-color: #FFF;
  }

  & .arrow {
    margin-top: 1px;
    width: 10px;
    height: 2px;
    position: relative;
    transition: 0.2s;
  }

  & .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: 0 solid #FFF;
    border-width: 0 2px 2px 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }

  &:hover .arrow:before {
    right: 0;
  }

`
