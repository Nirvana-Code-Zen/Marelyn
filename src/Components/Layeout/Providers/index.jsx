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
        <Tabs active={location === 'createProvider'} onClick={() => gotToPage('create-provider')} label='Crear Proovedor' inputId='createProvider' />
        <Tabs active={location === 'provider'} onClick={() => gotToPage('provider')} label='Proovedores' inputId='provider' />
      </ItemProvider>
      <ProviderSection className='boxshadow'>
        {children}
      </ProviderSection>
    </ProviderStyled>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
}

export default Providers
