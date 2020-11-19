import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import InputName from './components/InputName';
import InputNumbers from './components/InputNumbers';

function App() {
  return (
    <Provider>
      <InputName />
      <InputNumbers />
      <Table />
    </Provider>
  );
}

export default App;
