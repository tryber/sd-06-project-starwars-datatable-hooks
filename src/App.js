import React from 'react';
import SearchInput from './components/SearchInput';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <SearchInput />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
