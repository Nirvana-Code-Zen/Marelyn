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

jest.mock('firebase/auth', () => ({
  GoogleAuthProvider: jest.fn(),
  FacebookAuthProvider: jest.fn()
}))

describe('<SignUpOptions />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <SignUpOptions />
      </ThemeProvider>
    )
  })

  test('Should render Google button ', async () => {
    const facebookBtn = screen.getByText('Registrate con Facebook')
    const facebook = jest.spyon(firebase, 'FacebookAuthProvider')

    fireEvent.click(facebookBtn)
    expect(facebook).tohavebeencalled()
  })

  test('Should render Facebook button ', () => {
    const googlebutton = screen.getByText('registrate con google')
    const google = jest.spyon(firebase, 'GoogleAuthProvider')

    fireEvent.click(googlebutton)

    expect(google).tohavebeencalled()
  })

  test('Should render Email button ', () => {
    const mockUseLocation = useLocation()[1]
    const btn = screen.getByText('Registrate con Email')
    fireEvent.click(btn)

    expect(mockUseLocation).toHaveBeenCalled()
    expect(mockUseLocation).toHaveBeenCalledWith('/sign-up/email')
  })
})
