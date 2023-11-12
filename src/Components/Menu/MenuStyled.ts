import styled from 'styled-components'

export const MenuStyled = styled.div`
    display: grid;
    grid-template: 6.25rem calc(100vh - 6.25rem) / ${props => !props.expandSideNav ? '5.96rem 1fr' : '14.37rem 1fr'};
 
 & i{
  color: white;
  cursor: pointer;

  &.btn-Menu{
    position: relative;
    left: 1.8rem;
    bottom: 8rem;
  }
 }
`

export const OptionMenu = styled.div`
  width: 100%;
  padding: 0.65rem 0 0.65rem 1.87rem;
  border-radius:5px;
  display: flex;
  justify-content: left;
  align-items: center;
  box-sizing: border-box;
  transition: all .3s ease;

  &:hover{
    background: ${props => props.theme.colors.secondary};
    opacity: 90%;
    cursor: pointer;  
  }

  & span{
  font-size: ${props => props.theme.fonts_sizes.medium_text};
  font-family: ${props => props.theme.fonts.texts_titles};
  color: ${props => props.theme.colors.white};
  letter-spacing: 0.25rem;
  padding-left: 1.37rem;
  display: none;
  transition: opacity .3s ease;
  }
`

export const ContainerMenu = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;    
  max-width: 6.25rem;
  padding-top: 3.75rem;
  background-color: ${props => props.theme.colors.primary};
  transition: max-width .3s ease;
  grid-row-gap: 1.56rem;

  &.open{
    max-width: 17.5rem;

    & span{
      display: inline;
    }
  }
`

export const HeaderMenu = styled.div`
  display: flex;
  width: 100%;
  grid-column-end: span 2;
 
`
