import React from 'react';
import Provider from './context/Provider';
import './App.css';
import {
  FilterByName, FilterByNumbers, OrderOptions, Filters, Table, Footer,
} from './components';

function App() {
  return (
    <Provider>
      <FilterByName />
      <FilterByNumbers />
      <OrderOptions />
      <Filters />
      <Table />
      <Footer />
    </Provider>
  );
}

export default App;
