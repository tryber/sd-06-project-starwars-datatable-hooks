import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import Filters from './components/Filters';

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
