import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        Star Wars Planet List
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
