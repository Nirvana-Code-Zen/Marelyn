import CreateProductStyled, { ContainerItem, ContainerProducts, Item } from './CreateStyled'
import { Input } from '../../../Global-styles/Components/Forms'

const CreateProducts = () => {
  return (
<>
<CreateProductStyled>
  <ContainerItem>
    <Item>
      <Input type='checkbox'></Input><span>Producto</span>
    </Item>
    <Item>
      <span>Categoria </span>
    </Item>
    <Item>
      <span>Stock</span>
    </Item>
    <Item>
      <span>Precio</span>
    </Item>
</ContainerItem>
<ContainerProducts>
  <p>hols</p>
</ContainerProducts>
</CreateProductStyled>

</>
  )
}

export default CreateProducts
