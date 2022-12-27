import { render } from '@testing-library/react'
import PropTypes from 'prop-types'

import Scope from './Scope'

describe('<Scope />', () => {
  test('Should render children node', () => {
    const { getByText } = render(
          <Scope base="/">
            <p>Hello, world!</p>
          </Scope>
    )

    const p = getByText('Hello, world!')
    expect(p).toBeInTheDocument()
  })

  test('Should rendered nothing', () => {
    const { container } = render(
            <Scope base="/foo">
              <p>Hello, world!</p>
            </Scope>
    )

    expect(container.innerHTML).toBe('')
  })

  test('Should has base and children props', () => {
    expect(Scope.propTypes).toEqual({
      base: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired
    })
  })
})
