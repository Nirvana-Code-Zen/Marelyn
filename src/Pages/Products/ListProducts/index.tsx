import { ListProductStyled, TableProduct } from './ListStyled'

export const ListProduct = () => {
  return (
    <ListProductStyled>
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
      </TableProduct>
    </ListProductStyled>
  )
}
