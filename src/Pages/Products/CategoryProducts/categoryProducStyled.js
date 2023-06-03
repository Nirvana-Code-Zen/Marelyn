import styled from 'styled-components'

const CategoryProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .line-horizontal {
    width: 100%;
    display: flex;
    align-items: flex-start;
    border: 2px solid ${props => props.theme.colors.primary}; 
 }
`

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 200px);

  & ul{
    list-style: none;
  }

  & li{
    padding: .5rem;
    font-size: ${props => props.theme.fonts_sizes.texts};
    cursor: pointer;
  }


`
export const H3 = styled.h3`
  font-size: 20px;
  font-family: ${props => props.theme.fonts.texts_titles};
  letter-spacing: 4px;
  position: relative;
  right: 37rem;
  bottom: -1.8rem;
`

export default CategoryProductStyled
