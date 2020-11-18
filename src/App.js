import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import NameFilterInput from './components/filters/NameFiltersInputs';
import NumericFiltersInputs from './components/filters/NumericFilters';
import ActiveFilter from './components/ActiveFilter';

function App() {
  return (
    <StarWarsProvider>
      <NameFilterInput />
      <NumericFiltersInputs />
      <ActiveFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
