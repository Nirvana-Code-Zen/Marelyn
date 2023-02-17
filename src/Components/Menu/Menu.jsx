import MenuStyled, { HeaderMenu, ContainerMenu, H2, ContainerInputs } from './MenuStyled'
import Logo from '../Logo/Logo'

// import { useState } from 'react'
import { Link } from 'wouter'

const Menu = () => {
  // const handleClick = () => {
  //   console.log('Soy una prueba')
  // }

  return (
   <MenuStyled>
    <HeaderMenu>
      <Logo
      src='src/assets/logoMarely.png'
      size='extraLarge'
      margin='-15px'>
      </Logo>
        <H2>Zapateria Marelyn</H2>
        {/* <box-icon name='x' color='#ffffff' size='lg'></box-icon> */}
        <box-icon name='menu' color='#ffffff' size='50px'></box-icon>
    </HeaderMenu>
    <ContainerInputs>
      <Link href='/dashboard'>
        <ContainerMenu>
          <box-icon name='dashboard' type='solid' color='#ffffff' size='lg'></box-icon>
          <span>Inicio</span>
        </ContainerMenu>
      </Link>
      <Link href='/products'>
        <ContainerMenu>
          <box-icon name='shopping-bags' type='solid' color='#ffffff' size='lg' ></box-icon>
          <span>Productos</span>
        </ContainerMenu>
      </Link>
      <ContainerMenu>
        <box-icon name='photo-album' color='#ffffff' size='lg'></box-icon>
        <span>Galeria </span>
      </ContainerMenu>
      <Link href='/reports/sales'>
        <ContainerMenu>
          <box-icon name='cart' color='#ffffff' size='lg' ></box-icon>
          <span>Compras</span>
        </ContainerMenu>
      </Link>
      <ContainerMenu>
      <box-icon name='shopify' type='logo' color='#ffffff' size='lg' ></box-icon>
        <span>Ventas</span>
      </ContainerMenu>
      <ContainerMenu>
        <box-icon type='solid' name='report' color='#ffffff' size='lg'></box-icon>
        <span>Reportes</span>
      </ContainerMenu>
    </ContainerInputs>
    </MenuStyled>
  )
}

export default Menu
