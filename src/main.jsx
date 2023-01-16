import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import GlobalStyles from './Global-styles/global-styles'
import Sizing from './Global-styles/sizing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Sizing />
    <App />
  </React.StrictMode>
)
