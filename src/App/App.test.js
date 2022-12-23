import { render, screen } from '@testing-library/react'

import App from './App.jsx'

describe('<App />', () => {
  test('Should be rendered', () => {
    render(<App />)
    screen.getByText('Zapateria Marelyn')
  })
})
