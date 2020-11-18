import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchInput from './components/SearchImput';
import ComparisonInputs from './components/ComparisonInputs';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <SearchInput />
        <ComparisonInputs /> 
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
