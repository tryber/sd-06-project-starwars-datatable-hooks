import React from 'react';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsContext';
import Title from './components/Title';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import FilterList from './components/FilterList';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <div>
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
      </div>
    </StarWarsProvider>
  );
}

export default App;
