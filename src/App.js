import React from 'react';
import './App.css';
import TablePlanets from './components/TablePlanets';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <div className="App">
      <PlanetsProvider value={ planets }>
        <TablePlanets />
      </PlanetsProvider>
    </div>
  );
}

export default App;
