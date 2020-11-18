import React from 'react';
import './App.css';
import PlanetNameFilter from './components/PlanetNameFilter';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <PlanetNameFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
