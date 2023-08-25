import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../Global-styles/theme'

import Header from './index'

describe('<Header />', () => {
  beforeEach(() => {

    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>)
    getByAltTextImg = getByAltText
  })

  test('Should be rendered', async () => {
    screen.getByText('Zapateria Marelyn')
    const image = screen.getByAltText('logo-marelyn')

    await waitFor(() => expect(image).toBeInTheDocument())


    expect(image).toBeVisible()

  })
})
