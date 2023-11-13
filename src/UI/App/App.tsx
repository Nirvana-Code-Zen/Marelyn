import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../Global-styles'
import { Firebase, initFirebase } from '../firebase/init'
import { Routing } from '../routing'


export function App () {
  const [db] = useState(initFirebase())

  return (
    <ThemeProvider theme={theme}>
      <Firebase value={db}>
        <Routing />
      </Firebase>
    </ThemeProvider>
  )
}