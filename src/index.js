import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WarsProvider from './context/WarsProvider';

ReactDOM.render(
  <WarsProvider>
    <App />
  </WarsProvider>,
  document.getElementById('root'),
);
