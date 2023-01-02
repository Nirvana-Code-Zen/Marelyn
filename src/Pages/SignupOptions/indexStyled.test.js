import { ThemeProvider } from 'styled-components'
import renderer from 'react-test-renderer'
import SignUpOptionsStyled from './indexStyled'

import theme from '../../Global-styles/theme'

describe('<SignUpOptionsStyled/>', () => {
  test('Should be global styles ready', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <SignUpOptionsStyled />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
