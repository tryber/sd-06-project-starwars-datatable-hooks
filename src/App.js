import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import SearchInputs from './components/SearchInputs';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <SearchInputs />
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
