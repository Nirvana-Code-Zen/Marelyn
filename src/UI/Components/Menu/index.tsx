import { useContext, useState } from 'react'
import { Link } from 'wouter'

import { AuthContext } from '~UI/Context/Auth'
import { ChildrenPropType } from '~UI/shared/types/childrenPropType'


import { MenuStyled, OptionMenu, ContainerMenu, HeaderMenu } from './MenuStyled'

import { Header } from '../Header'

export const Menu = ({ children }: ChildrenPropType) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { logOut } = useContext(AuthContext)

  const handleClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <MenuStyled expandSideNav={isMenuOpen}>
      <HeaderMenu>
        <Header position='relative' left='center'/>
      </HeaderMenu>
      <ContainerMenu className={isMenuOpen ? 'open' : ''} data-testid="container-menu">
        <i className={`bx bx-menu bx-md ${isMenuOpen ? 'open' : ''} btn-Menu`} data-testid="side-menu" onClick={handleClick} />
        <button onClick={logOut}>
          logout
        </button>
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
        <Link href='/resources/list-providers'>
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
