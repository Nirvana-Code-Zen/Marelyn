import { useState } from 'react'
import { Link } from 'wouter'
import PropTypes from 'prop-types'

import MenuStyled, { InputMenu, ContainerMenu, HeaderMenu } from './MenuStyled'
import Header from '../Header/index'

const Menu = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <MenuStyled expandSideNav={isMenuOpen}>
      <HeaderMenu>
        <Header>
          <i className={`bx bx-menu bx-md ${isMenuOpen ? 'open' : ''}`} onClick={handleClick}></i>
        </Header>
      </HeaderMenu>
      <ContainerMenu className={isMenuOpen ? 'open' : ''}>
        <Link href='/dashboard'>
          <InputMenu >
            <i className='bx bx-home-alt bx-sm' ></i>
            <span>Inicio</span>
          </InputMenu>
        </Link>
        <Link href='/products/list'>
          <InputMenu >
            <i className='bx bxs-shopping-bags bx-sm' ></i>
            <span>Productos</span>
          </InputMenu>
        </Link>
        <Link href='/resources/clients'>
          <InputMenu >
            <i className='bx bx-user bx-sm' ></i>
            <span>Clientes</span>
          </InputMenu>
        </Link>
        <Link href='/resources/providers'>
          <InputMenu >
            <i className='bx bx-user bx-sm' ></i>
            <span>Proveedores</span>
          </InputMenu>
        </Link>
        <InputMenu>
          <i className='bx bxl-shopify bx-sm' ></i>
          <span>Ventas</span>
        </InputMenu>
        <Link href='/reports/sales'>
          <InputMenu >
            <i className='bx bxs-report bx-sm' ></i>
            <span>Reportes</span>
          </InputMenu>
        </Link>
      </ContainerMenu>
      {children}
    </MenuStyled>
  )
}
Menu.propTypes = {
  children: PropTypes.node.isRequired
}

export default Menu
