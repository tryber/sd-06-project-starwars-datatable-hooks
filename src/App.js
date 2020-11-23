import React from 'react';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import NumberInput from './components/NumberInput';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <SearchInput />
      <NumberInput />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
