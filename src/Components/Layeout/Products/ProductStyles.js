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
  background-color: ${props =>
    props.active ? props.theme.colors.secondary : props.theme.colors.primary};
  padding: 1rem;
  font-size: ${props => props.theme.fonts_sizes.button_text} ;
  letter-spacing: 2px;
  color: white;
  cursor: pointer;

  & input{
    visibility: hidden;
    }
    
    & label {
      cursor: pointer;
    }
`
export const H4 = styled.h4`
  color: red;
 
`
export default ProductStyled
