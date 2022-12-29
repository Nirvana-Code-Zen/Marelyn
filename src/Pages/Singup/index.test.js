import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import theme from '../../Global-styles/theme'
import SignUp from './index'

describe('<SingUp />', () => {
  beforeAll(() => {
    render(
      <ThemeProvider theme={theme}>
        <SignUp />
      </ThemeProvider>
    )
  })

  test('Should be rendered', () => {
    screen.getByText('Tipo de cuenta')
    screen.getByText('Nombre de usuario')
    screen.getByText('Apellido Paterno')
    screen.getByText('Apellido Materno')
    screen.getByText('Correo')
    screen.getByText('Contraseña')
    screen.getByText('Confirma contraseña')
  })
})
