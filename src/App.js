import React from 'react';

import Provider from './Context/StarWarsProvider';

import Table from './components/Table';
import FilterTable from './components/TableFiltro';

function App() {
  return (
    <div>
      <Provider>
        <FilterTable />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
