import React from 'react';
import './App.css';

import StarWarsProvider from './context/StarWarsProvider';

import Header from './components/Header';
import InputFilterBar from './components/InputFilterBar';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <InputFilterBar />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
