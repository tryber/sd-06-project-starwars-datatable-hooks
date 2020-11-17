import React from 'react';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsContext';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
