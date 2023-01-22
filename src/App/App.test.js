import { render, screen } from '@testing-library/react'

import App from './App.jsx'

describe('<App />', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('Should be rendered', () => {
    screen.getByText('Zapateria Marelyn')
  })
})
