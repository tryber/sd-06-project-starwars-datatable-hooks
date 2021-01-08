import React from 'react';
import SearchFormName from './components/SearchFormName';
import Table from './components/Table';
import Provider from './context/Provider';
import SearchFormNumber from './components/SearchFormNumber';
import SortTable from './components/SortTable';

function App() {
  return (
    <Provider>
      <SearchFormName />
      <SearchFormNumber />
      <SortTable />
      <Table />
    </Provider>
  );
}

export default App;
