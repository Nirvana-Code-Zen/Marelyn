import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import ProductStyles, { ContainerItems, ProductSection } from './ProductStyles'
import Tabs from '../../Tabs'

const ProductsLayout = ({ children }) => {
  const [location, setLocation] = useLocation()

  const goToPage = (page) => setLocation(page)

  return (
    <ProductStyles>
      <ContainerItems>
        <Tabs active={location === 'categories'} onClick={() => goToPage('categories')} label="Categorias" inputId="categorie" />
        <Tabs active={location === 'list'} onClick={() => goToPage('list')} label="Lista de productos" inputId="list" />
        <Tabs active={location === 'create'} onClick={() => goToPage('create')} label="Crear Producto" inputId="create" />
      </ContainerItems>
      <ProductSection className="boxshadow">
        {children}
      </ProductSection>
    </ProductStyles>
  )
}

ProductsLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProductsLayout
