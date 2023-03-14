import styled from 'styled-components'

export default styled.div`
    display: grid;
    grid-template: 100px calc(100vh - 100px) / ${props => !props.expandSideNav ? '90px 1fr' : '230px 1fr'};

 & i{
  color: white;
  cursor: pointer;
  transform:translate(${props => props.translateAxisX});
 }

 @media (max-width: 1023px) {
    grid-template: 100px calc(100vh - 100px) / 60px 1fr;
    background-color: azure;

    & i {
      display: flex;
      position: relative;
      right: 17px;
    }

     & h1{
      font-size: ${props => props.theme.fonts_sizes.subtitles};
    }
  }

  @media (max-width: 767px) {
    grid-template: 100px calc(100vh - 100px) / 50px 1fr;
    background-color: antiquewhite;


    & i {
      display: flex;
      position: relative;
      right: 17px;
    }

    & h1{
      font-size: ${props => props.theme.fonts_sizes.small_subtitles};
    }
  }

  @media (max-width: 360px) {
  grid-template: 100px calc(100vh - 100px) / 50px 1fr;
  background-color:pink ;
  font-size: ${props => props.theme.fonts_sizes.mobile_font};
 
    & i {
      display: flex;
      position: relative;
      right: 15px;

    }

    h1{
      font-size: ${props => props.theme.fonts_sizes.mobile_font};
    }
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
    display: flex;
    justify-content: center;
    position: relative;
    top: 2rem;
    right: 38.7rem;
    bottom: 8rem;
    height: 100%;
  }
  
`
