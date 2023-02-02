import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import theme from '../../Global-styles/theme'

import Home from './index'

describe('<App />', () => {
  test('Should be rendered child components', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )

    screen.getByText(/Zapateria/)
  })
})
