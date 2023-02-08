import MenuStyled from './MenuStyled'

const Menu = () => {
  return (
   <MenuStyled>
    <div className='conteiner-menu'>
      <p>Inicio</p>
      <img src="/src/assets/home.png" alt="home"/>
    </div>
    <div className='conteiner-menu'>
      <p>Productos</p>
      <img src="/src/assets/product.png" alt="product"/>
    </div>
    <div className='conteiner-menu'>
      <p>Compras</p>
      <img src="/src/assets/product.png" alt="product"/>
    </div>

      <p>Catálogo de fotos </p>
      <p>Ventas</p>
      <p>Reportes</p>
    </MenuStyled>
  )
}

export default Menu
