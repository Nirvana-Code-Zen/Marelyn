import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../Global-styles'

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
