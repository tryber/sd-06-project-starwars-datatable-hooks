import React from 'react';
import './App.css';
import PlanetsTable from './components/PlanetsTable';
import StarWarsProvider from './contexts/providers/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <PlanetsTable />
    </StarWarsProvider>
  );
}

export default App;
