
import { ThemeProvider } from 'styled-components'
import { fireEvent, render, screen } from '@testing-library/react'

import theme from '../../Global-styles/theme'

import Button from './index'

describe('<Button/>', () => {
  const onClickMock = jest.fn().mockReturnValueOnce('Soy un boton')

  beforeEach(() => {
    render(
        <ThemeProvider theme={theme}>
          <Button onClick={ onClickMock }>
            Entrar
        </Button>
      </ThemeProvider>
    )
  })

  test('Should be rendered', () => {
    screen.getByText('Entrar')
  })

  test('Should be submit works', () => {
    const button = screen.getByText('Entrar')

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
    expect(onClickMock).toHaveReturnedWith('Soy un boton')
  })
})
