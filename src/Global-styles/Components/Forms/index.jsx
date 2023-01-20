import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  box-shadow: border-box;
  justify-content: ${props => props.$justify || 'center'};
  margin: ${props => props.$margin};
  margin-top: ${props => props.$top || '0'} ;
  flex-wrap: ${props => props.$wrap || 'wrap'};
  flex-direction: ${props => props.$direction || 'column'};
  align-items: center;
  width: ${props => props.$width || props.theme.width_porcentages};
  height: ${props => props.$height || '300px'};
  padding: ${props => props.$padding};

  & p {
    font-family: ${props => props.theme.fonts.titles};
    letter-spacing: 2px;
    font-size:15px;
    width: 75%;
    text-align: center;
    box-sizing: border-box;
  }
`

export const GroupForm = styled.div`
  position: relative;
  margin-left: ${props => props.$margin || '0px'};
 
  & .bar:before {
    left: 50%;
  } 

  & .bar:after {
    right: 50%;
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
    font-family: ${props => props.theme.fonts.titles};
    letter-spacing: 2px;
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    display: flex;
    transition: 0.2s ease-out;
  }
`

export const Input = styled.input`
  font-size: 17px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 260px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  background: transparent;

  
  &:focus {
    outline: none;
    border-bottom: none;
  }

  &:focus ~ label .label-char{
    transform: translateY(-20px);
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after { 
    width: 50%;

  }
`

export const Select = styled.select`
  display: flex;
  width: 250px;
  height: 40px;
  font-size: 18px;
  background: ${props => props.theme.colors.secondary};
  color: white;
  cursor: pointer;
  padding: 5px;
  outline: none;
  border-radius:5px;
  margin: ${props => props.$margin};
  

`

export default Form
