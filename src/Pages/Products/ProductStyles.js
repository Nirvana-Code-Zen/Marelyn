import styled from 'styled-components'

const ProductStyled = styled.div`
  display:flex;
  padding: 35px  30px;
  border: 1px solid var(--secondary);
  font-family: ${props => props.theme.fonts.texts_titles};
`
export const ContainerItems = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;
`

export const ContainerSearch = styled.input`
  border: 1px solid var(${props => props.theme.colors.secondary});
  width: 300px;
  height: 50px;
  display: flex;
  letter-spacing: 2.5px;
  align-items: center;
  padding-left:1rem;
  border-radius: 8px;
  font-size: ${props => props.theme.fonts_sizes.button_text};
`

export const ComponentProducts = styled.div`
  position: absolute;
  width: 82.3%;
  height: 65%;
  top: 15rem;
  left: 11.7rem;
`

export const ComponentCreate = styled.div`
  display: flex;
  border: 1px solid red;
`

export default ProductStyled
