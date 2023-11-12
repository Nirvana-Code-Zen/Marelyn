import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../Global-styles'

import { Login } from './index'

describe('<Login />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Login/>
      </ThemeProvider>
    )
  })

  test('Should be rendered Gmail image', async () => {
    const image = screen.getByAltText('gmail')

    expect(image).toBeVisible()
    expect(image).toHaveAttribute('src', 'src/assets/gmail.png')
  })

  test('Shoul be rendered Facebook', async () => {
    const image = screen.getByAltText('facebook')

    expect(image).toBeVisible()
    expect(image).toHaveAttribute('src', 'src/assets/facebook.png')
  })
})
