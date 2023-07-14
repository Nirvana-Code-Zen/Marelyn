import styled from 'styled-components'

const ProviderStyled = styled.div`
  margin: 30px 35px ;
  border: 1px solid var(--secondary);
  font-family: ${props => props.theme.fonts.texts_titles};
`

export const ProviderSection = styled.div`
  height: calc(100vh - 300px);
  overflow-y: auto;
`

export const ItemProvider = styled.div`
  width: 60%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: start;
  align-items: start;
`
export default ProviderStyled
