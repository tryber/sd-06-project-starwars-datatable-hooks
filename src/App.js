import React from 'react';
import { Provider } from './context/StarWarsContext';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <header className="App-header">
        <Table />
      </header>
    </Provider>
  );
}

// Ícaro explicando no Slack:
// Nesse caso não vamos poder utilizar aquela estratégia que eu mostrei
// de por o index no Provider Porque o teste verifica apenas o App

export default App;
