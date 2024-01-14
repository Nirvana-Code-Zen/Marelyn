import styled from 'styled-components'

type ButtomProps = {
  size?: string,
  height?: string,
  background?: string,
  width?: string
}


const buttonSize = {
  small: '5rem',
  medium: '9.3rem',
  intermediate: '11.5rem',
  large: '13.75rem',
  extraLarge: '15.65rem',
  fit: '100%'
}

export const ButtonStyled = styled.button<ButtomProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: .62rem 1.75rem;
  width: ${props => buttonSize[props.size]};
  height: ${props => props.height} ;
  border-radius: 0.93rem;
  border: 1px solid transparent;
  color: #FFFFFF;
  background-color: ${props => props.background || props.theme.colors.secondary};
  font-size: ${props => props.theme.fonts_sizes.button_text};
  font-family: ${props => props.theme.fonts.texts_titles};
  letter-spacing: 0.18rem;
  transition: all 0.15s linear;
  cursor: pointer;
  
  &:hover {
    background-color: transparent;
    border-color: ${props => props.color || props.theme.colors.secondary};
    color: ${props => props.color || props.theme.colors.secondary};
    transform: translateY(-0.31rem) scale(1.05);
  }

  &:active {
    background-color: transparent;
    border-color: ${props => props.color || props.theme.colors.secondary};
    color: ${props => props.color || props.theme.colors.secondary};
    transform: translateY(0.31rem) scale(0.95);
  }
  &:disabled {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    border-color:  ${props => props.theme.colors.secondary};
  }
  &:hover .arrow {
    background-color: ${props => props.color || props.theme.colors.secondary}
  }

  & .arrow {
    margin-left: .4rem;
    width: .62rem;
    height: 0.12rem;
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
    top: -0.18rem;
    right: 0.18rem;
    transition: 0.2s;
    padding: 0.18rem;
    transform: rotate(-45deg);
  }

  &:hover .arrow::before {
    right: 0;
    border: 0 solid ${props => props.color || props.theme.colors.secondary};
    border-width: 0 0.12rem 0.12rem 0;
  }
`

