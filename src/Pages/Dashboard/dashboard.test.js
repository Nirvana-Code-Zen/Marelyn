import Dashboard from './DashboardStyled'
import renderer from 'react-test-renderer'

describe('<Dashboard/>', () => {
  test('Should render the styles of the dashboard component', () => {
    const dashboard = renderer.create(<Dashboard/>).toJSON()
    expect(dashboard).toMatchSnapshot()
  })
})
