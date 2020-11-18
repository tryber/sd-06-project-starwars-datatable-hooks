import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <SearchInput />
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
