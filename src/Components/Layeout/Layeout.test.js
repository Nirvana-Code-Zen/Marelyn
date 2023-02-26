import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import theme from '../../Global-styles/theme'

import Layeout from './Layeout'

describe('<Layeout/>', () => {
  beforeEach(() => {
    render(
    <ThemeProvider theme={theme}>
      <Layeout/>
    </ThemeProvider>)
  })

  test('should render children', () => {
    const { getByText } = render(<Layeout><div>Test Child</div></Layeout>)
    expect(getByText('Test Child')).toBeInTheDocument()
  })
})
