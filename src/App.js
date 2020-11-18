import React from 'react';
import Filters from './components/Filters';
import Table from './components/Table';
import ProviderContext from './context/ProviderContext';

function App() {
  return (
    <ProviderContext>
      <Filters />
      <Table />
    </ProviderContext>
  );
}

export default App;
