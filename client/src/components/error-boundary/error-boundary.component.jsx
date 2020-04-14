import React, { Component } from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error & return fallback UI
    return { hasErrored: true };
  }

  render() {}
}
