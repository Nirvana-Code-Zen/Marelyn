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
    const label = screen.getByLabelText('Categorias')

    expect(label).toBeInTheDocument()
  })
})
