import React from 'react';
import './App.css';
import Table from './components/Table';
import WarsProvider from './context/WarsProvider';
import SearchByName from './components/SearchByName';
import SelectedFilter from './components/SelectedFilter';
import Secondfilter from './components/secondFilter';

function App() {
  return (
    <WarsProvider>
      <SearchByName />
      <SelectedFilter />
      <Secondfilter />
      <Table />
    </WarsProvider>
  );
}

export default App;
