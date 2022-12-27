import { fireEvent, render, screen } from '@testing-library/react'

import Login from './index'

describe('<Login/>', () => {
  beforeEach(() => {
    render(<Login/>)
    jest.spyOn(console, 'log')
  })

  afterEach(() => {
    console.log.mockRestore()
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

  test('Should be create usuari', () => {
    console.log = jest.fn()
    const button = screen.getByText('Crear usuario')
    fireEvent.click(button)

    expect(console.log).toHaveBeenCalledWith('Necesito terminar la funcion de crear')
  })
})
