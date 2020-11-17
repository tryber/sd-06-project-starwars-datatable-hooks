import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';

export default function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}
