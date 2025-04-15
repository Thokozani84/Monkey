import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div 
      className="spinner-container" 
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="spinner" aria-hidden="true">
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>
      <p className="spinner-text">Loading your content...</p>
    </div>
  );
};

export default React.memo(LoadingSpinner);