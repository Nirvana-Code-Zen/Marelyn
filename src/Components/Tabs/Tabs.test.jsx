import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'

import theme from '../../Global-styles/theme'

import Tabs from './index'

describe('<Tabs />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Tabs active label="Categorias" inputId="categorie" onClick={() => {}} />
      </ThemeProvider>
    )
  })

  test('Should be rendered', () => {
    screen.getByText('Categorias')
  })

  test('Should be has id Attribute', () => {
    const tab = screen.getByText('Categorias')

    expect(tab).toHaveBeenCalled()
    expect(tab).toHaveAttribute('id')
  })
})
