import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

import defaultTheme from './theme'
import DebugPage from './pages/DebugPage'
import NotFoundPage from './pages/NotFoundPage'
import './cqrs'

const root = ReactDOM.createRoot(document.querySelector('body > main'))

export function render(opts = {}){
  const {
    APP_NAME,
    Routes,
    theme = defaultTheme,
  } = opts
  const props = {
    APP_NAME,
  }
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider {...{theme}}>
          <CssBaseline enableColorScheme />
          <Routes>
            <Route path="/debug/*" element={<DebugPage {...props}/>}/>
            <Route path="*" element={<NotFoundPage {...props}/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
