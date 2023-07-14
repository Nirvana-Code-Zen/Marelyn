import ProviderStyled, { ItemProvider, ProviderSection } from '../Providers/ProviderStyled'
import Tabs from '../../Tabs'

import { useLocation } from 'wouter'
import PropTypes from 'prop-types'

const Providers = ({ children }) => {
  const [location, setLocation] = useLocation()

  const gotToPage = (page) => setLocation(page)

  return (
    <ProviderStyled>
      <ItemProvider>
        <Tabs active={location === 'create-provider'} onClick={() => gotToPage('create-provider')} label='Crear Proveedor' inputId='create-provider'/>
        <Tabs active={location === 'list-providers'} onClick={() => gotToPage('list-providers')} label='Proveedores' inputId='list-providers' />
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

export default Providers
