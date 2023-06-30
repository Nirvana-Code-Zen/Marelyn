import PropTypes from 'prop-types'
import { useLocation } from 'wouter'

import ProductStyles, { ContainerItems, ProductSection, Tabs } from './ProductStyles'
// import Button from '../../Button'

const ProductsLayout = ({ children }) => {
  const [location, setLocation] = useLocation()

  const goToPage = page => setLocation(page)

  return (
    <ProductStyles>
      <ContainerItems>
        <Tabs active={location === 'categories'} onClick={() => goToPage('categories')}>
          <input type="radio" id='categorie'/>
          <label htmlFor='categorie' >Categorias</label>
        </Tabs>
        <Tabs active={location === 'list'} onClick={() => goToPage('list')}>
          <input type="radio" id='list'/>
          <label htmlFor='list'>Lista de productos</label>
        </Tabs>
        <Tabs active={location === 'create'} onClick={() => goToPage('create')}>
          <input type="radio" id='create'/>
          <label htmlFor='create'>Crear Producto</label>
        </Tabs>
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
