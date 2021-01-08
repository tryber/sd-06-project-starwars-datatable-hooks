import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
