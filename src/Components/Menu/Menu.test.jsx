import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../../App/App'

import { MemoryRouter } from 'react-router-dom'

describe('<Menu />', () => {
  test('Click event menu', async () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    )

    const containerMenu = screen.getByTestId('container-menu')
    const btnMenu = screen.getByTestId('side-menu')

    fireEvent.click(btnMenu)

    expect(containerMenu).toHaveClass('open', { exact: true })
    expect(btnMenu).toHaveClass('bx bx-menu bx-md open btn-Menu', { exact: true })
  })
})
