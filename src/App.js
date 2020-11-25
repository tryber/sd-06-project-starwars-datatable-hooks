import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div className="App">
        Star Wars Planets
        <Table />
      </div>
    </Provider>
  );
}

export default App;
