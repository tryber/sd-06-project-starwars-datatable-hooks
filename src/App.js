import React from 'react';

import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
// import Teste from './components/Teste';

import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
