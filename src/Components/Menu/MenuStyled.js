import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 160px;
  height: 100vh ;
  align-items: left;
  background-color: ${props => props.theme.colors.primary};
  transition: max-width .3s ease;

`

export const ContainerMenu = styled.div`
  display: flex;
  align-items: left;
  padding: 20px 0 20px 20px;
  box-sizing: border-box;
  width: 100%;
  transition: all .3s ease;
  border-radius:5px;
  
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
  padding-top: 13px;
  padding-left: 50px;
  display: none;
  }
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 25px 0 25px;
  gap: 10px;
  margin-bottom: 40px;
`

export const H2 = styled.h2`
  display:none;
  font-size: ${props => props.theme.fonts_sizes.medium_text};
  text-align: center;
  font-family: ${props => props.theme.fonts.texts_titles};
  letter-spacing: 4px;
  margin-top: 20px;
  color: ${props => props.theme.colors.white};
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 73px;
  margin-top: 25px;
  width: 100%;
  
`
