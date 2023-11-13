import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@UI/App'

import './root.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
