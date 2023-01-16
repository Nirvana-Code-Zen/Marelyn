import { ThemeProvider } from 'styled-components'
import { fireEvent, render, screen } from '@testing-library/react'
import theme from '../../Global-styles/theme'
import SignUp from './index'

describe('<SingUp />', () => {
  const event = { preventDefault: () => {} }

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <SignUp />
      </ThemeProvider>
    )
  })

  beforeEach(() => {
    jest.spyOn(event, 'preventDefault')
  })

  test('Should be rendered', () => {
    screen.getByText('Nombre de usuario')
    screen.getByText('Apellido Paterno')
    screen.getByText('Apellido Materno')
    screen.getByText('Correo')
    screen.getByText('Contraseña')
    screen.getByText('Confirma contraseña')
  })

  test('Should fill form correctly', () => {
    fireEvent.change(screen.getByLabelText('Nombre de usuario'), { target: { value: 'user123' } })
    fireEvent.change(screen.getByLabelText('Nombre(s)'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('Apellido Paterno'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Apellido Materno'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'john.doe@example.es' } })
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } })
    fireEvent.change(screen.getByLabelText('Confirma contraseña'), { target: { value: 'password123' } })

    fireEvent.click(screen.getByText('Crear'))
  })

  test('Should fill form incorrectly', () => {
    fireEvent.change(screen.getByLabelText('Nombre de usuario'), { target: { value: 'user123' } })
    fireEvent.change(screen.getByLabelText('Nombre(s)'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('Apellido Paterno'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Apellido Materno'), { target: { value: '' } })
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'john.doe@examp' } })
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } })
    fireEvent.change(screen.getByLabelText('Confirma contraseña'), { target: { value: 'password123' } })

    fireEvent.click(screen.getByText('Crear'))
  })

  test('Should passwords are equal', () => {
    fireEvent.change(screen.getByLabelText('Nombre de usuario'), { target: { value: 'user123' } })
    fireEvent.change(screen.getByLabelText('Nombre(s)'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('Apellido Paterno'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Apellido Materno'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'john.doe@example.es' } })
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } })
    fireEvent.change(screen.getByLabelText('Confirma contraseña'), { target: { value: 'password123' } })

    fireEvent.click(screen.getByText('Crear'))
  })

  test('Should password aren`t equal', () => {
    fireEvent.change(screen.getByLabelText('Nombre de usuario'), { target: { value: 'user123' } })
    fireEvent.change(screen.getByLabelText('Nombre(s)'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('Apellido Paterno'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Apellido Materno'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'john.doe@example.es' } })
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } })
    fireEvent.change(screen.getByLabelText('Confirma contraseña'), { target: { value: 'password1234' } })

    fireEvent.click(screen.getByText('Crear'))

    screen.getByText('* Contraseñas son distintas')
  })
})
