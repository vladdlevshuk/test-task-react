import React, { Component, ErrorInfo } from 'react';
import styles from './ErrorBoundary.module.scss';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles['error-boundary__container']}>
          <div className={styles['error-boundary__content']}>
            <div className={styles['error-boundary__message-container']}>
              <h1 className={styles['error-boundary__title']}>An error has occurred</h1>
              <p className={styles['error-boundary__description']}>
                Something went wrong. Please try refreshing the page or go back to the homepage.
              </p>
              <button
                className={styles['error-boundary__refresh-button']}
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
