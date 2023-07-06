import ProviderStyled, { ItemProvider, ProviderSection } from './ProviderStyled'
import Tabs from '../../Components/Tabs'

import { useLocation } from 'wouter'
import PropTypes from 'prop-types'

const Providers = ({ children }) => {
  const [location, setLocation] = useLocation()

  const gotToPage = (page) => setLocation(page)

  return (
    <ProviderStyled>
      <ItemProvider>
        <Tabs active={location === 'createProvider'} onClick={() => gotToPage('create-provider')} label='Crear Proveedor' inputId='createProvider' />
        <Tabs active={location === 'provider'} onClick={() => gotToPage('provider')} label='Proveedores' inputId='Proveedores' />
      </ItemProvider>
      <ProviderSection className='boxshadow'>
        {children}
      </ProviderSection>
    </ProviderStyled>
  )
}

export default Providers

Providers.propTypes = {
  children: PropTypes.node.isRequired
}
