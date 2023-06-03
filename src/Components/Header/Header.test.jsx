import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../Global-styles/theme'

import Header from './index'

describe('<Header />', () => {
  let getByAltTextImg = null
  beforeEach(() => {
    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>)
    getByAltTextImg = getByAltText
  })

  test('Should be rendered', async () => {
    screen.getByLabelText('Zapateria Marelyn')
    const image = getByAltTextImg('logo-marelyn')

    await waitFor(() => expect(image).toBeInTheDocument())

    expect(image).toBeVisible()
    expect(image).toHaveAttribute('src', '../src/assets/logoMarely.png')
  })
})
