
import { collection, query, onSnapshot } from 'test/__mocks__/firebase/firestore'
import { useEffect, useState, useContext } from 'react'

import { FirebaseContext } from '../../../firebase/init'

import { ListProviderStyled, TableProvider } from './ListProvider'

export const ListProvider = () => {
  const [provider, setProvider] = useState([])

  const { db: firestore } = useContext(FirebaseContext)
  useEffect(() => {
    const docChanges = onSnapshot(query(collection(firestore, 'Provider')), (provider) => {
      const providerData = provider.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setProvider(providerData)
    })
    return () => docChanges
  }, [])

  return (
    <ListProviderStyled>
      <TableProvider>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Domicilio</th>
            <th>Dias de entrega</th>
            <th>Producto</th>
            <th>Paqueteria</th>
          </tr>
        </thead>
        <tbody>
          {provider
            .sort((a, b) => a.providerName.localeCompare(b.providerName))
            .map((provider) => (
              <tr key={provider.id}>
                <td>{provider.completeName}</td>
                <td>{provider.phone}</td>
                <td>{provider.address}</td>
                <td>{provider.date}</td>
                <td>{provider.product}</td>
                <td>{provider.parcel}</td>
              </tr>
            ))}
        </tbody>
      </TableProvider>
    </ListProviderStyled>
  )
}
