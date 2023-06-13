import styled from 'styled-components'

const CategoryProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .line-horizontal {
    width: 94%;
    display: flex;
    border: 0.12rem solid ${props => props.theme.colors.primary}; 
    position: relative;
    bottom: 1.7rem;
 }
`

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  max-height: calc(100vh - 12.5rem);
  position: relative;
  bottom: 3.5rem;

  & ul{
    list-style: none; 
    width: 103.5%;
  }

  & li{
    padding: .5rem;
    font-size: ${props => props.theme.fonts_sizes.texts};
    cursor: pointer;
  }

  & li:hover{
    background-color: ${props => props.theme.colors.primary};
    width: 90%;
  }
`

export const H3 = styled.h3`
  font-size: 1.25rem;
  font-family: ${props => props.theme.fonts.texts_titles};
  letter-spacing: 0.25rem;
  position: relative;
  right: 38rem;
`

export default CategoryProductStyled
