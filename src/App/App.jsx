import { ThemeProvider } from 'styled-components'
import Routing from '../routing'

import theme from '../Global-styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Routing />
  </ThemeProvider>
)

export default App
