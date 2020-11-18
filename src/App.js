import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <header>
        <h1>Star Wars Planets</h1>
      </header>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
