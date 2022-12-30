import { ThemeProvider } from 'styled-components'
import { fireEvent, render, screen } from '@testing-library/react'
import theme from '../../Global-styles/theme'

import Login from './index'

describe('<Login/>', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Login/>
      </ThemeProvider>
    )
    jest.spyOn(console, 'log')
  })

  test('Should be rendered', () => {
    screen.getByText('Login')
  })

  test('Should be submit works', () => {
    console.log = jest.fn()
    const button = screen.getByText('Entrar')
    fireEvent.click(button)

    expect(console.log).toHaveBeenCalledWith('Soy un boton')
  })

  test('Should be create user', () => {
    console.log = jest.fn()
    const button = screen.getByText('Crear usuario')
    fireEvent.click(button)

    expect(console.log).toHaveBeenCalledWith('Necesito terminar la funcion de crear')
  })
})
