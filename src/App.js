import React from 'react';
import './App.css';
import Table from './components/Table';
import WarsProvider from './context/WarsProvider';
import Header from './components/header';

function App() {
  return (
    <WarsProvider>
      <Header />
      <Table />
    </WarsProvider>
  );
}

export default App;
