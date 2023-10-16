import React from 'react';

class AppClassErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  //    A class component becomes an error boundary if it
  //    defines either(or both) of the lifecycle methods
  //    static getDerivedStateFromError() or componentDidCatch().
  //    Use static getDerivedStateFromError() to render a fallback UI
  //    after an error has been thrown.Use componentDidCatch()
  //    to log error information.
  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch(error, errorInfo) {
    // consider logging the error to a service
    console.log('Error caught', error, errorInfo);
    this.setState((s, p) => ({
      hasError: true,
    }));
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <h3>Error caught in boundary!</h3>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default AppClassErrorBoundary;
