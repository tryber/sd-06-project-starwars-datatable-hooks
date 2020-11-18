import React from 'react';
import './App.css';
import { Table, SearchInputName } from './components';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <main className="App">
        <SearchInputName />
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
