import CategoryProductsStyled, { ContainerCategory } from './categoryProducStyled.js'
import Button from '../../../Components/Button'

import { useState } from 'react'

const CategoryProducts = () => {
  const [showCategory, setShowCategory] = useState(false)

  const viewCategory = () => {
    setShowCategory(true)
  }
  console.log(viewCategory)

  return (
    <CategoryProductsStyled>

      <Button onClick={viewCategory} size='large' height='65px'>
        <span>Mostrar</span>
      </Button>

      {showCategory && <ContainerCategory><p>Categorias</p></ContainerCategory>}
    </CategoryProductsStyled>
  )
}

export default CategoryProducts
