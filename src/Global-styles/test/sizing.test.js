import Sizing from '../global-styles'
import renderer from 'react-test-renderer'

describe('<GlobalSytles/>', () => {
  test('Should be global styles ready', () => {
    const tree = renderer.create(<Sizing />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
