import { H4 } from './index'
import renderer from 'react-test-renderer'

describe('<GlobalSytles/>', () => {
  test('Should be global styles ready', () => {
    const tree = renderer.create(<H4 />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
