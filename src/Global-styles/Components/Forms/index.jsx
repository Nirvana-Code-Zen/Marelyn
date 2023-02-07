import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: ${props => props?.styledModified?.justify || 'center'};
  margin: ${props => props?.styledModified?.margin || 'auto'};
  margin-top: ${props => props?.styledModified?.top || '0'} ;
  flex-wrap: ${props => props?.styledModified?.wrap || 'wrap'};
  flex-direction: ${props => props?.styledModified?.direction || 'row'};
  align-items: center;
  width: ${props => props?.styledModified?.width || props.theme.width_porcentages};
  padding: ${props => props?.styledModified?.padding};
  row-gap: ${props => props?.styledModified?.gap || '0'};


  & p {
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 2px;
    font-size: ${props => props.theme.fonts_sizes.small_texts};
    width: 75%;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
  }
  & span {
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 2px;
    font-size: ${props => props.theme.fonts_sizes.small_texts};
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
  margin: 1rem 0 ;
  
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

   &:focus-within .label-char {
    transform: translateY(-20px); /* o cualquier estilo que desees */
}
  }

  & label {
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 2px;
    color: #999;
    font-size: ${props => props.theme.fonts_sizes.texts};
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    display: flex;
  }
`

export const Input = styled.input`
  font-size: ${props => props.theme.fonts_sizes.texts};
  padding: 10px 10px 10px 5px;
  display: block;
  width: 260px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  background: transparent;
  box-sizing: border-box;


  
  &:focus {
    outline: none;
    border-bottom: none;
  }

  &:focus ~ label .label-char,
  &:valid ~ label .label-char{
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
  width: 260px;
  height: 40px;
  font-size: ${props => props.theme.fonts_sizes.texts};
  background: ${props => props.theme.colors.secondary};
  color: white;
  cursor: pointer;
  padding: 5px;
  outline: none;
  border-radius:5px;
  margin: ${props => props.$margin};
  

`

export default Form
