import styled from 'styled-components'

const CreateProductStyled = styled.div`
    margin: auto;
    height: 28rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 85%;
    border: 1px solid red;
  
`

export const Item = styled.div`
 border: 1px solid green;
`

export const ContainerItem = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
`

export const ContainerProducts = styled.div`
  display: flex;
  border: 1px solid red;
`
export default CreateProductStyled
