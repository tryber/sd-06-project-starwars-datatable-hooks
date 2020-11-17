import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import InputName from './components/InputName';
import InputNumber from './components/InputNumber';

function App() {
  return (
    <Provider>
      <InputName />
      <InputNumber />
      <Table />
    </Provider>
  );
}

export default App;
