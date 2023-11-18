import { FirebaseProvider } from '@UI/Context/Firebase'
import { theme } from '@UI/Global-styles'
import { Routing } from '@UI/routing'
import { ThemeProvider } from 'styled-components'



export function App () {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseProvider>
        <Routing />
      </FirebaseProvider>
    </ThemeProvider>
  )
}