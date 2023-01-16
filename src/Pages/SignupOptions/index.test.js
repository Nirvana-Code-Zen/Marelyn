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

  test('Should render Google button ', async () => {
    const facebookBtn = screen.getByText('Registrate con Facebook')
    const facebook = jest.spyOn(firebase, 'FacebookAuthProvider')

    fireEvent.click(facebookBtn)
    expect(facebook).toHaveBeenCalled()
  })

  test('Should render Facebook button ', () => {
    const googlebutton = screen.getByText('Registrate con Google')
    const google = jest.spyOn(firebase, 'GoogleAuthProvider')

    fireEvent.click(googlebutton)

    expect(google).toHaveBeenCalled()
  })

  test('Should render Email button ', () => {
    const mockUseLocation = useLocation()[1]
    const btn = screen.getByText('Registrate con Email')
    fireEvent.click(btn)

    expect(mockUseLocation).toHaveBeenCalled()
    expect(mockUseLocation).toHaveBeenCalledWith('/sign-up/email')
  })
})
