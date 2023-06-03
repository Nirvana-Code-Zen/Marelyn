import PropTypes from 'prop-types'
import { useLocation } from 'wouter'

import ProductStyles, { ContainerItems, ProductSection } from './ProductStyles'
import Button from '../../Button'

const ProductsLayout = ({ children }) => {
  const setLocation = useLocation()[1]

  const goToPage = page => setLocation(page)

  return (
    <ProductStyles>
      <ContainerItems>
        <Button size='large' height='63.3px' onClick={ _ => goToPage('categories')}>
          Categorias
        </Button>
        <Button size='large' height='63.3px' onClick={ _ => goToPage('list')}>
          Lista de productos
        </Button>
        <Button size='large' height='63.3px' onClick={ _ => goToPage('create')}>
          Crear Producto
        </Button>
      </ContainerItems>
      <ProductSection className='boxshadow'>
        { children }
      </ProductSection>
    </ProductStyles>
  )
}

ProductsLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProductsLayout
