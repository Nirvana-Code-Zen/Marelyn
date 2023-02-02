import { ThemeProvider } from 'styled-components'
import renderer from 'react-test-renderer'
import theme from '../../Global-styles/theme'

import ErrorMessageStyle from './indexStyled'

describe('<ErrorMessageStyle />', () => {
  test('Should be renderer', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <ErrorMessageStyle />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
