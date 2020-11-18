import React from 'react';
import Table from './components/Table';
import StarWarsProvider from './provider/Provider';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import FilterList from './components/FilterList';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <header>
        <div>
          <h1> Star Wars </h1>
          <h4> Planets Search Engine </h4>
        </div>
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
