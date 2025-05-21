/**
 * Error boundary component that catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the whole app.
 * This is a class component because error boundaries must be implemented using class components.
 */

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  /** The content to render when there is no error */
  children: ReactNode;
}

interface State {
  /** Whether an error has occurred */
  hasError: boolean;
  /** The error message, if any */
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  /**
   * Lifecycle method that is called when an error occurs in a child component.
   * Updates the state to indicate an error has occurred.
   * @param error - The error that was thrown
   */
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  /**
   * Lifecycle method that is called after an error has been thrown.
   * Can be used for error logging or reporting.
   * @param error - The error that was thrown
   * @param errorInfo - Additional information about the error
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  /**
   * Renders either the children components or a fallback UI if an error occurred.
   */
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
