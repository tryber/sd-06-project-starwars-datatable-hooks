import React from 'react';
import SearchInput from './components/SearchInput';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <h1>Star Wars DataTable</h1>
      <SearchInput />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
