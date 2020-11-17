import React from 'react';

import Table from './components/Table';
import TableFilters from './components/TableFilters';
import Provider from './context/Provider';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <TableFilters />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
