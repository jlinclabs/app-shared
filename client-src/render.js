import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

import defaultTheme from './theme'
import ErrorBoundary from './components/ErrorBoundary'
import AppError from './components/AppError'

const root = ReactDOM.createRoot(document.querySelector('body > main'))

export function render(opts = {}){
  const {
    Routes,
    theme = defaultTheme,
  } = opts
  if (React !== opts.React){
    throw new Error(`REACTS DONT MATCH!!`)
  }
  console.log('SAME REACT??', React === opts.React, {
    given: opts.React,
    imported: React,
  })
  root.render(
    <React.StrictMode>
      <ThemeProvider {...{theme}}>
        <CssBaseline enableColorScheme />
        <ErrorBoundary onError={error => <AppError {...{error}}/>}>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </React.StrictMode>
  )
}
