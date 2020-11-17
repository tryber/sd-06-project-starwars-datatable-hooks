import React from 'react';
import Table from './components/Table';
import SWProvider from './context/StarWarsProvider';

function App() {
  return (
    <SWProvider>
      <header>
        <h1>Star Wars Planets</h1>
      </header>
      <Table />
    </SWProvider>
  );
}

export default App;
