import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import Filter from './components/Filter';

export default function App() {
  return (
    <StarWarsProvider>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}
