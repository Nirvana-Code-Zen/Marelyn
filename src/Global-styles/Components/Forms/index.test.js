import { ThemeProvider } from 'styled-components'
import Form, { Input, GroupForm, Select, Option } from './index'
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

  test('Should be Select styles ready', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Select />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Should be Option styles ready', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Option />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
