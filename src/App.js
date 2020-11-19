import React from 'react';
import './App.css';
import SearchTerm from './components/SearchTerm';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import SearchNumericValue from './components/SearchNumericValue';

function App() {
  return (
    <StarWarsProvider>
      <main className="main-container">
        <SearchTerm />
        <div className="form-row">
          <SearchNumericValue />
        </div>
        <br />
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
