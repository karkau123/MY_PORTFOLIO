import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Portfolio rendering error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-message">
          <h1>Couldn’t open the portfolio</h1>
          <p>Reload the page to try again.</p>
          <button className="button button-primary" onClick={() => window.location.reload()}>Reload page</button>
        </main>
      );
    }

    // This boundary is used only at the application root with a React child.
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
