import React from 'react';
import './App.css';
import InputFilters from './components/InputFilters';
import TablePlanets from './components/TablePlanets';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="App">
        <InputFilters />
        <TablePlanets />
      </div>
    </PlanetsProvider>
  );
}

export default App;
