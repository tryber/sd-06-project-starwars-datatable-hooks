import React from 'react';
import Header from './components/Header';
import InputFilters from './components/InputFilters';
import Table from './components/Table';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <div>
        <InputFilters />
        <table>
          <Header />
          <Table />
        </table>
      </div>
    </DataProvider>
  );
}

export default App;
