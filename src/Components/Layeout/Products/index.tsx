import PropTypes from 'prop-types'
import { useLocation } from 'wouter'

import {Tabs} from '../../Tabs'

import { ProductStyles, ContainerItems, ProductSection } from './ProductStyles'

export const ProductsLayout = ({ children }) => {
  const [location, setLocation] = useLocation()

  const goToPage = (page) => setLocation(page)

  return (
    <ProductStyles>
      <ContainerItems>
        <Tabs active={location === 'categories'} onClick={() => goToPage('categories')} label="Categorias" inputId="categorie" />
        <Tabs active={location === 'list'} onClick={() => goToPage('list')} label="Lista de productos" inputId="list" />
        <Tabs active={location === 'create-product'} onClick={() => goToPage('create-product')} label="Crear Producto" inputId="create-product" />
      </ContainerItems>
      <ProductSection >
        {children}
      </ProductSection>
    </ProductStyles>
  )
}

ProductsLayout.propTypes = {
  children: PropTypes.node.isRequired
}

