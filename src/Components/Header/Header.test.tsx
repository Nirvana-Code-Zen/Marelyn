import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../Global-styles'

import { Header } from './index'

describe('<Header />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
    )
  })

  test('Should be rendered', async () => {
    const image = screen.getByAltText('logo-marelyn')

    await waitFor(() => expect(image).toBeInTheDocument())

    expect(image).toHaveAttribute('src', '../src/assets/logoMarely.png')
  })
})
