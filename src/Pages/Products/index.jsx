import ProductStyles, { ContainerItems, ContainerSearch } from './ProductStyles'
import Button from '../../Components/Button'
import CreateProducts from './CreateProducts'

import { useState } from 'react'
import { Link } from 'wouter'

const Products = () => {
  const [viewForms, setViewForms] = useState(false)

  const btn = () => {
    console.log('si funciono')
    setViewForms(true)
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
        <Button size='large' height='63.3px' onClick={btn}>
          <span>Crear productos </span>
        </Button>
        {viewForms && <CreateProducts/>}
      </Link>
      </ContainerItems>
    </ProductStyles>
  )
}

export default Products
