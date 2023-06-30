import ListStyled, { TableProduct } from './ListStyled'

import { useState, useEffect, useContext } from 'react'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { FirebaseContext } from '../../../firebase/init'

const ListProduct = () => {
  const [products, setProducts] = useState([])
  // const [edit, setEdit] = useState([])

  const { db: firestore } = useContext(FirebaseContext)
  useEffect(() => {
    const docChangues = onSnapshot(query(collection(firestore, 'Products')), (products) => {
      const productsData = products.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))

      setProducts(productsData)
    })

    return () => docChangues()
  }, [])

  return (
    <ListStyled>
      <TableProduct>
        <thead>
          <tr>
            <th >Categoría</th>
            <th>Nombre del producto</th>
            <th>Color</th>
            <th>Tamaño</th>
            <th>Modelo</th>
            <th>Código</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {products
            .sort((a, b) => a.productName.localeCompare(b.productName)) // Orden alfabético por el campo 'productName'
            .map((product) => (
              <tr key={product.id}>
                <td>{product.category}</td>
                <td>{product.productName}</td>
                <td>{product.color}</td>
                <td>{product.size}</td>
                <td>{product.model}</td>
                <td>{product.code}</td>
                <td>{'$' + product.price + '.00'}</td>
                <td>{product.quantity}</td>
                <td className='options'>
                  <i className='bx bx-trash bx-sm trash' ></i>
                  <i className='bx bx-edit bx-sm edit' ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </TableProduct>
    </ListStyled>
  )
}

export default ListProduct
