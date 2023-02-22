import styled from 'styled-components'

export default styled.div`
    display: grid;
    grid-template: 100px calc(100vh - 100px) / ${props => !props.expandSideNav ? '90px 1fr' : '230px 1fr'};

 & i{
  color: white;
  cursor: pointer;
 }
`

export const InputMenu = styled.div`
  width: 100%;
  padding: 20px 0 20px 30px;
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
  padding-top: 10px;
  padding-left: 35px;
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
  padding-top: 70px;
  background-color: ${props => props.theme.colors.primary};
  transition: max-width .3s ease;

  &.open{
    max-width: 280px;

    & span{
      display: inline;
      border: 1px solir blue;
    }
  }

`

export const HeaderMenu = styled.div`
  display: flex;
  width: 100%;
  grid-column-end: span 2;

  & i {
    position: absolute;
    right: 4.5rem;
    top: 28px;
    height: 100%;
  }
  

`
