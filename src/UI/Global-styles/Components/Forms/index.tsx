import styled from 'styled-components'

type FormProps = {
  styledModifield?:{
    justify?: string;
    margin?: string;
    top?: string;
    wrap?: string;
    direction?: string;
    width?: string;
    padding?: string;
    gap?: string;
    height?: string;
    position?: string; 
    bottom?: string;
  }

}

type GroupFormProps = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
};

type InputProps = {
  width?: string;
  margin_left?: string;
};

type SelectProps = {
  $margin?: string;
};


export const Form = styled.form<FormProps>`
  display: flex;
  justify-content: ${(props) => props?.styledModifield?.justify || 'center'};
  margin: ${(props) => props?.styledModifield?.margin || 'auto'};
  margin-top: ${(props) => props?.styledModifield?.top || '0'};
  flex-wrap: ${(props) => props?.styledModifield?.wrap || 'wrap'};
  flex-direction: ${(props) => props?.styledModifield?.direction || 'row'};
  align-items: center;
  width: ${(props) => props?.styledModifield?.width || props.theme.width_porcentages};
  padding: ${(props) => props?.styledModifield?.padding};
  row-gap: ${(props) => props?.styledModifield?.gap || '0'};
  height: ${(props) => props.styledModifield?.height || 'auto'};

  & form:focus {
    outline: none;
  }

  & p {
    font-family: ${(props) => props.theme.fonts.texts_titles};
    letter-spacing: 0.125rem;
    font-size: ${(props) => props.theme.fonts_sizes.small_texts};
    width: 75%;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
  }

  & span {
    font-family: ${(props) => props.theme.fonts.texts_titles};
    letter-spacing: 0.125rem;
    font-size: ${(props) => props.theme.fonts_sizes.small_texts};
    text-align: center;
    box-sizing: border-box;
    color: #999999;
    position: ${(props) => props?.styledModifield?.position };
    bottom: ${(props) => props?.styledModifield?.bottom };
  }

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`
export const GroupForm = styled.div<GroupFormProps>`
  position: relative;
  margin: 1rem 0;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};

  & .bar:before {
    left: 30%;
  }

  & .bar:after {
    right: 50%;
  }

  & .bar:before,
  & .bar:after {
    content: '';
    height: 0.125rem;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${(props) => props.theme.colors.secondary};
    transition: 0.2s ease all;

    &:focus-within .label-char {
      transform: translateY(-1.25rem);
    }
  }

  & label {
    font-family: ${(props) => props.theme.fonts.texts_titles};
    letter-spacing: 0.125rem;
    color: #999;
    font-size: ${(props) => props.theme.fonts_sizes.texts};
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0.31rem;
    top: 0.62rem;
    display: flex;
  }
`

export const Input = styled.input<InputProps>`
  font-size: ${(props) => props.theme.fonts_sizes.texts};
  padding: 0.62rem 0.62rem 0.37rem 0.31rem;
  display: block;
  width: ${(props) => props.width || '100%'};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  background: transparent;
  box-sizing: border-box;
  letter-spacing: 0.125rem;
  margin-left: ${(props) => props.margin_left};

  &:focus {
    outline: none;
    border-bottom: none;
  }

  &:focus ~ label .label-char,
  &:valid ~ label .label-char {
    transform: translateY(-1.25rem);
    font-size: ${(props) => props.theme.fonts_sizes.button_text};
    transform: translateY(-20px);
    font-size: 16px;
    color: ${(props) => props.theme.colors.secondary};
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }
`

export const Select = styled.select<SelectProps>`
  display: flex;
  width: 16.25rem;
  height: 2.5rem;
  font-size: ${(props) => props.theme.fonts_sizes.texts};
  background: ${(props) => props.theme.colors.secondary};
  color: white;
  cursor: pointer;
  padding: 0.31rem;
  outline: none;
  border-radius: 0.31rem;
  margin: ${(props) => props.$margin};
`