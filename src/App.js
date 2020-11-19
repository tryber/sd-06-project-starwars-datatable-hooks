import React from 'react';
import SearchInput from './components/SearchInput';
// import SearchFilters from './components/SearchFilters';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <SearchInput />
      {/* <SearchFilters /> */}
      <Table />
    </StarWarsProvider>
  );
}

export default App;
