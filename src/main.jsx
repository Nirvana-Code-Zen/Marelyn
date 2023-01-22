import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import GlobalStyles from './Global-styles/global-styles'
import Spacing from './Global-styles/spacing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Spacing/>
    <App />
  </React.StrictMode>
)
