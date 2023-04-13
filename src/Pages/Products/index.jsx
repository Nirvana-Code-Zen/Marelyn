import ProductStyles from './ProductStyles'
import CategoryProducts from '../CategoryProducts'
import CreateProducts from '../CreateProducts'
import ListProducts from '../ListProduct'

const Products = () => {
  return (
    <ProductStyles>
      <CategoryProducts/>
      <CreateProducts/>
      <ListProducts/>
    </ProductStyles>

  )
}

export default Products
