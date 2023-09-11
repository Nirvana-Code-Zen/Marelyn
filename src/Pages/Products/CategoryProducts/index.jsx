import CategoryProductStyled, { ContainerCategory, H3 } from './categoryProducStyled'

import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../../firebase/init'
import { collection, getDocs } from 'firebase/firestore'

const CategoryProducts = () => {
  const [categories, setCategories] = useState([])

  const { db: firestore } = useContext(FirebaseContext)

  const getCategories = async () => {
    try {
      const serchResult = await getDocs(collection(firestore, 'Products'))
      const categoriesData = []
      serchResult.forEach((doc) => {
        const category = doc.data().category
        if (!categoriesData.includes(category)) {
          categoriesData.push(category)
        }
      })
      setCategories(categoriesData)
    } catch (error) {
      console.error('Error al obtener las categorías', error)
    }
  }
  useEffect(() => {
    getCategories()
  }, [])

  return (

    <CategoryProductStyled>
      <H3>Categorias</H3>
      <hr className="line-horizontal titulo" />
      <ContainerCategory >
        <ul>
          {categories.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' })).map((category, index) => (
            <li key={index}>
              {category}
            </li>
          ))}
        </ul>
      </ContainerCategory>
    </CategoryProductStyled>

  )
}

export default CategoryProducts
