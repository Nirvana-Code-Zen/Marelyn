import MenuStyled, { HeaderMenu, ContainerMenu, H2 } from './MenuStyled'
import Icon from '../Menu/Icon/Icon'

const Menu = () => {
  // const exit = () => {
  //   console.log('Soy un exit para salir')
  // }

  return (
   <MenuStyled>
    <HeaderMenu>
        <Icon src="src/assets/logoMarely.png" size='extraLarge'margin='-19px' />
        <H2>Zapateria Marelyn</H2>
        <Icon src='src/assets/exit.png' size='medium' ></Icon>
    </HeaderMenu>
    {/* <ContainerSearch>
      <Icon src='src/assets/search.png' size='small' position='absolute' margin='25px 0 0 8px'/>
      <input type="text" placeholder='Buscar' required />
    </ContainerSearch> */}
    <ContainerMenu>
      <Icon src='src/assets/home.png' size='small' ></Icon>
      <span>Inicio</span>
    </ContainerMenu>
    <ContainerMenu>
      <Icon src='src/assets/products.png' size='small'></Icon>
      <span>Productos</span>
    </ContainerMenu>
    <ContainerMenu>
      <Icon src='src/assets/shopping.png' size='small'></Icon>
      <span>Compras</span>
    </ContainerMenu>
    <ContainerMenu>
      <Icon src='src/assets/gallery.png' size='small'></Icon>
      <span>Galeria </span>
    </ContainerMenu>
    <ContainerMenu>
      <Icon src='src/assets/sales.png' size='small'></Icon>
      <span>Ventas</span>
    </ContainerMenu>
    <ContainerMenu>
      <Icon src='src/assets/report.png' size='small'></Icon>
      <span>Reportes</span>
    </ContainerMenu>
    </MenuStyled>
  )
}

export default Menu
