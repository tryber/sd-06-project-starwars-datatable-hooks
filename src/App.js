import React from 'react';
import './App.css';
import TablePlanets from './components/TablePlanets';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="App">
        <TablePlanets />
      </div>
    </PlanetsProvider>
  );
}

export default App;
