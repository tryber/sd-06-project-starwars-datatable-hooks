import React from 'react';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <SearchInput />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
