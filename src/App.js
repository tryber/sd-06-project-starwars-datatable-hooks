import React from 'react';
import './App.css';
import Table from './context/components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
