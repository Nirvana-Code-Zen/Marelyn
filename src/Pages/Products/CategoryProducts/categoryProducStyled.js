import styled from 'styled-components'

const CategoryProductStyled = styled.div`
  border: 1px solid red;
  display: flex;
  width: 50%;
  height: 200px;

`

export const ContainerCategory = styled.div`
  display: flex;
  width: 40%;
  height: 20%;
  background-color:blue;

  & div{
    background-color: gold;
  }
`

export default CategoryProductStyled
