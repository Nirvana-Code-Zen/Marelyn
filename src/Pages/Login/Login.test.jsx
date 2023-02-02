import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import theme from '../../Global-styles/theme'

import Login from './index'
import { ThemeProvider } from 'styled-components'

describe('<Login />', () => {
  let getByAltTextImg = null
  beforeEach(() => {
    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <Login/>
      </ThemeProvider>)
    getByAltTextImg = getByAltText
  })

  test('Should be submit works', () => {
    const button = screen.getByLabelText('Entrar')

    fireEvent.click(button)
  })

  test('Should be rendered Gmail image', async () => {
    screen.getByAltText('Gmail')
    const image = getByAltTextImg('gmail')

    await waitFor(() => expect(image).toBeInTheDocument())

    expect(image).toBeVisible()
    expect(image).toHaveAttribute('src', '../src/assets/gmail.png')
  })

  test('Shoul be rendered Facebook', async () => {
    screen.getByAltText('Facebook')
    const image = getByAltTextImg('facebook')

    await waitFor(() => expect(image).toBeInTheDocument())

    expect(image).toBeVisible()
    expect(image).toHaveAttribute('src', '../src/assets/facebook.png')
  })
})
