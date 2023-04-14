import ProductStyles, { ContainerItems, ContainerSearch } from './ProductStyles'
// import CategoryProducts from '../CategoryProducts'
// import CreateProducts from '../CreateProducts'
// import ListProducts from '../ListProduct'
import Button from '../../Components/Button'

const Products = () => {
  return (
    <ProductStyles>
      <ContainerItems>
        <Button size='large' height='63.3px'onClick=''>
          <span>Categorias</span>
        </Button>
        <Button size='large' height='63.3px' onClick=''>
          <span>Lista de productos</span>
        </Button>
        <ContainerSearch>

        </ContainerSearch>
        <Button size='large' height='63.3px' onClick=''>
          <span>Crear productos </span>
        </Button>
      </ContainerItems>
    </ProductStyles>

  )
}

export default Products
