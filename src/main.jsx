import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'

import initFirebase from './firebase/init'

import './index.css'

initFirebase()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
