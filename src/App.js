import React from 'react';

import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import SearchInput from './components/SearchInput';
import Table from './components/Table';

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
