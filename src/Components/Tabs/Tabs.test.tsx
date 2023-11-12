import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../Global-styles'

import { Tabs } from './index'

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
