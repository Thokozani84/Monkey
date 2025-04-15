import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { MyProvider } from './context/context';

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("App Crashed:", error, info);
  }
  render() {
    return this.state.hasError ? <h1>Something went wrong</h1> : this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <MyProvider>
          <App />
        </MyProvider>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);