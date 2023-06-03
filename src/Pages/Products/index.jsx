import ProductStyles, { ContainerItems, ContainerSearch, ComponentCategory } from './ProductStyles'
import Button from '../../Components/Button'
import CreateProducts from './CreateProducts'
import CategoryProducts from './CategoryProducts'

import PropTypes from 'prop-types'
import { useState } from 'react'
// import { Link } from 'wouter'
import ListProduct from './ListProducts'

const Products = ({ children }) => {
  const [viewForms, setViewForms] = useState(false)
  const [showCategory, setShowCategory] = useState(false)
  const [viewList, setListView] = useState(false)

  const toogleViewForms = (event) => {
    event.preventDefault()
    setViewForms(!viewForms)
  }

  const viewCategory = (event) => {
    event.preventDefault()
    setShowCategory(!showCategory)
  }

  // const showViewList = (event) => {
  //   event.preventDefault()
  //   setListView(!viewList)
  // }

  const btn = () => {
    console.log('hola')
  }

  return (
    <ProductStyles>
      <ContainerItems>
        {/* <Link href='category'> */}
        <Button size='large' height='63.3px' onClick={viewCategory}>
          <span>Categorias</span>
        </Button>
        <ComponentCategory top='3rem'>
          {showCategory && <CategoryProducts setShowCategory={setShowCategory}/>}
        </ComponentCategory>
        {/* </Link> */}
        <Button size='large' height='63.3px' onClick={btn}>
          <span>Lista de productos</span>
        </Button>
        {viewList && <ListProduct setListView={setListView}/>}
        <ContainerSearch>

        </ContainerSearch>
        {/* <Link to='create'> */}
        <Button size='large' height='63.3px' onClick={toogleViewForms}>
          <span>Crear Producto</span>
        </Button>
        {/* </Link> */}
      </ContainerItems>
      <ComponentCategory left='11.7rem' bottom='3rem'>
        {viewForms && <CreateProducts setViewForms={setViewForms} />}
      </ComponentCategory>
      { children }
    </ProductStyles>
  )
}

Products.propTypes = {
  children: PropTypes.node.isRequired
}
export default Products
