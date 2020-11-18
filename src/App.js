import React from 'react';
import './App.css';
import PlanetNameFilter from './components/PlanetNameFilter';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import NumericValuesFilterlter from './components/NumericValuesFilter';

function App() {
  return (
    <StarWarsProvider>
      <PlanetNameFilter />
      <NumericValuesFilterlter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
