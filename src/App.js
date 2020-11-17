import React from 'react';
import './App.css';
import ApiProvider from './contexts/providers/ApiProvider';

function App() {
  return (
    <ApiProvider>
      teste
    </ApiProvider>
  );
}

export default App;
