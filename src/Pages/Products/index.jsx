import ProductStyles, { ContainerItems, ContainerSearch } from './ProductStyles'
import Button from '../../Components/Button'
import CreateProducts from './CreateProducts'

import { useState } from 'react'
import { Link } from 'wouter'

const Products = () => {
  const [viewForms, setViewForms] = useState(false)

  const toogleViewForms = () => {
    setViewForms(!viewForms)
  }
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
      <Link href='create'>
        <Button size='large' height='63.3px' onClick={toogleViewForms}>
          <span>Crear productos </span>
        </Button>
        {viewForms && <CreateProducts setViewForms={setViewForms}/>}
      </Link>
      </ContainerItems>
    </ProductStyles>
  )
}

export default Products
