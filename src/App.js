import React from 'react';
import DeleteFilters from './components/DeleteFilters';
import InputFilters from './components/InputFilters';
import Table from './components/Table';
import ProviderContext from './context/ProviderContext';

function App() {
  return (
    <ProviderContext>
      <InputFilters />
      <DeleteFilters />
      <Table />
    </ProviderContext>
  );
}

export default App;
