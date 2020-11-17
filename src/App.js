import React from 'react';
import Provider from './context/Provider';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Provider>
      <HomePage />
    </Provider>
  );
}

export default App;
