import React from 'react';

import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import SearchInput from './components/SearchInput';
import Table from './components/Table';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <SearchInput />
        <NumericFilter />
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
