import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import TableFilters from './components/TableFilters';

function App() {
  return (
    <Provider>
      <SearchBar />
      <TableFilters />
      <Table />
    </Provider>
  );
}

export default App;
