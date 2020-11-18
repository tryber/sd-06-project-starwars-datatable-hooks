import React from 'react';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <header>
        <h1>Star Wars Planet</h1>
      </header>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
