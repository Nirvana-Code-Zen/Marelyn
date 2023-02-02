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

  test('Should fill form correctly', () => {
    fireEvent.change(screen.getByAltText('user'), { target: { value: 'user123' } })
    fireEvent.change(screen.getByAltText('name'), { target: { value: 'John' } })
    fireEvent.change(screen.getByAltText('lastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByAltText('secondLastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByAltText('email'), { target: { value: 'john.doe@example.es' } })
    fireEvent.change(screen.getByAltText('password'), { target: { value: 'password123' } })
    fireEvent.change(screen.getByAltText('confirmPassword'), { target: { value: 'password123' } })

    fireEvent.click(screen.getByText('Crear'))
  })

  test('Should fill form incorrectly', () => {
    fireEvent.change(screen.getByAltText('user'), { target: { value: 'user123' } })
    fireEvent.change(screen.getByAltText('name'), { target: { value: 'John' } })
    fireEvent.change(screen.getByAltText('lastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByAltText('secondLastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByAltText('email'), { target: { value: 'john.doe@example.es' } })
    fireEvent.change(screen.getByAltText('password'), { target: { value: 'password123' } })
    fireEvent.change(screen.getByAltText('confirmPassword'), { target: { value: 'password123' } })

    fireEvent.click(screen.getByText('Crear'))
  })

  test('Should passwords are equal', () => {
    fireEvent.change(screen.getByAltText('user'), { target: { value: 'user123' } })
    fireEvent.change(screen.getByAltText('name'), { target: { value: 'John' } })
    fireEvent.change(screen.getByAltText('lastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByAltText('secondLastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByAltText('email'), { target: { value: 'john.doe@example.es' } })
    fireEvent.change(screen.getByAltText('password'), { target: { value: 'password123' } })
    fireEvent.change(screen.getByAltText('confirmPassword'), { target: { value: 'password123' } })

    fireEvent.click(screen.getByText('Crear'))
  })
})
