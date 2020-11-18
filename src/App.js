import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import InputName from './components/InputName';

function App() {
  return (
    <Provider>
      <InputName />
      <Table />
    </Provider>
  );
}

export default App;
