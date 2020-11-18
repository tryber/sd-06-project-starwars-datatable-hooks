import React from 'react';
import Table from './components/Table';
import SearchField from './components/SearchField';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <SearchField />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
