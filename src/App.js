import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import StarWarsProvider from './provider/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <h1>StarWars: May the Force be with you</h1>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
