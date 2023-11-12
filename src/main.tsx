import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { GlobalStyles, Spacing } from './Global-styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Spacing/>
    <App />
  </React.StrictMode>
)
