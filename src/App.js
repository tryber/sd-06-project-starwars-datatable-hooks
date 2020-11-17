import React from 'react';
import PlanetContextProvider from './contexts/PlanetContext';
import Navbar from './components/Navbar';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <div>
      <Navbar />
      <PlanetContextProvider>
        <PlanetsTable />
      </PlanetContextProvider>
    </div>
  );
}

export default App;
