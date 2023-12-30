import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import 'shared/config/i18n/i18n'

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
