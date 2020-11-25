import React from 'react';
import Filters from './components/Filters';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
