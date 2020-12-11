import React from 'react';
import StarWarProvider from './context/StarWarProvider';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import SearchSelected from './components/SearchSelected';

function App() {
  return (
    <StarWarProvider>
      <SearchInput />
      <SearchSelected />
      <Table />
    </StarWarProvider>
  );
}

export default App;
