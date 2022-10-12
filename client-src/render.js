import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

import defaultTheme from './theme'
import ErrorBoundary from './components/ErrorBoundary'
import AppError from './components/AppError'

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
          <ErrorBoundary onError={error => <AppError {...{error}}/>}>
            <Routes/>
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
