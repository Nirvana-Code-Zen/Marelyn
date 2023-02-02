import { fireEvent, render, screen } from '@testing-library/react'
import { useLocation } from 'wouter'
import firebase from 'firebase/auth'

import SignUpOptions from './index'
import { ThemeProvider } from 'styled-components'

import theme from '../../Global-styles/theme'

jest.mock('wouter', () => {
  const mockLocation = '/sign-up/'
  const mockUseLocation = jest.fn()
  return {
    useLocation: () => [mockLocation, mockUseLocation]
  }
})

describe('<SignUpOptions />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <SignUpOptions />
      </ThemeProvider>
    )
  })

  test('Should Facebook be redirect to dashboard', async () => {
    const facebookBtn = screen.getByLabelText('Registrate con Facebook')
    const facebook = jest.spyOn(firebase, 'FacebookAuthProvider')

    fireEvent.click(facebookBtn)
    expect(facebook).toHaveBeenCalled()
  })

  test('Should Gooogle be redirect to dashboard', () => {
    const mockUseLocation = useLocation()[1]
    const googlebutton = screen.getByLabelText('Registrate con Google')
    const google = jest.spyOn(firebase, 'GoogleAuthProvider')

    fireEvent.click(googlebutton)

    expect(google).toHaveBeenCalled()
    expect(mockUseLocation).toHaveBeenCalled()
    expect(mockUseLocation).toHaveBeenCalledWith('dashboard')
  })

  test('Should render Email button ', () => {
    const mockUseLocation = useLocation()[1]
    const btn = screen.getByLabelText('Registrate con Email')
    fireEvent.click(btn)

    expect(mockUseLocation).toHaveBeenCalled()
    expect(mockUseLocation).toHaveBeenCalledWith('/sign-up/email')
  })
})
