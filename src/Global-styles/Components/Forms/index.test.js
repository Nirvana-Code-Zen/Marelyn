import { ThemeProvider } from 'styled-components'
import Form, { Input, GroupForm } from './index'
import renderer from 'react-test-renderer'
import theme from '../../theme'

describe('<Form /> Styled Component', () => {
  test('Should be Form styles ready', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Should be Input styles ready', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Should be FormGroup styles ready', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <GroupForm />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
