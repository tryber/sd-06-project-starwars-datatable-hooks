import React from 'react';
import StarWarProvider from './context/StarWarProvider';
import './App.css';
import Table from './components/Table';
import SearchInput from './components/searchInput';

function App() {
  return (
    <StarWarProvider>
      <SearchInput />
      <Table />
    </StarWarProvider>
  );
}

export default App;
