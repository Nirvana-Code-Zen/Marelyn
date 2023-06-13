import { useState } from 'react'
import { Link } from 'wouter'
import PropTypes from 'prop-types'

import MenuStyled, { OptionMenu, ContainerMenu, HeaderMenu } from './MenuStyled'
import Header from '../Header'

const Menu = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <MenuStyled expandSideNav={isMenuOpen}>
      <HeaderMenu>
        <Header position='relative' left='center'/>
      </HeaderMenu>
      <ContainerMenu className={isMenuOpen ? 'open' : ''}>
        <i className={`bx bx-menu bx-md ${isMenuOpen ? 'open' : ''} btn-Menu`} onClick={handleClick}></i>
        <Link href='/dashboard'>
          <OptionMenu >
            <i className='bx bx-home-alt bx-sm' ></i>
            <span>Inicio</span>
          </OptionMenu>
        </Link>
        <Link href='/products/list'>
          <OptionMenu >
            <i className='bx bxs-shopping-bags bx-sm' ></i>
            <span>Productos</span>
          </OptionMenu>
        </Link>
        <Link href='/resources/providers'>
          <OptionMenu >
            <i className='bx bx-user bx-sm' ></i>
            <span>Proveedores</span>
          </OptionMenu>
        </Link>
        <OptionMenu>
          <i className='bx bxl-shopify bx-sm' ></i>
          <span>Ventas</span>
        </OptionMenu>
        <Link href='/reports/sales'>
          <OptionMenu >
            <i className='bx bxs-report bx-sm' ></i>
            <span>Reportes</span>
          </OptionMenu>
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
