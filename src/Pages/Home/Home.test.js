import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../Global-styles/theme'

import Home from './index'

describe('<App />', () => {
  test('Should be rendered child components', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )

    getByText('Zapateria Marelyn')
  })
})
