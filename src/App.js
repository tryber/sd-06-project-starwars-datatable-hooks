import React from 'react';
import StarWarProvider from './context/StarWarProvider';
import Table from './components/Table';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <StarWarProvider>
      <SearchInput />
      <Table />
    </StarWarProvider>
  );
}

export default App;
