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
    screen.getByText('Tipo de cuenta')
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

    screen.getByText('Usuario creado correctamente')
    expect(screen.queryByText('Corrigue los siguientes errores:')).not.toBeInTheDocument()
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

    screen.getByText('Corrigue los siguientes errores:')
    expect(screen.queryByText('Usuario creado correctamente')).not.toBeInTheDocument()
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

    screen.getByText('Usuario creado correctamente')
    expect(screen.queryByText('Corrigue los siguientes errores:')).not.toBeInTheDocument()
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

    screen.getByText('Corrigue los siguientes errores:')
    screen.getByText('* Contraseñas son distintas')
    expect(screen.queryByText('Usuario creado correctamente')).not.toBeInTheDocument()
  })
})
