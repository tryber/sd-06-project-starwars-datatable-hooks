import React from 'react';
import { Provider } from './context/StarWarsContext';
import Table from './components/Table';
import Filter from './components/Filter';
import './App.css';
import FilterNumeric from './components/FilterNumeric';

function App() {
  return (
    <Provider>
      <section>
        <Filter />
        <FilterNumeric />
        <Table />
      </section>
    </Provider>
  );
}

// Ícaro explicando no Slack:
// Nesse caso não vamos poder utilizar aquela estratégia que eu mostrei
// de por o index no Provider Porque o teste verifica apenas o App

export default App;
