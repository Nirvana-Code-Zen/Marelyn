import ListStyled, { TableProduct } from './ListStyled'

// import { useState, useEffect, useContext } from 'react'
// import { collection, query, onSnapshot } from 'firebase/firestore'
// import { FirebaseContext } from '../../../firebase/init'

const ListProduct = () => {
  // const [products, setProducts] = useState([])
  // const PAGE_SIZE = 15
  // const [lastDocument, setLastDocument] = useState(null)

  // const { db: firestore } = useContext(FirebaseContext)

  // const deletedProductsIds = JSON.parse(localStorage.getItem('deletedProducts')) || []

  // const fetchMoreData = () => {
  //   if (lastDocument) {
  //     const nextPageQuery = query(
  //       collection(firestore, 'Products')
  //         .orderBy('productName')
  //         .startAfter(lastDocument)
  //         .limit(PAGE_SIZE)
  //     )

  //     // onSnapshot(nextPageQuery, (snapshot) => {
  //     //   const newProducts = snapshot.docs.map((doc) => ({
  //     //     id: doc.id,
  //     //     ...doc.data()
  //     //   }))
  //     //   setProducts((prevProducts) => [...prevProducts, ...newProducts])

  //     useEffect(() => {
  //       const initialQuery = query(collection(firestore, 'Products').orderBy('productName').limit(PAGE_SIZE))
  //       const unsubscribe = onSnapshot(initialQuery, (snapshot) => {
  //         const initialProducts = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }))
  //       setProducts(initialProducts)
  //       setLastDocument(snapshot.docs[snapshot.docs.length - 1])
  //   })
  //   return () => unsubscribe();
  // }, [firestore])

  // useEffect(() => {
  //   const docChangues = onSnapshot(query(collection(firestore, 'Products').limit(15)),
  //     (snapshot) => {
  //       const productsData = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }))
  //       const temProduct = {}

  //       productsData.forEach((product) => {
  //         if (!deletedProductsIds.includes(product.id)) {
  //           if (!temProduct[product.productName]) {
  //             temProduct[product.productName] = {
  //               category: product.category,
  //               productName: product.productName,
  //               color: product.color,
  //               size: product.size,
  //               model: product.model,
  //               code: product.code,
  //               price: product.price,
  //               quantity: 0
  //             }
  //           }
  //           temProduct[product.productName].quantity += parseInt(product.quantity, 10)
  //         }
  //       })

  //       Object.values(temProduct).forEach((product) => {
  //         product.quantity = Math.max(1, product.quantity)
  //       })
  //       setProducts(Object.values(temProduct))
  //     })

  //   return () => docChanges()
  // }, [firestore, deletedProductsIds])

  // const deleteItem = (productID) => {
  //   const updateDeletedProduct = [...deletedProductsIds, productID]
  //   localStorage.setItem('deletedProducts', JSON.stringify(updateDeletedProduct))

  //   const updatedProducts = { ...products }
  //   delete updatedProducts[productID]

  //   setProducts(updatedProducts)
  // }

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
          {/* {Object.values(products)
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
            ))} */}
        </tbody>
      </TableProduct>
    </ListStyled>
  )
}

export default ListProduct
