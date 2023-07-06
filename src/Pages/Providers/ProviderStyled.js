import styled from 'styled-components'

export default styled.div`
  margin: 15px 20px ;
  border: 1px solid var(--secondary);
  font-family: ${props => props.theme.fonts.texts_titles};
`

export const ProviderSection = styled.div`
  height: calc(100vh - 300px);
  overflow-y: auto;
`

export const ItemProvider = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: start;
  align-items: start;
`
