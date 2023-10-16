import React from 'react';

class AppClassErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

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
