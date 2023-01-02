import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import GlobalStyles from './Global-styles/global-styles'

import initFirebase from './firebase/init'

initFirebase()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
