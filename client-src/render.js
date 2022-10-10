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
    Routes,
    theme = defaultTheme,
  } = opts
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider {...{theme}}>
          <CssBaseline enableColorScheme />
          <Routes>
            <Route path="/debug/*" element={<DebugPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
