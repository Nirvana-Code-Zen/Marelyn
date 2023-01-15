import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin:auto;
  flex-direction: column;
  align-items: center;
  width: ${props => props.$width || '80%'};
  height: 350px;
  gap: 20px;

  & label {
    font-family: ${props => props.theme.fonts.titles};
    letter-spacing: 2px;

    & a {
      font-size: 13px;
      text-align:right;
      font-weight: bold;
    }
  }
`

export const GroupForm = styled.div`
  position: relative;
 
  & .bar:before {
    left: 50%
  } 

  & .bar:after {
    right: 50%
  }

  & .bar:before, & .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${props => props.theme.colors.secondary};
    transition: 0.2s ease all;
  }

  & label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    display: flex;
  }
`

export const Input = styled.input`
  font-size: 17px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  background: transparent;
  
  & .name{
    border: 1px solid red;
  }

  &:focus {
    outline: none;
    border-bottom: none;
  }

  &:focus ~ label .label-char {
    transform: translateY(-20px);
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after { 
    width: 50%;
  }
`

export default Form
