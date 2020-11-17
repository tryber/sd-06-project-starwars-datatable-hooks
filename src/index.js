import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import JobProvider from './context/JobProvider';

ReactDOM.render(
  <JobProvider>
    <App />
  </JobProvider>, document.getElementById('root'),
);
