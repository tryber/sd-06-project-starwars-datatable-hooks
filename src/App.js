import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import ActiveFilters from './components/ActiveFilters';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import OrderFilter from './components/OrderFilter';
import './App.css';
// import SWAPIFetch from './services/SWAPIFetch';

function App() {
  return (
    <Provider>
      <NameFilter />
      <NumericFilter />
      <OrderFilter />
      <ActiveFilters />
      <Table />
    </Provider>
  );
}

export default App;
