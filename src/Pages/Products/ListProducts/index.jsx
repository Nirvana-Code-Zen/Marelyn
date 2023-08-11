import ListStyled, { TableProduct } from './ListStyled'

import { useState, useEffect, useContext } from 'react'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { FirebaseContext } from '../../../firebase/init'

const ListProduct = () => {
  const [products, setProducts] = useState({})

  const { db: firestore } = useContext(FirebaseContext)

  const deletedProductsIds = JSON.parse(localStorage.getItem('deletedProducts')) || []

  useEffect(() => {
    const docChangues = onSnapshot(query(collection(firestore, 'Products').limit(15)),
      { includeMetadataChanges: true },
      (snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        const temProduct = {}

        productsData.forEach((product) => {
          if (!deletedProductsIds.includes(product.id)) {
            if (!temProduct[product.productName]) {
              temProduct[product.productName] = {
                category: product.category,
                productName: product.productName,
                color: product.color,
                size: product.size,
                model: product.model,
                code: product.code,
                price: product.price,
                quantity: 0
              }
            }
            temProduct[product.productName].quantity += parseInt(product.quantity, 10)
          }
        })
        console.log(productsData)
        Object.values(temProduct).forEach((product) => {
          product.quantity = Math.max(1, product.quantity)
        })

        setProducts(temProduct)
      })

    return () => docChangues()
  }, [firestore, deletedProductsIds])

  const deleteItem = (productID) => {
    const updateDeletedProduct = [...deletedProductsIds, productID]
    localStorage.setItem('deletedProducts', JSON.stringify(updateDeletedProduct))

    const filteredProducts = Object.values(products).filter(
      (product) => !updateDeletedProduct.includes(product.id)
    )
    setProducts(filteredProducts)
  }

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
          {Object.values(products) // Convertir el objeto a una matriz
            .sort((a, b) => a.productName.localeCompare(b.productName))
            .map((product) => (
              <tr key={product.productName}>
                <td>{product.category}</td>
                <td>{product.productName}</td>
                <td>{product.color}</td>
                <td>{product.size}</td>
                <td>{product.model}</td>
                <td>{product.code}</td>
                <td>{'$' + product.price + '.00'}</td>
                <td>{product.quantity || 1}</td>
                <td className='options'>
                  <i className='bx bx-trash bx-sm trash' onClick={() => deleteItem(product.id)} ></i>
                  <i className='bx bx-edit bx-sm edit' ></i>
                  <i className='bx bx-check-square bx-sm check' ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </TableProduct>
    </ListStyled>
  )
}

export default ListProduct
