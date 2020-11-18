import React from 'react';

import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import SearchInput from './components/SearchInput';

import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <SearchInput />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
