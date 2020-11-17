import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';

import Table from './components/Table';
import InputFilter from './components/InputFilter';

import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <InputFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
