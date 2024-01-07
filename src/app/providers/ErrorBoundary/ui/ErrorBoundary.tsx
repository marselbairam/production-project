import React, { type ErrorInfo, type ReactNode } from 'react'
import { withTranslation } from 'react-i18next'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_error: Error) {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return <PageError />
    }

    return children
  }
}

export default withTranslation()(ErrorBoundary)
