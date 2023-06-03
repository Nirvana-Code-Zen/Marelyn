
import { ThemeProvider } from 'styled-components'
import { fireEvent, render, screen } from '@testing-library/react'

import theme from '../../Global-styles/theme'

import Button from './index'

describe('<Button/>', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={ () => { 'Soy un botton' }}>
            Entrar
        </Button>
      </ThemeProvider>
    )
    jest.spyOn(console, 'log')
  })

  test('Should be rendered', () => {
    screen.getByTestId('button')
  })
  test('Should be submit works', () => {
    console.log = jest.fn()
    const button = screen.getByTestId('button')
    fireEvent.click(button)

    expect(console.log).toHaveBeenCalledWith('Soy un boton')
  })
})
