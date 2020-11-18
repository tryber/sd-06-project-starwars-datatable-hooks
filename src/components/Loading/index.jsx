import React from 'react';

import './styles.css';

function Loading() {
  return (
    <div className="loading-page-container">
      <div className="loading-container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
  );
}

export default Loading;
