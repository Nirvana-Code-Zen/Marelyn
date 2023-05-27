import styled from 'styled-components'

const CategoryProductStyled = styled.div`
`

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 200px)

  hr{
      border: 1px solid ${props => props.theme.colors.primary};
  }

`

export const ContainerItemCategorias = styled.div`
 
`

export default CategoryProductStyled
