import ProductStyles, { ContainerItems, ContainerSearch } from './ProductStyles'
// import CategoryProducts from '../CategoryProducts'
// import CreateProducts from '../CreateProducts'
// import ListProducts from '../ListProduct'
import Button from '../../Components/Button'

const Products = () => {
  const btn = () => {
    console.log('si funciono')
  }
  return (
    <ProductStyles>
      <ContainerItems>
        <Button size='large' height='63.3px'onClick={btn}>
          <span>Categorias</span>
        </Button>
        <Button size='large' height='63.3px' onClick={btn}>
          <span>Lista de productos</span>
        </Button>
        <ContainerSearch>

        </ContainerSearch>
        <Button size='large' height='63.3px' onClick={btn}>
          <span>Crear productos </span>
        </Button>
      </ContainerItems>
    </ProductStyles>

  )
}

export default Products
