import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchInput from './components/SearchImput';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <SearchInput />
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
