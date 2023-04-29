import styled from 'styled-components'

const CreateProductStyled = styled.div`
    margin: auto;
    height: 28rem;
    display: flex;
    width: 85%;
    flex-wrap: wrap;
    border: 1px solid blue;
`
export const ContainerProducts = styled.div`
  display: flex;
  border: 1px solid red;
`

export const ContainerIten = styled.div`
  display: flex;
`

export const BtnCreate = styled.div`
  flex-basis: 100%;

  & div {
    margin: auto;
    width: 150px;
  }
`
export default CreateProductStyled
