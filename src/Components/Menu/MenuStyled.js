import styled from 'styled-components'

export default styled.div`
    display: grid;
    grid-template: 100px calc(100vh - 100px) / ${props => !props.expandSideNav ? '90px 1fr' : '230px 1fr'};
 
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
  padding: 10px 0 10px 30px;
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
  letter-spacing: 4px;
  padding-left: 22px;
  display: none;
  transition: opacity .3s ease;
  }
`

export const ContainerMenu = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 100px;
  padding-top: 60px;
  background-color: ${props => props.theme.colors.primary};
  transition: max-width .3s ease;
  grid-row-gap: 25px;

  &.open{
    max-width: 280px;

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
