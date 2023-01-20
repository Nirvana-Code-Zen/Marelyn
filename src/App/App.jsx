import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Routing from '../routing'

import initFirebase, { Firebase } from '../firebase/init'
import theme from '../Global-styles/theme'

const App = () => {
  const [db] = useState(initFirebase())

  return (
    <ThemeProvider theme={theme}>
      <Firebase value={db}>
        <Routing />
      </Firebase>
    </ThemeProvider>
  )
}

export default App
