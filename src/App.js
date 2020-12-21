import React from 'react';
import PlanetContextProvider from './context/PlanetContext';
import FilterContextProvider from './context/FilterContext';
import Navbar from './components/Navbar';
import PlanetsTable from './components/PlanetsTable';
import Filters from './components/Filters';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <PlanetContextProvider>
        <FilterContextProvider>
          <Filters />
          <PlanetsTable />
        </FilterContextProvider>
      </PlanetContextProvider>
    </div>
  );
}

export default App;
