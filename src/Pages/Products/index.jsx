import ProductStyles, { ContainerItems, ContainerSearch, ComponentProducts } from './ProductStyles'
import Button from '../../Components/Button'
import CreateProducts from './CreateProducts'
import CategoryProducts from './CategoryProducts'

import { useState } from 'react'

const Products = () => {
  const [viewForms, setViewForms] = useState(false)

  const toogleViewForms = () => {
    setViewForms(!viewForms)
  }

  const [showCategory, setShowCategory] = useState(false)

  const viewCategory = () => {
    setShowCategory(!showCategory)
    console.log('esta bien ')
  }

  const btn = () => {
    console.log('si Hola')
  }
  return (
    <ProductStyles>
      <ContainerItems>
        {/* <Link href='category'> */}
          <Button size='large' height='63.3px' onClick={viewCategory}>
            <span>Categorias</span>
          </Button>
          <ComponentProducts>
              {showCategory && <CategoryProducts setShowCategory={setShowCategory}/>}
          </ComponentProducts>
          {/* </Link> */}

        <Button size='large' height='63.3px' onClick={btn}>
          <span>Lista de productos</span>
        </Button>
        <ContainerSearch></ContainerSearch>
        <Button size='large' height='63.3px' onClick={toogleViewForms}>
          <span>Crear productos </span>
        </Button>
      </ContainerItems>
      <ComponentProducts>
        {viewForms && <CreateProducts setViewForms={setViewForms} />}
      </ComponentProducts>
    </ProductStyles>
  )
}

export default Products
