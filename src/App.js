import React from 'react';
import { Table, Filters } from './components';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <section>
          <Filters />
          <Table />
        </section>
      </main>
    </StarWarsProvider>
  );
}

export default App;
