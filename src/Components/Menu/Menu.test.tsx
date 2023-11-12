import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../Global-styles'

import { Menu } from './index'

describe('<Menu />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Menu>
          <></>
        </Menu>
      </ThemeProvider>
    )
  })

  test('Click event menu', async () => {
    const containerMenu = screen.getByTestId('container-menu')
    const btnMenu = screen.getByTestId('side-menu')

    fireEvent.click(btnMenu)

    expect(containerMenu).toHaveClass('open')
    expect(btnMenu).toHaveClass('bx bx-menu bx-md open btn-Menu', { exact: true })
  })
})
