import { ThemeProvider } from 'styled-components'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useLocation } from 'wouter'
import theme from '../../Global-styles/theme'
import SignUp from './index'
import initFirebase, { Firebase } from '../../firebase/init'
import * as firestore from 'firebase/firestore'
import * as firebaseAuth from 'firebase/auth'

jest.mock('wouter', () => {
  const mockLocation = 'dashboard'
  const mockUseLocation = jest.fn()
  return {
    useLocation: () => [mockLocation, mockUseLocation]
  }
})

describe('<SingUp />', () => {
  const event = { preventDefault: () => {} }

  const response = {
    account_type: 'cliente',
    username: 'user123',
    name: 'John',
    last_name: 'Doe',
    mid_name: 'Doe',
    email: 'john.doe@example.es',
    password: 'password123'
  }

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Firebase value={initFirebase()}>
          <SignUp />
        </Firebase>
      </ThemeProvider>
    )
  })

  beforeEach(() => {
    jest.spyOn(event, 'preventDefault')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should fill form correctly', async () => {
    fireEvent.change(screen.getByAltText('user'), { target: { value: response.username } })
    fireEvent.change(screen.getByAltText('name'), { target: { value: response.name } })
    fireEvent.change(screen.getByAltText('lastName'), { target: { value: response.mid_name } })
    fireEvent.change(screen.getByAltText('secondLastName'), { target: { value: response.last_name } })
    fireEvent.change(screen.getByAltText('email'), { target: { value: response.email } })
    fireEvent.change(screen.getByAltText('password'), { target: { value: response.password } })
    fireEvent.change(screen.getByAltText('confirmPassword'), { target: { value: response.password } })

    fireEvent.click(screen.getByText('Crear'))

    await waitFor(() => {
      const mockUseLocation = useLocation()[1]
      const mockStore = jest.spyOn(firestore, 'addDoc')
      const mockAuth = jest.spyOn(firebaseAuth, 'createUserWithEmailAndPassword')

      const mockResponse = { ...response }
      delete mockResponse.password

      expect(mockAuth).toHaveBeenCalledTimes(1)
      expect(mockStore).toHaveBeenCalledWith(
        firestore.collection(initFirebase().db, 'Users'),
        mockResponse
      )

      expect(mockUseLocation).toHaveBeenCalledWith('dashboard', { replace: true })
    })
  })

  test('Should fill form incorrectly', () => {})

  test('Should passwords are equal', () => {})
})
