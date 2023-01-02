import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import SignUpOptions from '.'

import theme from '../../Global-styles/theme'

describe('<SignUpOptions />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <SignUpOptions />
      </ThemeProvider>
    )
  })
  test('Should render Google button ', () => {
    screen.getByText('Registrate con Facebook')
  })

  test('Should render Facebook button ', () => {
    screen.getByText('Registrate con Google')
  })

  test('Should render Email button ', () => {
    screen.getByText('Registrate con Email')
  })
})
