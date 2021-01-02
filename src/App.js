import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import SWProvider from './context/SWProvider';
import './App.css';

function App() {
  return (
    <SWProvider>
      <Header />
      <Table />
    </SWProvider>
  );
}

export default App;
