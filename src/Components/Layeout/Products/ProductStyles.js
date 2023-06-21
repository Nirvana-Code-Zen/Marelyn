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
  justify-content: start;
  align-items: start;
`

export const ProductSection = styled.div`
  height: calc(100vh - 280px);
  overflow-y: auto;
`

export const Tabs = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem;
  font-size: ${props => props.theme.fonts_sizes.button_text} ;
  letter-spacing: 2px;
  color: white;

  & input{
    visibility: hidden;
    }
`
export const H4 = styled.h4`
  color: red;
 
`
export default ProductStyled
