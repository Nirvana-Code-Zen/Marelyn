import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '~UI/App'
import { GlobalStyles, Spacing } from '~UI/Global-styles'

import './root.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Spacing />
    <App />
  </React.StrictMode>,
)
