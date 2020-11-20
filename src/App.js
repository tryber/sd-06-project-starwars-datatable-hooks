import React from 'react';

import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import FiltersInput from './components/FiltersInput';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <FiltersInput />
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
