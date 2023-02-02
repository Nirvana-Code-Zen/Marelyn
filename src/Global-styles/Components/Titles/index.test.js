import H1, { H2, H4 } from './index'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'

describe('<GlobalSytles/>', () => {
  test('Should be global styles ready ', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <H1/>
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<GlobalStytles/>', () => {
  test('Should be global styles ready ', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <H2/>
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<GlobalStytles />', () => {
  test('Should be global styles ready ', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <H4/>
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
