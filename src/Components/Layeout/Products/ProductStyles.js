import styled from 'styled-components'

const ProductStyled = styled.div`
  margin: 35px  30px;
  border: 1px solid var(--secondary);
  font-family: ${props => props.theme.fonts.texts_titles};
`
export const ContainerItems = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;
`

export const ProductSection = styled.div`
  height: calc(100vh - 280px);
  overflow-y: auto;
`

export default ProductStyled
