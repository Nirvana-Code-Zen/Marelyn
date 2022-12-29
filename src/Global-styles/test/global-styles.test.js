import GlobalStyles from '../global-styles'
import renderer from 'react-test-renderer'

describe('<GlobalSytles/>', () => {
  test('Should be global styles ready', () => {
    const tree = renderer.create(<GlobalStyles />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
