import styled from 'styled-components'

export const ProductStyles = styled.div`
  margin: 35px  30px;
  border: 1px solid var(--secondary);
  font-family: ${props => props.theme.fonts.texts_titles};
`
export const ContainerItems = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: start;
  align-items: start;
`

export const ProductSection = styled.div`
  height: calc(100vh - 280px);
  overflow-y: auto;
  width: ${props => props.width};
`

export const H4 = styled.h4`
  color: red;
`