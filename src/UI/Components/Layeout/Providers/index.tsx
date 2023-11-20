import PropTypes from 'prop-types'
import { useLocation } from 'wouter'

import { ProviderStyled, ItemProvider, ProviderSection } from './ProviderStyled'

import { Tabs } from '../../Tabs'



export const Providers = ({ children }) => {
  const [location, setLocation] = useLocation()

  const gotToPage = (page) => setLocation(page)

  return (
    <ProviderStyled>
      <ItemProvider>
        <Tabs active={location === 'list-providers'} onClick={() => gotToPage('list-providers')} label='Proveedores' inputId='list-providers' />
        <Tabs active={location === 'create-provider'} onClick={() => gotToPage('create-provider')} label='Crear Proveedor' inputId='create-provider'/>
      </ItemProvider>
      <ProviderSection >
        {children}
      </ProviderSection>
    </ProviderStyled>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
}
