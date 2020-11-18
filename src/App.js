import React from 'react';
import Table from './components/Table';
import StarWarsProvider from './provider/Provider';
import Title from './components/Title';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import FilterList from './components/FilterList';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <header>
        <Title />
      </header>
      <section>
        <FilterName />
        <FilterNumber />
        <FilterList />
      </section>
      <section>
        <Table />
      </section>
    </StarWarsProvider>
  );
}

export default App;
