import React from 'react';
import './App.css';
import Table from './component/tableWars';
import Provider from './context/StarWarProvider';

function App() {
  return (
    <Provider>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
