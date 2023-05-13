import ProductStyles, { ContainerItems, ContainerSearch, ComponentProducts } from './ProductStyles'
import Button from '../../Components/Button'
import CreateProducts from './CreateProducts'
import CategoryProducts from './CategoryProducts'

import { useState } from 'react'
import { Link } from 'wouter'

const Products = () => {
  const [viewForms, setViewForms] = useState(false)

  const toogleViewForms = (event) => {
    event.preventDefault()
    setViewForms(!viewForms)
  }

  const [showCategory, setShowCategory] = useState(false)

  const viewCategory = (event) => {
    event.preventDefault()
    setShowCategory(!showCategory)
  }

  const btn = () => {
    console.log('si Hola')
  }

  return (
    <ProductStyles>
      <ContainerItems>
        <Link href='category'>
          <Button size='large' height='63.3px'onClick={viewCategory}>
            <span>Categorias</span>
            <ComponentProducts>
              {showCategory && <CategoryProducts setShowCategory={setShowCategory} />}
            </ComponentProducts>
          </Button>
        </Link>
        <Button size='large' height='63.3px' onClick={btn}>
          <span>Lista de productos</span>
        </Button>
      <ContainerSearch>
      </ContainerSearch>
        <Button size='large' height='63.3px' onClick={toogleViewForms}>
          <span>Crear productos </span>
        </Button>
        <Link href='create'>
          <ComponentProducts>
            {viewForms && <CreateProducts setViewForms={setViewForms}/>}
          </ComponentProducts>
        </Link>
      </ContainerItems>
    </ProductStyles>
  )
}

export default Products
