import React from 'react';

import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchByName from './components/SearchByName';
import SearchByNumber from './components/SearchByNumber';

function App() {
  return (
    <StarWarsProvider>
      <SearchByName />
      <SearchByNumber />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
