
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '~UI/Global-styles'
import { Firebase, initFirebase } from '~UI/firebase/init'
import { Routing } from '~UI/routing'


export function App () {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseProvider>
        <Routing />
      </FirebaseProvider>
    </ThemeProvider>
  )
}