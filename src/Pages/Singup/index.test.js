import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import theme from '../../Global-styles/theme'
import SignUp from './index'

describe('<SingUp />', () => {
  const inputLabel = {
    name: 'Nombre de usuario'.split(''),
    surName: 'Apellido paterno'.split(''),
    lastName: 'Apellido materno'.split(''),
    email: 'Correo'.split(''),
    password: 'Contraseña'.split(''),
    confirmPassword: 'Confirmar contraseña'.split('')
  }

  const forEachCB = char => char !== ' ' && screen.getAllByText(char)

  beforeAll(() => {
    render(
      <ThemeProvider theme={theme}>
        <SignUp />
      </ThemeProvider>
    )
  })

  test('Should be rendered', () => {
    inputLabel.name.forEach(forEachCB)
    inputLabel.surName.forEach(forEachCB)
    inputLabel.lastName.forEach(forEachCB)
    inputLabel.email.forEach(forEachCB)
    inputLabel.password.forEach(forEachCB)
    inputLabel.confirmPassword.forEach(forEachCB)
  })
})
