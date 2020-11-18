import React from 'react';
import StarWarProvider from './context/StarWarProvider';
import './App.css';
import Table from './components/Table';
import SearchInput from './components/searchInput';
import ComparisonInputs from './components/ComparisonInputs';

function App() {
  return (
    <StarWarProvider>
      <SearchInput />
      <ComparisonInputs />
      <Table />
    </StarWarProvider>
  );
}

export default App;
