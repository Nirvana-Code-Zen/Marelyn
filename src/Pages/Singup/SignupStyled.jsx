import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  width: 70%;
  height: 350px;
  justify-content:space-evenly;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  
  & label {
    font-family: ${props => props.theme.fonts.titles};
    letter-spacing: 2px;

    & a {
      font-size: 13px;
      text-align:right;
      font-weight: bold;
    }
  }

  & .inputSelect {
      width: 180px;
      padding: 0 10px;
      font-size: 16px;
      border: 1px solid ${props => props.theme.colors.secondary};
      border-radius: 5px ;
      height: 34px;
      color: white;
      background-color:${props => props.theme.colors.secondary};
      font-family: ${props => props.theme.fonts.titles};
      letter-spacing: 1.5px;
      margin-block-end:40px;
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

  &:focus {
    outline: none;
    border-bottom: none;
  }
 
  &:focus ~ label .label-char,
  &:valid ~ label .label-char {
    transform: translateY(-20px);
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after { 
    width: 50%;
  }`

export default Form
