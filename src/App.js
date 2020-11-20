import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import StarWarsProvider from './context/StarWarsProvider';

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
