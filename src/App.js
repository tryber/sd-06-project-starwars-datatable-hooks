import React from 'react';
import './App.css';
import { Table, FormFilters } from './components';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <main className="App">
        <FormFilters />
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
