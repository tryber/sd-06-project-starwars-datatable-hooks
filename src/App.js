import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import SearchInput from './components/SearchInput';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <SearchInput />
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
