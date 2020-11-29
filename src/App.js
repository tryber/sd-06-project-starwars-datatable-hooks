import React from 'react';
import './App.css';
import Tabela from './components/Tabela';
import Filter from './components/Filter';
import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Filter />
        <Tabela />
      </Provider>
    </div>
  );
}

export default App;
