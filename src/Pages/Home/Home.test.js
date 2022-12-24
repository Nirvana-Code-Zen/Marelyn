import { render } from '@testing-library/react'

import Home from './index'

describe('<App />', () => {
  test('Should be rendered child components', () => {
    const { getByText } = render(<Home />)

    expect(getByText('Zapateria Marelyn')).toBeInTheDocument()
    expect(getByText('Login')).toBeInTheDocument()
  })
})
