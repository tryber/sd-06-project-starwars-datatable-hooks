import React from 'react';
import Table from './components/Table';
import ProviderContext from './context/ProviderContext';

function App() {
  return (
    <ProviderContext>
      <Table />
    </ProviderContext>
  );
}

export default App;
