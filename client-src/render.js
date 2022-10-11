import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

import defaultTheme from './theme'
import ErrorBoundry from './components/ErrorBoundry'
import AppError from './components/AppError'
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
          <ErrorBoundry onError={error => <AppError {...{error}}/>}>
            <Routes/>
          </ErrorBoundry>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
