import React from 'react';
import './App.css';

import Header from './components/Header';
import InputFilterBar from './components/InputFilterBar';
import Table from './components/Table';

function App() {
  return (
    <>
      <Header />
      <InputFilterBar />
      <Table />
    </>
  );
}

export default App;
