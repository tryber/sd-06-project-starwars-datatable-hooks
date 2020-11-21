import React from 'react';
import './App.css';
import PlanetNameFilter from './components/PlanetNameFilter';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import NumericValuesFilter from './components/NumericValuesFilter';

function App() {
  return (
    <StarWarsProvider>
      <PlanetNameFilter />
      <NumericValuesFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
