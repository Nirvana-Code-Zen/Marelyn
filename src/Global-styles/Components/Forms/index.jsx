import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  box-shadow: border-box;
  justify-content: ${props => props.styledModified.justify || 'center'};
  margin: ${props => props.styledModified.margin || 'auto'};
  margin-top: ${props => props.styledModified.top || '0'} ;
  flex-wrap: ${props => props.styledModified.wrap || 'wrap'};
  flex-direction: ${props => props.styledModified.direction || 'row'};
  align-items: center;
  width: ${props => props.styledModified.width || props.theme.width_porcentages};
  padding: ${props => props.styledModified.padding};

  & p {
    font-family: ${props => props.theme.fonts.titles};
    letter-spacing: 2px;
    font-size:15px;
    width: 75%;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
  }
  & span {
    font-family: ${props => props.theme.fonts.titles};
    letter-spacing: 2px;
    font-size:15px;
    text-align: center;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`

export const GroupForm = styled.div`
  position: relative;
  
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
    transition: 0.1s linear all;

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
    transition: 0.1s linear-out;
  }
`

export const Input = styled.input`
  font-size: 17px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 260px;
  border: none;
  margin: 1.2rem 1rem 0 0 ;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  background: transparent;


  
  &:focus {
    outline: none;
    border-bottom: none;
  }

  &:focus ~ label .label-char{
    transform: translateY(-20px);
    font-size: 16px;
    padding: 12px 0;
    color: ${props => props.theme.colors.secondary};
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after { 
    width: 50%;
  }

`

export const Select = styled.select`
  display: flex;
  width: 220px;
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
