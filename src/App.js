import React from 'react';
import './App.css';
import PlanetsTable from './components/PlanetsTable';
import TableFilters from './components/TableFilters';
import StarWarsProvider from './contexts/providers/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <TableFilters />
      <PlanetsTable />
    </StarWarsProvider>
  );
}

export default App;
