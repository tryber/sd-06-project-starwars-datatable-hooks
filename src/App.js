import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import StarWarsProvider from './provider/StarWarsProvider';
import SortingFilter from './components/SortingFilter';

function App() {
  return (
    <StarWarsProvider>
      <h1>StarWars: May the Force be with you</h1>
      <Filter />
      <SortingFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
