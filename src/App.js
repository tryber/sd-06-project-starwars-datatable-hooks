import React from 'react';
import Table from './components/Table';
import SearchField from './components/SearchField';
import StarWarsProvider from './context/StarWarsProvider';
import FiltersProvider from './context/FiltersProvider';

function App() {
  return (
    <main>
      <FiltersProvider>
        <StarWarsProvider>
          <SearchField />
          <Table />
        </StarWarsProvider>
      </FiltersProvider>
    </main>
  );
}

export default App;
