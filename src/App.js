import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import Search from './components/Search';

function App() {

  return (
    <StarWarsProvider>
      <SearchInput />
      <Search />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
