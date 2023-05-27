import CategoryProductsStyled, { ContainerCategory, ContainerItemCategorias } from './categoryProducStyled.js'
import { H4 } from '../../../Global-styles/Components/Titles'

// import database from '../../../firebase'

const CategoryProducts = () => {
  return (

    <CategoryProductsStyled>
      <H4>Categorias</H4>
      <ContainerCategory className='boxshadow'>
      <ContainerItemCategorias>
        <ul>
        </ul>
      </ContainerItemCategorias>
       <hr />
      </ContainerCategory>
    </CategoryProductsStyled>
  )
}

export default CategoryProducts
