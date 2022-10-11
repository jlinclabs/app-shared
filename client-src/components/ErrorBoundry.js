import * as React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught', { error, errorInfo })
    // TODO post errors to server for logging
  }

  render() {
    return this.state.error
      ? props.onError(this.state.error)
      : this.props.children
  }
}
